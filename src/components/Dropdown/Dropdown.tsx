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
import { createPortal } from 'react-dom'

import useIsomorphicLayoutEffect from '@hooks/useIsomorphicLayoutEffect'
import useOutsideAlerter from '@hooks/useOutsideAlerter'
import cls from '@helpers/class'
import '@components/Dropdown/Dropdown.scss'

interface DropdownProps {
  triggerNode?: React.ReactElement
  isOpen?: boolean
  size?: 'md' | 'lg'
  icon?: boolean
  placement?: 'left' | 'center' | 'right'
  scrollable?: boolean
  className?: string
  onClick?: Function
  onClose?: Function
  style?: object
  children?: React.ReactElement
}

interface DropdownItemProps {
  label?: string | number | React.ReactElement
  id?: string | number
  desc?: string
  type?: 'danger'
  icon?: React.ReactElement
  disabled?: boolean
  className?: string
  ref?: React.RefObject<HTMLDivElement>
  onClick?: Function
  style?: object
}

const validateCheck = (key: string, target: string) => {
  const checkSet = {
    size: ['md', 'lg'],
    placement: ['left', 'center', 'right'],
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
  placement,
  scrollable,
  className,
  onClick,
  onClose,
  style,
  children,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [pos, setPos] = useState({
    top: 0,
    left: 0,
  })

  const triggerRef = useRef<HTMLElement>()
  const dropdownRef = useRef<HTMLDListElement>()

  const fontClass = useMemo(
    () => ({
      md: 'body_02_r',
      lg: 'body_04_r',
    }),
    [],
  )

  const handleClick = useCallback((e) => {
    const dropdownMenu = e.target.closest(`.${cls('dropdown', 'menu')}`)

    onClick && onClick(dropdownMenu.dataset.id)
  }, [])

  const handleClickOpen = useCallback(() => {
    const triggerNodeClickEvent = triggerNode.props?.onClick

    _.isNil(propsIsOpen) && setIsOpen(!isOpen)
    triggerNodeClickEvent && triggerNodeClickEvent()
  }, [triggerNode, propsIsOpen, isOpen])

  const handleClose = useCallback(() => {
    _.isNil(propsIsOpen) && setIsOpen(false)
    onClose && onClose()
  }, [propsIsOpen, onClose])

  const handleDropdownPos = useCallback(() => {
    if (triggerRef.current && dropdownRef.current) {
      const {
        x: triggerRefX,
        y: triggerRefY,
        width: triggerRefWidth,
        height: triggerRefHeight,
      } = triggerRef.current.getBoundingClientRect()

      const dropdownElWidth = parseFloat(
        window.getComputedStyle(dropdownRef.current).width,
      )

      const top = triggerRefY + triggerRefHeight + window.scrollY

      if (placement === 'center') {
        setPos({
          top,
          left:
            triggerRefX +
            triggerRefWidth / 2 -
            dropdownElWidth / 2 +
            window.scrollX,
        })
      } else if (placement === 'right') {
        setPos({
          top,
          left:
            triggerRefX + triggerRefWidth - dropdownElWidth + window.scrollX,
        })
      } else {
        setPos({
          top,
          left: triggerRefX + window.scrollX,
        })
      }
    }
  }, [dropdownRef, triggerRef, placement])

  useOutsideAlerter(dropdownRef, handleClose)

  useIsomorphicLayoutEffect(() => {
    handleDropdownPos()
    window.addEventListener('resize', handleDropdownPos)
    window.addEventListener('scroll', handleDropdownPos)

    return () => {
      window.removeEventListener('resize', handleDropdownPos)
      window.removeEventListener('scroll', handleDropdownPos)
    }
  }, [handleDropdownPos])

  return (
    <DropdownContext.Provider
      value={{
        onClose: handleClose,
      }}
    >
      <div className={cls('dropdown')}>
        {triggerNode &&
          React.cloneElement(triggerNode, {
            ref: triggerRef,
            onClick: handleClickOpen,
          })}
        {createPortal(
          <dl
            ref={dropdownRef}
            role="dropdown-menu-list"
            className={clsx(
              cls('dropdown', 'list'),
              cls('dropdown', validateCheck('size', size)),
              (propsIsOpen ?? isOpen) && cls('dropdown', 'open'),
              scrollable && cls('dropdown', 'scrollable'),
              icon && cls('dropdown', 'icon', 'list'),
              fontClass[validateCheck('size', size)],
              className,
            )}
            onClick={handleClick}
            style={{ ...pos, ...style }}
          >
            {children}
          </dl>,
          document.body,
        )}
      </div>
    </DropdownContext.Provider>
  )
}

Dropdown.defaultProps = {
  size: 'md',
  icon: false,
  placement: 'left',
  scrollable: false,
}

Dropdown.Item = ({
  id,
  label,
  desc,
  type,
  icon,
  disabled,
  className,
  ref,
  onClick,
  style,
}: DropdownItemProps) => {
  const { onClose } = useContext(DropdownContext)

  const handleClick = useCallback(
    (e) => {
      if (disabled) {
        e.stopPropagation()
        return
      }

      onClick && onClick(id)
      onClose()
    },
    [disabled, onClick, onClose],
  )

  return (
    <div
      ref={ref}
      data-id={id}
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
      <dt
        ref={ref}
        role="dropdown-menu-term"
        className={cls('dropdown', 'menu', 'term')}
      >
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
