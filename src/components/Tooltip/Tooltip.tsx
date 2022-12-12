import React, { useState, useRef } from 'react'
import _ from 'lodash'
import clsx from 'clsx'
import { createPortal } from 'react-dom'
import { mergeRefs } from 'react-merge-refs'

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

interface PortalWithQueryProps {
  reference: React.RefObject<HTMLElement>
  children: React.ReactElement
}

const PortalWithQuery = ({
  reference,
  children,
}: PortalWithQueryProps): React.ReactPortal => {
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
      // 2nd directions left / right
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

  return [_top, _left, _aTop, _aLeft]
}

const isTooltipOutOfScreen = (
  refRect,
  floatRect,
  mainViewport,
  mainDirection,
) => {
  // 툴팁이 현재 화면내에서 충돌영역 확인
  let _flag = false
  switch (mainDirection) {
    case 'top':
      _flag = refRect.top <= floatRect.height + CARET_OFFSET
      break
    case 'bottom':
      _flag =
        mainViewport.height <=
        refRect.top + refRect.height + floatRect.height + CARET_OFFSET
      break
    case 'left':
      _flag = refRect.left <= floatRect.width + CARET_OFFSET
      break
    case 'right':
      _flag =
        mainViewport.width <=
        refRect.left + refRect.width + floatRect.width + CARET_OFFSET
      break
  }

  return _flag
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

const Tooltip = React.forwardRef(
  (props: TooltipProps, ref): React.ReactElement => {
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

    let delayId = null
    const showTooltip = () => {
      delayId = setTimeout(() => {
        setIsOpen(true)
      }, 300)
    }
    const hideTooltip = () => {
      // 사용자가 스치듯 지나간경우는 동작하지 않도록하기 위함
      clearTimeout(delayId)
      setIsOpen(false)
    }

    const refReference = useRef<HTMLElement>(null)
    const refFloating = useRef<HTMLDivElement>(null)

    const properties = useDetectResize()

    const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })
    const [arrowPos, setArrowPos] = useState({ x: 0, y: 0 })

    const [directions, setDirections] = useState(getOffsetDirection(placement))

    useIsomorphicLayoutEffect(() => {
      // 부모 컨테이너를 제공받았다면 툴팁을 반영할 대상이 변경된다
      const _refReference = parentContainer
        ? parentContainer()
        : refReference?.current

      const refRect = _refReference.getBoundingClientRect()
      const floatRect = refFloating.current.getBoundingClientRect()

      // 보정을 위한 document client H, W 정보
      const mainViewport = {
        height: document.documentElement.clientHeight,
        width: document.documentElement.clientWidth,
      }

      // 보정치를 활용하여 상하좌우 단편적으로 스크린 외부로 나가는 것 감지
      // 특이사항) 좌가 넘쳐 우로 변경하였을 때 우도 넘치면 우로 그냥 노출 감지 변경은 1회만
      const isOutOfScreen = isTooltipOutOfScreen(
        refRect,
        floatRect,
        mainViewport,
        _.first(directions),
      )

      // 보정치로 인한 스크린 외부 노출로 directions 변경
      const innerDirections =
        isOutOfScreen && isAdjust
          ? getConvertDirections(directions)
          : directions
      setDirections(innerDirections) // update

      // 위치 기반으로 툴팁과 화살표 방향 계산
      const [top, left, aTop, aLeft] = getCalculatingPos(
        {
          width: refRect.width,
          height: refRect.height,
          left: _refReference?.offsetLeft,
          top: _refReference?.offsetTop,
        },
        floatRect,
        innerDirections,
        hasCaret,
      )

      setTooltipPos({ x: left, y: top })
      setArrowPos({ x: aLeft, y: aTop })
    }, [isOpen, hasCaret, directions, isAdjust, properties])

    return (
      <>
        {React.cloneElement(children, {
          ref: mergeRefs([ref, refReference]),
          onFocus: showTooltip,
          onMouseEnter: showTooltip,
          onBlur: hideTooltip,
          onMouseLeave: hideTooltip,
          className: clsx(cls(COMPONENT), children.props.className),
        })}
        <PortalWithQuery reference={refFloating}>
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
        </PortalWithQuery>
      </>
    )
  },
)

export default React.memo(Tooltip)
