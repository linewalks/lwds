import React, { useEffect, useState } from 'react'
import clsx from 'clsx'

import cls from '@helpers/class'

import '@components/Tooltip/Tooltip.scss'

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
  caret?: boolean
  open: boolean
  className?: string
  text: string
  children: React.ReactElement
}

const component = 'tooltip'

const Tooltip = React.forwardRef<HTMLInputElement>(
  (props: TooltipProps, ref) => {
    const [showTooltip, setShowTooltip] = useState(false)

    const {
      align = 'bottom',
      caret = false,
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
          cls(component),
          cls(component, align),
          showTooltip && caret && cls(component, 'caret'),
          customClassName,
        )}
        {...rest}
      >
        {children}
        {showTooltip && (
          <div
            className={clsx(cls(component, align), cls(component, 'content'))}
          >
            {text}
          </div>
        )}
      </div>
    )
  },
)

export default Tooltip
