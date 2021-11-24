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
  ghostType: string | 'default' | 'important' | 'danger'
  bold: boolean
  block: boolean
  width: number | string | 'defalut' | '100%'
  responsiveHeight: boolean
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
        block && cls('button', 'block'),
        block && size === 'sm' && cls('button', 'block', size),
        responsiveHeight && cls('button', 'responsive', size),
      )}
      style={{
        ...style,
        width: width,
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
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(renderButton)

Button.defaultProps = {
  disabled: false,
  size: 'md',
  variant: 'primary',
  ghostType: 'default',
  bold: true,
  block: false,
  width: 'defalut',
  responsiveHeight: false,
}

export default Button
