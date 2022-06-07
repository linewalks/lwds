import React from 'react'
import clsx from 'clsx'

import cls from '@helpers/class'

import '@components/Dropdown/Dropdown.scss'

interface DropdownProps {
  isOpen: boolean
  size?: 'md' | 'lg'
  icon?: boolean
  direction?: 'left' | 'center' | 'right'
  className?: string
  onClick?: Function
  style?: object
  children?: React.ReactElement
}

interface DropdownItemProps {
  id: string | number
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
  icon = false,
  direction = 'left',
  className,
  onClick,
  style,
  children,
}: DropdownProps) => {
  const handleClick = (e) => {
    const dropdownMenu = e.target.closest(`.${cls('dropdown', 'menu')}`)

    onClick && onClick(dropdownMenu.dataset.id)
  }

  return (
    isOpen && (
      <dl
        role="dropdown-menu-list"
        className={clsx(
          cls('dropdown'),
          cls('dropdown', size),
          cls('dropdown', direction),
          icon && cls('dropdown', 'icon', 'list'),
          className,
        )}
        onClick={handleClick}
        style={style}
      >
        {children}
      </dl>
    )
  )
}

Dropdown.Item = ({
  id,
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
      data-id={id}
      role="dropdown-menu"
      className={clsx(
        cls('dropdown', 'menu'),
        cls('dropdown', desc ? 'multiLine' : 'singleLine', 'menu'),
        type && cls('dropdown', 'menu', type),
        disabled && cls('dropdown', 'menu', 'disabled'),
        className,
      )}
      onClick={(e) => disabled && e.stopPropagation()}
      style={style}
    >
      <dt role="dropdown-menu-term" className={cls('dropdown', 'menu', 'term')}>
        <i className={cls('dropdown', 'menu', 'icon')}>{icon}</i>
        <span className={cls('dropdown', 'menu', 'name')}>{option}</span>
      </dt>
      {desc && (
        <dd
          role="dropdown-menu-desc"
          className={clsx(cls('dropdown', 'menu', 'desc'))}
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
