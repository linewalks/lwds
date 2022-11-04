import React, { useState, useCallback, useRef, useMemo } from 'react'
import _ from 'lodash'
import clsx from 'clsx'
import { createPortal } from 'react-dom'
import { mergeRefs } from 'react-merge-refs'

import cls from '@helpers/class'
import useIsomorphicLayoutEffect from '@hooks/useIsomorphicLayoutEffect'
import './NewTooltip.scss'

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
  hasCaret?: boolean
  className?: string
  parentContainer?: () => HTMLElement
  style?: object
  children: React.ReactElement
}

interface PortalWithQueryProps {
  parentContainer: () => HTMLElement
  reference: React.RefObject<HTMLElement>
  children: React.ReactElement
}

const PortalWithQuery = ({
  parentContainer,
  reference,
  children,
}: PortalWithQueryProps): React.ReactPortal => {
  const newChilden = React.cloneElement(children, {
    ref: reference,
  })

  return createPortal(newChilden, parentContainer() ?? document.body)
}

const DEFAULT_OFFSET = 2 // spacing_01
const CARET_OFFSET = 6
const CARET_WIDTH = 12

const getOffsetDirection = (placement) => _.split(placement, '-')
const getCalculatingPos = (refRect, floatRect, directions, hasCaret) => {
  const _offset = hasCaret ? CARET_OFFSET : DEFAULT_OFFSET

  console.log(directions)
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
      _aTop = floatRect.height - CARET_WIDTH / 2
    } else {
      _top = refRect.top + (refRect.height + _offset)
      _aTop = -CARET_WIDTH / 2
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
      _aLeft = floatRect.width - CARET_WIDTH / 2
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

const hasTooltipConflict = (
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

const Tooltip = React.forwardRef<HTMLInputElement>(
  (props: TooltipProps, ref): React.ReactElement => {
    const [isOpen, setIsOpen] = useState(false)

    const {
      placement = 'bottom',
      align = 'left',
      variant = 'default',
      hasCaret = false,
      isAdjust = true,
      parentContainer = () => document.body,
      className: customClassName,
      children,
      text,
    } = props

    const showTooltip = useCallback(() => setIsOpen(true), [])
    const hideTooltip = useCallback(() => setIsOpen(false), [])

    const refReference = useRef<HTMLElement>(null)
    const refFloating = useRef<HTMLDivElement>(null)

    const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })
    const [arrowPos, setArrowPos] = useState({ x: 0, y: 0 })

    const [directions, setDirections] = useState(getOffsetDirection(placement))

    useIsomorphicLayoutEffect(() => {
      if (isOpen) {
        const refRect = refReference.current.getBoundingClientRect()
        const floatRect = refFloating.current.getBoundingClientRect()

        const mainViewport = {
          height: document.documentElement.clientHeight,
          width: document.documentElement.clientWidth,
        }

        const hasConflict = hasTooltipConflict(
          refRect,
          floatRect,
          mainViewport,
          _.first(directions),
        )

        const innerDirections =
          hasConflict && isAdjust
            ? getConvertDirections(directions)
            : directions

        setDirections(innerDirections) // update

        const [top, left, aTop, aLeft] = getCalculatingPos(
          {
            width: refRect.width,
            height: refRect.height,
            left: refReference.current?.offsetLeft,
            top: refReference.current?.offsetTop,
          },
          floatRect,
          innerDirections,
          hasCaret,
        )

        setTooltipPos({ x: left, y: top })
        setArrowPos({ x: aLeft, y: aTop })
      }
    }, [isOpen, hasCaret, directions, isAdjust])

    return (
      <>
        <div
          ref={mergeRefs([ref, refReference])}
          onFocus={showTooltip}
          onMouseOver={showTooltip}
          onBlur={hideTooltip}
          onMouseLeave={hideTooltip}
          className={clsx(cls(COMPONENT), customClassName)}
        >
          {children}
        </div>
        {isOpen && (
          <PortalWithQuery
            parentContainer={parentContainer}
            reference={refFloating}
          >
            <div
              className={clsx(
                cls(COMPONENT, 'content'),
                cls(COMPONENT, placement),
                cls(COMPONENT, variant),
              )}
              style={{
                top: tooltipPos.y ?? 0,
                left: tooltipPos.x ?? 0,
                textAlign: align,
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
                    top: arrowPos.y ?? 0,
                    left: arrowPos.x ?? 0,
                  }}
                />
              )}
            </div>
          </PortalWithQuery>
        )}
      </>
    )
  },
)

export default React.memo(Tooltip)
