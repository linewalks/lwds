import React, { useState } from 'react'
import clsx from 'clsx'
import cls from '@helpers/class'
import '@components/Tooltip/Tooltip.scss'

const COMPONENT = 'tooltip'

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
  text: string
  hasCaret?: boolean
  className?: string
  children: React.ReactElement
}

const Tooltip = React.forwardRef<HTMLInputElement>(
  (props: TooltipProps, ref) => {
    const [showTooltip, setShowTooltip] = useState(false)

    const {
      align = 'bottom',
      hasCaret = false,
      className: customClassName,
      children,
      text,
      ...rest
    } = props

    const showContent = () => setShowTooltip(true)
    const removeContent = () => setShowTooltip(false)

    return (
      <div
        ref={ref}
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
        {showTooltip && (
          <div
            className={clsx(cls(COMPONENT, align), cls(COMPONENT, 'content'))}
          >
            {text}
          </div>
        )}
      </div>
    )
  },
)

export default Tooltip
