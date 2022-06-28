import React, { useState, useMemo, useCallback } from 'react'
import _ from 'lodash'
import clsx from 'clsx'

import cls from '@helpers/class'
import '@components/Dropdown/Dropdown.scss'

interface DropdownProps {
  triggerNode: React.ReactElement
  isOpen?: boolean
  size?: 'md' | 'lg'
  icon?: boolean
  direction?: 'left' | 'center' | 'right'
  scrollable?: boolean
  className?: string
  ref?: React.RefObject<HTMLElement>
  onClick?: Function
  style?: object
  children?: React.ReactElement
}

interface DropdownItemProps {
  label?: string
  value?: string | number
  desc?: string
  type?: 'danger'
  icon?: React.ReactElement | null
  disabled?: boolean
  className?: string
  style?: object
}

const validateCheck = (key: string, target: string) => {
  const checkSet = {
    size: ['md', 'lg'],
    direction: ['left', 'center', 'right'],
  }

  if (!checkSet[key]) throw new Error('Wrong Validate Check Key')

  return checkSet[key].includes(target) ? target : checkSet[key][0]
}

const Dropdown = ({
  triggerNode,
  isOpen: propsIsOpen,
  size,
  icon,
  direction,
  scrollable,
  className,
  ref,
  style,
  children,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const fontClass = useMemo(
    () => ({
      md: 'body_02_r',
      lg: 'body_04_r',
    }),
    [],
  )

  const handleClickOpen = useCallback(() => {
    const triggerNodeClickEvent = triggerNode.props?.onClick

    _.isNil(propsIsOpen) && setIsOpen(!isOpen)
    triggerNodeClickEvent && triggerNodeClickEvent()
  }, [triggerNode, propsIsOpen, isOpen])

  return (
    <span className={cls('dropdown')} ref={ref}>
      {triggerNode &&
        React.cloneElement(triggerNode, {
          onClick: handleClickOpen,
        })}
      {(_.isNil(propsIsOpen) ? isOpen : propsIsOpen) && (
        <dl
          role="dropdown-menu-list"
          className={clsx(
            cls('dropdown', 'list'),
            cls('dropdown', validateCheck('size', size)),
            cls('dropdown', validateCheck('direction', direction)),
            scrollable && cls('dropdown', 'scrollable'),
            icon && cls('dropdown', 'icon', 'list'),
            fontClass[validateCheck('size', size)],
            className,
          )}
          style={style}
        >
          {children}
        </dl>
      )}
    </span>
  )
}

Dropdown.defaultProps = {
  size: 'md',
  icon: false,
  direction: 'left',
  scrollable: false,
}

Dropdown.Item = ({
  option,
  value,
  desc,
  type,
  icon,
  disabled,
  className,
  style,
}: DropdownItemProps) => {
  return (
    <div
      data-id={value}
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
          className={cls('dropdown', 'menu', 'desc')}
        >
          {desc}
        </dd>
      )}
    </div>
  )
}

Dropdown.Divider = () => {
  return (
    <hr role="dropdown-menu-divider" className={cls('dropdown', 'divider')} />
  )
}

export default Dropdown
