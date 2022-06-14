import React, { useEffect } from 'react'
import clsx from 'clsx'

import cls from '@helpers/class'

import '@components/Popover/Popover.scss'

interface PopoverProps {
  align:
    | 'top'
    | 'top-left'
    | 'top-right'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right'
    | 'left'
    | 'left-bottom'
    | 'left-top'
    | 'right'
    | 'right-bottom'
    | 'right-top'
  caret?: boolean
  open: boolean
  className?: string
  text: string
  children: React.ReactElement
  childRef: any
}

interface PopoverContentProps {
  children?: React.ReactElement
}

const component = 'popover'

const Popover = React.forwardRef<HTMLInputElement>(
  (props: PopoverProps, ref) => {
    const {
      align = 'bottom',
      caret = false,
      className: customClassName,
      children,
      childRef,
      text,
      ...rest
    } = props

    return (
      <div
        ref={ref}
        className={clsx(
          cls(component),
          cls(component, align),
          caret && cls(component, 'caret'),
          customClassName && customClassName,
        )}
        {...rest}
      >
        {children}
        <div
          ref={ref}
          className={clsx(cls(component, align), cls(component, 'content'))}
        >
          {text}
        </div>
      </div>
    )
  },
)

export default Popover
