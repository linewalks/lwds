import React, { useState, useCallback } from 'react'
import _ from 'lodash'
import clsx from 'clsx'
import { createPortal } from 'react-dom'
import { useFloating, autoUpdate, offset } from '@floating-ui/react-dom'
import { mergeRefs } from 'react-merge-refs'

import cls from '@helpers/class'
import useIsomorphicLayoutEffect from '@hooks/useIsomorphicLayoutEffect'
import '@components/Tooltip/Tooltip.scss'

const COMPONENT = 'tooltip'
const CARET_SIZE = 4 // caret width
const TOOLTIP_HEIGHT = 4 // tooltip-height

interface TooltipProps {
  align:
    | 'top'
    | 'top-left'
    | 'top-right'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right'
    | 'left'
    | 'right'
  text: string | React.ReactElement
  variant?: 'default' | 'white'
  style?: object
  isPortal?: boolean
  portalQueryStr?: string
  hasCaret?: boolean
  className?: string
  children: React.ReactElement
}

const PortalWithQuery = ({ isPortal, portalQueryStr, children }) => {
  const el = document.querySelector(portalQueryStr) ?? document.body

  return isPortal ? createPortal(children, el) : children
}

const Tooltip = React.forwardRef<HTMLInputElement>(
  (
    {
      align = 'bottom',
      text,
      variant = 'default',
      hasCaret = false,
      isPortal = false,
      portalQueryStr = null,
      className: customClassName,
      style = {},
      children,
      ...rest
    }: TooltipProps,
    ref,
  ) => {
    const [showTooltip, setShowTooltip] = useState(false)
    const [offsetObj, setOffsetObj] = useState({ mainAxis: 0, crossAxis: 0 })

    const showContent = () => setShowTooltip(true)
    const removeContent = () => setShowTooltip(false)

    const hasPlacement = useCallback(
      (findPlacement) => align.includes(findPlacement),
      [align],
    )

    const { x, y, reference, floating, refs } = useFloating({
      whileElementsMounted: autoUpdate,
      placement: 'bottom',
      middleware: [offset(offsetObj)],
    })

    const updateOffsetObj = () => {
      const {
        reference: { current },
        floating: { current: fCurrent },
      } = refs

      const { height, width } = current.getBoundingClientRect()

      if (fCurrent) {
        const { width: fWidth, height: fHeight } =
          fCurrent.getBoundingClientRect()
        let mainAxis = -height / 2 - fHeight / 2
        let crossAxis = 0

        if ('left' === align) {
          crossAxis =
            -width / 2 -
            fWidth / 2 -
            (CARET_SIZE + (hasCaret ? TOOLTIP_HEIGHT : 0))

          return setOffsetObj({ crossAxis, mainAxis })
        }

        if ('right' === align) {
          crossAxis =
            width / 2 +
            fWidth / 2 +
            (CARET_SIZE + (hasCaret ? TOOLTIP_HEIGHT : 0))

          return setOffsetObj({ crossAxis, mainAxis })
        }

        if (hasPlacement('top')) {
          mainAxis = -height * 2 + (hasCaret ? 0 : TOOLTIP_HEIGHT)
        } else if (hasPlacement('bottom')) {
          mainAxis = CARET_SIZE + (hasCaret ? TOOLTIP_HEIGHT : 0)
        }

        if (hasPlacement('left')) {
          crossAxis = width / 2 - fWidth / 2
        } else if (hasPlacement('right')) {
          crossAxis = -width / 2 + fWidth / 2
        } else {
          crossAxis = 0
        }

        setOffsetObj({ crossAxis, mainAxis })
      }
    }

    useIsomorphicLayoutEffect(() => {
      updateOffsetObj()
    }, [refs.floating.current, refs.reference.current, align, isPortal])

    return (
      <div
        ref={mergeRefs([ref, reference])}
        onFocus={showContent}
        onBlur={removeContent}
        onMouseOver={showContent}
        onMouseLeave={removeContent}
        className={clsx(
          cls(COMPONENT),
          cls(COMPONENT, align),
          showTooltip && hasCaret && cls(COMPONENT, 'caret'),
          customClassName,
        )}
        {...rest}
      >
        {children}
        <PortalWithQuery isPortal={isPortal} portalQueryStr={portalQueryStr}>
          {showTooltip && (
            <div
              ref={floating}
              style={{ top: y ?? 0, left: x ?? 0 }}
              className={clsx(
                cls(COMPONENT, align),
                cls(COMPONENT, 'content'),
                cls(COMPONENT, 'content', variant),
              )}
            >
              {text}
            </div>
          )}
        </PortalWithQuery>
      </div>
    )
  },
)

export default Tooltip
