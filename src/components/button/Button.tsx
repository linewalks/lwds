import React from 'react'
import clsx from 'clsx'

import DynamicTag from 'components/utils/DynamicTag'
import './Button.sass'

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
        `mwc-button`,
        `mwc-button__${size}`,
        `mwc-button__${variant}`
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
