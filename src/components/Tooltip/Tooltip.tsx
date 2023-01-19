import React, { useCallback, useEffect, useState, useRef, useMemo } from 'react'
import _ from 'lodash'
import clsx from 'clsx'
import { createPortal } from 'react-dom'

import cls from '@helpers/class'
import useDetectResize from '@hooks/useDetectResize'
import useIsomorphicLayoutEffect from '@hooks/useIsomorphicLayoutEffect'

import './Tooltip.scss'

const COMPONENT = 'tooltip'

interface TooltipProps {
  placement:
    | 'top'
    | 'top-left'
    | 'top-right'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right'
    | 'left'
    | 'left-top'
    | 'left-bottom'
    | 'right'
    | 'right-top'
    | 'right-bottom'
  align: 'left' | 'right' | 'center'
  text: string | React.ReactElement
  variant?: 'default' | 'white'
  isAdjust?: boolean
  defaultOpen?: boolean
  hasCaret?: boolean
  zIndex?: number
  className?: string
  parentContainer?: () => HTMLElement // 렌더 시점에서는 대상을 찾을 수 없기 때문에 함수형태로 전달 받음
  style?: object
  children: React.ReactElement
}

interface PortalWithRefProps {
  reference: React.RefObject<HTMLElement>
  children: React.ReactElement
}

const PortalWithRef = ({
  reference,
  children,
}: PortalWithRefProps): React.ReactPortal => {
  const newChilden = React.cloneElement(children, {
    ref: reference,
  })

  return createPortal(newChilden, document.body)
}

const DEFAULT_OFFSET = 2 // spacing_01
const CARET_OFFSET = 10 // caret-width / 2 + default_offset
const CARET_WIDTH = 12
const ALIGN_TYPES = ['left', 'center', 'right']
const DEFAULT_Z_INDEX = 9000

const getOffsetDirection = (placement) => _.split(placement, '-')
const getCalculatingPos = (refRect, floatRect, directions, hasCaret) => {
  // 스크롤 위치에 따른 getBoundingClientRect 수치 보정 값
  const scrollY = window.scrollY || window.pageYOffset
  const scrollX = window.scrollX || window.pageXOffset

  const _offset = hasCaret ? CARET_OFFSET : DEFAULT_OFFSET

  // tooltip pos
  let _left = 0
  let _top = 0

  // arrow pos
  let _aLeft = 0
  let _aTop = 0

  // 아래 경우는 width 를 기반으로한 x 축 제어
  if (['top', 'bottom'].includes(directions[0])) {
    if (directions[0] === 'top') {
      _top = refRect.top - (floatRect.height + _offset)
      _aTop = floatRect.height - CARET_WIDTH / 2 - DEFAULT_OFFSET
    } else {
      _top = refRect.top + (refRect.height + _offset)
      _aTop = -CARET_WIDTH / 2 + DEFAULT_OFFSET
    }

    if (directions[1]) {
      if (directions[1] === 'left') {
        _left = refRect.left
        _aLeft = CARET_WIDTH
      } else {
        _left = refRect.left + refRect.width - floatRect.width
        _aLeft = floatRect.width - CARET_WIDTH * 2
      }
    } else {
      _left = refRect.left + (refRect.width / 2 - floatRect.width / 2)
      _aLeft = floatRect.width / 2 - CARET_WIDTH / 2
    }
  } else {
    if (directions[0] === 'left') {
      _left = refRect.left - (floatRect.width + _offset)
      _aLeft = floatRect.width - CARET_WIDTH / 2 - DEFAULT_OFFSET
    } else {
      _left = refRect.left + (refRect.width + _offset)
      _aLeft = -CARET_WIDTH / 2
    }

    if (directions[1]) {
      if (directions[1] === 'top') {
        _top = refRect.top
        _aTop = CARET_WIDTH / 2
      } else {
        _top = refRect.top + refRect.height - floatRect.height
        _aTop = CARET_WIDTH / 2
      }
    } else {
      _top = refRect.top + (refRect.height / 2 - floatRect.height / 2)
      _aTop = floatRect.height / 2 - CARET_WIDTH / 2
    }
  }

  return [_top + scrollY, _left + scrollX, _aTop, _aLeft]
}

const CONVERT_DIRECTION = {
  top: 'bottom',
  bottom: 'top',
  left: 'right',
  right: 'left',
}
const getConvertDirections = (directions) => {
  if (!_.isArray(directions) || _.isEmpty(directions)) {
    throw new Error('Check your placement.')
  }

  const _directions = [...directions]
  _directions.splice(0, 1, CONVERT_DIRECTION[directions[0]])
  return _directions
}

