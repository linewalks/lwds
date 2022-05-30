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

interface DropdownItemProps {
  option: string
  desc?: string
  type?: 'default' | 'danger'
  icon?: React.ReactElement | null
  className?: string
  style?: object
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

Dropdown.Item = ({
  option,
  desc,
  type = 'default',
  icon,
  className,
  style,
}: DropdownItemProps) => {
  return (
    <div
      role="dropdown-menu"
      className={clsx(`dropdown_item_${type}`, className)}
      style={style}
    >
      <dt>
        {icon && <i>{icon}</i>}
        {option}
      </dt>
      {desc && <dd>{desc}</dd>}
    </div>
  )
}

Dropdown.Divider = () => ({})

export default Dropdown
