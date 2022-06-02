import React from 'react'
import clsx from 'clsx'

import cls from '@helpers/class'

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
  type?: 'danger'
  icon?: React.ReactElement | null
  disabled?: boolean
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
        className={clsx(cls('dropdown'), cls('dropdown', size), className)}
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
  type,
  icon,
  disabled,
  className,
  style,
}: DropdownItemProps) => {
  return (
    <div
      role="dropdown-menu"
      className={clsx(
        cls('dropdown', desc && 'multiLine', 'menu'),
        type && cls('dropdown', 'menu', type),
        disabled && cls('dropdown', 'menu', 'disabled'),
        className,
      )}
      style={style}
    >
      <dt role="dropdown-menu-term" className={cls('dropdown', 'menu', 'term')}>
        {icon && <i className={cls('dropdown', 'menu', 'icon')}>{icon}</i>}
        <span className={cls('dropdown', 'menu', 'name')}>{option}</span>
      </dt>
      {desc && (
        <dd
          role="dropdown-menu-desc"
          className={clsx(
            cls('dropdown', 'menu', 'desc'),
            icon && 'icon-space',
          )}
        >
          {desc}
        </dd>
      )}
    </div>
  )
}

Dropdown.Divider = () => {
  return <hr className={cls('dropdown', 'divider')} />
}

export default Dropdown
