import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react'
import _ from 'lodash'
import clsx from 'clsx'

import useOutsideAlerter from '@hooks/useOutsideAlerter'
import cls from '@helpers/class'
import '@components/Dropdown/Dropdown.scss'

interface DropdownProps {
  triggerNode?: React.ReactElement
  isOpen?: boolean
  size?: 'md' | 'lg'
  icon?: boolean
  direction?: 'left' | 'center' | 'right'
  scrollable?: boolean
  className?: string
  ref?: React.RefObject<HTMLElement>
  onClose?: Function
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
  onClick?: Function
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

const DropdownContext = createContext(null)

const Dropdown = ({
  triggerNode,
  isOpen: propsIsOpen,
  size,
  icon,
  direction,
  scrollable,
  className,
  ref,
  onClose,
  style,
  children,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef()

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

  const handleClose = useCallback(() => {
    _.isNil(propsIsOpen) && setIsOpen(false)
    onClose && onClose()
  }, [propsIsOpen, onClose])

  useOutsideAlerter(dropdownRef, handleClose)

  return (
    <DropdownContext.Provider
      value={{
        onClose: handleClose,
      }}
    >
      <span ref={ref} className={cls('dropdown')}>
        {triggerNode &&
          React.cloneElement(triggerNode, {
            onClick: handleClickOpen,
          })}
        {(_.isNil(propsIsOpen) ? isOpen : propsIsOpen) && (
          <dl
            ref={dropdownRef}
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
    </DropdownContext.Provider>
  )
}

Dropdown.defaultProps = {
  size: 'md',
  icon: false,
  direction: 'left',
  scrollable: false,
}

Dropdown.Item = ({
  label,
  value,
  desc,
  type,
  icon,
  disabled,
  className,
  onClick,
  style,
}: DropdownItemProps) => {
  const { onClose } = useContext(DropdownContext)

  const handleClick = useCallback(() => {
    if (disabled) return

    onClick && onClick(value)
    onClose()
  }, [disabled, onClick, onClose])

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
      onClick={handleClick}
      style={style}
    >
      <dt role="dropdown-menu-term" className={cls('dropdown', 'menu', 'term')}>
        <i className={cls('dropdown', 'menu', 'icon')}>{icon}</i>
        <span className={cls('dropdown', 'menu', 'label')}>{label}</span>
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
