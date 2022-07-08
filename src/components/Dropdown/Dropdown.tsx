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
import { useFloating, autoUpdate, offset } from '@floating-ui/react-dom'
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
  containerRef?: React.RefObject<HTMLDivElement>
  isPortal?: boolean
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
  itemRef?: React.RefObject<HTMLDivElement>
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

const WrapDropdownList = ({ isPortal, children }) => {
  return isPortal ? createPortal(children, document.body) : children
}

const Dropdown = ({
  triggerNode,
  isOpen: propsIsOpen,
  size,
  icon,
  placement,
  scrollable,
  className,
  containerRef,
  isPortal,
  onClick,
  onClose,
  style,
  children,
}: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>()

  const [isOpen, setIsOpen] = useState(false)
  const [floatingOffset, setFloatingOffset] = useState(0)

  const fontClass = useMemo(
    () => ({
      md: 'body_02_r',
      lg: 'body_04_r',
    }),
    [],
  )

  const placementOffset = useMemo(
    () => ({
      left: floatingOffset,
      right: -floatingOffset,
      center: 0,
    }),
    [floatingOffset],
  )

  const { x, y, reference, floating, refs } = useFloating({
    whileElementsMounted: autoUpdate,
    placement: 'bottom',
    middleware: [offset({ crossAxis: placementOffset[placement] })],
  })

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

  useIsomorphicLayoutEffect(() => {
    const triggerEl = refs.reference.current
    const dropdownEl = refs.floating.current

    if (triggerEl && dropdownEl) {
      const { width: triggerElWidth } = triggerEl.getBoundingClientRect()
      const dropdownElWidth = parseFloat(
        window.getComputedStyle(dropdownEl).width,
      )
      setFloatingOffset(Math.abs(triggerElWidth - dropdownElWidth) / 2)
    }

    return () => {
      refs.reference.current = null
      refs.floating.current = null
    }
  }, [refs.reference.current, refs.floating.current, placement])

  useOutsideAlerter(dropdownRef, handleClose)

  return (
    <DropdownContext.Provider
      value={{
        onClose: handleClose,
      }}
    >
      <div ref={containerRef} className={cls('dropdown')}>
        {triggerNode &&
          React.cloneElement(triggerNode, {
            ref: reference,
            onClick: handleClickOpen,
          })}
        <WrapDropdownList isPortal={isPortal}>
          <div ref={dropdownRef}>
            <dl
              ref={floating}
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
              style={{ top: y ?? 0, left: x ?? 0, ...style }}
            >
              {children}
            </dl>
          </div>
        </WrapDropdownList>
      </div>
    </DropdownContext.Provider>
  )
}

Dropdown.defaultProps = {
  size: 'md',
  icon: false,
  placement: 'left',
  scrollable: false,
  isPortal: false,
}

Dropdown.Item = ({
  id,
  label,
  desc,
  type,
  icon,
  disabled,
  className,
  itemRef,
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
      ref={itemRef}
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
