import React from 'react'
import clsx from 'clsx'

import DynamicTag from 'components/utils/DynamicTag'

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
        `hee-button`,
        `hee-button--${size}`,
        `hee-button--${variant}`
      ])}
      style={{
        ...style,
        fontWeight: bold ? 'bold' : 'normal'
      }}
      onClick={onClick}
    />
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
