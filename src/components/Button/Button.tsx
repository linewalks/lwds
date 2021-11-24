import React from 'react'
import _ from 'lodash'
import clsx from 'clsx'

import cls from '@helpers/class'

import '@components/Button/Button.scss'

interface ButtonProps {
  // TODO variant => variant와 color로 나누기
  disabled: boolean
  variant:
    | string
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'ghost'
    | 'danger_primary'
    | 'danger_tertiary'
  ghostType: string | 'default' | 'important' | 'danger'
  size: string | 'sm' | 'md' | 'lg' | 'xlg'
  bold: boolean
  icon: boolean
  responsiveHeight: boolean
  id?: string
  style?: object
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
    disabled,
    variant,
    ghostType,
    size,
    bold,
    icon,
    responsiveHeight,
    id,
    style,
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
  variant: 'primary',
  ghostType: 'default',
  size: 'md',
  bold: true,
  icon: false,
  responsiveHeight: false,
}

export default Button