const Tooltip = (props: TooltipProps): React.ReactElement => {
  const {
    placement = 'bottom',
    text,
    variant = 'default',
    align = 'left',
    hasCaret = false,
    isAdjust = true,
    defaultOpen = false,
    parentContainer = null,
    zIndex,
    className: customClassName = '',
    style: customStyle = {},
    children,
  } = props

  const [isOpen, setIsOpen] = useState(defaultOpen)

  const showTooltip = useCallback(() => setIsOpen(true), [])
  const hideTooltip = useCallback(() => setIsOpen(false), [])

  const refReference = useRef<HTMLElement>(null)
  const refFloating = useRef<HTMLDivElement>(null)

  const properties = useDetectResize()

  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })
  const [arrowPos, setArrowPos] = useState({ x: 0, y: 0 })

  const directions = useMemo(() => getOffsetDirection(placement), [placement])
  const [hasCollision, setHasCollision] = useState(false)

  const cb = (entries) => {
    const [entry] = entries
    if (!entry) return
    entry.intersectionRatio < 1 && setHasCollision(true)
  }

  const io = new IntersectionObserver(cb) // 관찰자 초기화

  useIsomorphicLayoutEffect(() => {
    if (isOpen) {
      io.observe(refFloating.current)
    }
    return () => {
      io.disconnect()
      setHasCollision(false)
    }
  }, [isOpen])

  useIsomorphicLayoutEffect(() => {
    if (!_.isEmpty(properties)) {
      // properties 즉 resize 가 발생한 경우는 collision 을 false 로 원래 위치로 다시 렌더링 되도록 함
      setHasCollision(false)
    }
  }, [properties])

  useIsomorphicLayoutEffect(() => {
    if (isOpen) {
      // 부모 컨테이너를 제공받았다면 툴팁을 반영할 대상이 변경된다
      const _refReference =
        parentContainer && _.isFunction(parentContainer)
          ? parentContainer()
          : refReference.current

      const refRect = _refReference.getBoundingClientRect()
      const floatRect = refFloating.current.getBoundingClientRect()

      // 보정치로 인한 스크린 외부 노출로 directions 변경
      let _directions = getOffsetDirection(placement)
      if (hasCollision && isAdjust) {
        _directions = getConvertDirections(directions)
        setHasCollision(false)
      }

      // 위치 기반으로 툴팁과 화살표 방향 계산
      const [top, left, aTop, aLeft] = getCalculatingPos(
        refRect,
        floatRect,
        _directions,
        hasCaret,
      )

      setTooltipPos({ x: left, y: top })
      setArrowPos({ x: aLeft, y: aTop })
    }
  }, [
    isOpen,
    directions,
    hasCaret,
    isAdjust,
    properties,
    hasCollision,
    placement,
  ])

  const _props = useMemo(
    () => ({
      ref: refReference,
      onFocus: showTooltip,
      onMouseEnter: showTooltip,
      onBlur: hideTooltip,
      onMouseLeave: hideTooltip,
    }),
    [showTooltip, hideTooltip],
  )

  return (
    <>
      {React.isValidElement(children)
        ? React.cloneElement(children, _props)
        : React.createElement('span', _props, children)}
      {isOpen && (
        <PortalWithRef reference={refFloating}>
          <div
            className={clsx(
              cls(COMPONENT, 'content'),
              cls(COMPONENT, placement),
              cls(COMPONENT, variant),
              isOpen && cls(COMPONENT, 'content', 'show'),
              customClassName,
            )}
            style={{
              top: tooltipPos.y,
              left: tooltipPos.x,
              textAlign: ALIGN_TYPES.includes(align) ? align : 'left',
              zIndex: zIndex ?? DEFAULT_Z_INDEX,
              ...customStyle,
            }}
          >
            {text}
            {hasCaret && (
              <div
                className={clsx(
                  cls(COMPONENT, 'caret'),
                  cls(COMPONENT, variant),
                  cls(COMPONENT, 'main', directions[0]),
                  directions[1] && cls(COMPONENT, 'sub', directions[1]),
                )}
                style={{
                  top: arrowPos.y,
                  left: arrowPos.x,
                }}
              />
            )}
          </div>
        </PortalWithRef>
      )}
    </>
  )
}

export default React.memo(Tooltip)
