import React from 'react'
import _ from 'lodash'
import clsx from 'clsx'

import cls from '@helpers/class'

import '@components/Button/Button.scss'

interface ButtonProps {
  id?: string
  icon: boolean
  disabled: boolean
  size: string | 'sm' | 'md' | 'lg' | 'xlg'
  // TODO variant => variant와 color로 나누기
  variant:
    | string
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'ghost'
    | 'danger_primary'
    | 'danger_tertiary'
  style?: object
  responsiveHeight: boolean
  ghostType: string | 'default' | 'important' | 'danger'
  bold: boolean
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
  children?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLElement>
}

function renderButton<
  T extends ButtonProps,
  U extends React.RefObject<HTMLButtonElement>,
>(props: T, ref: U) {
  const {
    id,
    disabled,
    size,
    variant,
    ghostType,
    bold,
    block,
    width,
    responsiveHeight,
    style,
    icon,
    leftIcon,
    rightIcon,
    children,
    onClick,
    ...rest
  } = props

  const createIconNode = (
    icon: React.ReactElement,
    className: string,
  ): React.ReactElement => {
    return (
      icon &&
      React.cloneElement(icon, {
        className: cls('button', className),
        width: '1em',
        height: '1em',
      })
    )
  }

  const startIconNode = createIconNode(leftIcon, 'lefticon')
  const endIconNode = createIconNode(rightIcon, 'righticon')

  return (
    <button
      {...rest}
      id={id}
      disabled={disabled}
      className={clsx(
        cls('button'),
        cls('button', size),
        cls('button', variant),
        responsiveHeight && cls('button', 'responsive', size),
        variant === 'ghost' &&
          ghostType !== 'default' &&
          cls('button', 'ghost', ghostType),
        icon && cls('button', 'icon'),
        
      )}
      style={{
        ...style,
        fontWeight: bold ? 'bold' : 'normal',
      }}
      onClick={onClick}
      ref={ref}
    >
      <span className={clsx(cls('button', 'inner'))}>
        {startIconNode}
        {children}
        {endIconNode}
      </span>
    </button>
  )
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(renderButton)

Button.defaultProps = {
  disabled: false,
  size: 'md',
  variant: 'primary',
  ghostType: 'default',
  bold: true,
  isResponsive: false,
  ghostType: 'default',
  icon: false,
}

export default Button
