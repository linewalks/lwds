import React from 'react'
import clsx from 'clsx'
import styled from 'styled-components'

import './Button.scss'
import cls from '@helpers/class'

const WrapInside = styled.span`
  height: 100%;
  display: inline-flex;
  align-items: center;
`

// extends React.HTMLProps<HTMLButtonElement>
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
  ghostText: string
  isResponsive: boolean
  ghostType: string | 'default' | 'important' | 'danger'
  bold: boolean
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLElement>
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref: React.RefObject<any>) => {
    const {
      id,
      disabled,
      size,
      variant,
      style,
      bold,
      leftIcon,
      rightIcon,
      children,
      onClick,
      ghostType,
      isResponsive,
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
          isResponsive && cls('button', 'responsive', size),
        )}
        style={{
          ...style,
          fontWeight: bold ? 'bold' : 'normal',
        }}
        onClick={onClick}
        ref={ref}
      >
        <WrapInside>
          {startIconNode}
          {children}
          {endIconNode}
        </WrapInside>
      </button>
    )
  },
)

Button.defaultProps = {
  disabled: false,
  size: 'md',
  variant: 'primary',
  bold: true,
  isResponsive: false,
  ghostType: 'default',
}

export default Button
