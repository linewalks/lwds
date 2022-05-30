import React from 'react'
import clsx from 'clsx'

import '@components/Dropdown/Dropdown.scss'

interface DropdownProps {
  isOpen: boolean
  size?: 'md' | 'lg'
  className?: string
  style?: object
  children?: React.ReactElement
}

const Dropdown = ({
  isOpen = false,
  size = 'md',
  className,
  style,
  children,
}: DropdownProps) => {
  return (
    isOpen && (
      <dl
        role="dropdown-menu-list"
        className={clsx(`dropdown_${size}`, className)}
        style={style}
      >
        {children}
      </dl>
    )
  )
}

Dropdown.Divider = () => ({})

export default Dropdown
