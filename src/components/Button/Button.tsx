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
  isResponsive: boolean
  ghostType: string | 'default' | 'important' | 'danger'
  bold: boolean
  block: boolean
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLElement>
}

const Button = React.forwardRef(
  (props: ButtonProps, ref: React.RefObject<any>) => {
    const {
      id,
      disabled,
      size,
      variant,
      style,
      bold,
      block,
      leftIcon,
      rightIcon,
      children,
      onClick,
      ghostType,
      icon,
      ...rest
    } = props

    const createIconNode = (icon: React.ReactElement, className: string) => {
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
          variant === 'ghost' &&
            ghostType !== 'default' &&
            cls('button', 'ghost', ghostType),
          block && cls('button', 'block'),
          block && size === 'sm' && cls('button', 'block', size),
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
  },
)

Button.defaultProps = {
  disabled: false,
  size: 'md',
  variant: 'primary',
  bold: true,
  block: false,
  isResponsive: false,
  ghostType: 'default',
  icon: false,
}

export default Button
