import React from 'react'
import clsx from 'clsx'
import styled from 'styled-components'

import './Button.scss'
import cls from '@helpers/class'
interface ButtonProps {
  id?: string
  disabled: boolean
  size: string | 'sm' | 'md' | 'lg' | 'xlg'
  // TODO variant => variant와 color로 나누기
  variant:
    | string
    | 'primary'
    | 'primary_line'
    | 'basic'
    | 'basic_line'
    | 'primary_light'
    | 'basic_light'
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
}

export default Button
