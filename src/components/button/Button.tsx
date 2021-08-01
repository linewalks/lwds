import React from 'react'
import clsx from 'clsx'

import './Button.sass'
import cls from 'helpers/class'
import DynamicTag from 'components/common/DynamicTag'


interface ButtonProps {
  as: React.ElementType
  id?: string
  disabled: boolean
  size: string
  variant:
    | 'primary'
    | 'basic'
  style?: object
  bold: boolean
  children: React.ReactNode
  onClick?: () => void
}

const Button = (props: ButtonProps) => {
  const {
    as: propsAs,
    id,
    disabled,
    size,
    variant,
    style,
    bold,
    children,
    onClick
  } = props
  return (
    <DynamicTag
      as={propsAs}
      id={id}
      disabled={disabled}
      className={clsx([
        cls('button'),
        cls(`button__${size}`),
        cls(`button__${variant}`)
      ])}
      style={{
        ...style,
        fontWeight: bold ? 'bold' : 'normal'
      }}
      onClick={onClick}
    >
      {children}
    </DynamicTag>
  )
}

Button.defaultProps = {
  as: 'button',
  disabled: false,
  size: 'md',
  variant: 'primary',
  bold: false,
}

export default Button
