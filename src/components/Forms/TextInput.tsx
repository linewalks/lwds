import React from 'react'
import clsx from 'clsx'

import './TextInput.scss'
import cls from '@helpers/class'

interface TextInputProps {
  variant: 'outline' | 'outline_round' | string
  color: 'primary' | string
  size: 'md' | 'lg' | 'xlg' | string
  type: 'text' | 'password' | string
  disabled: boolean
  error: boolean
  placeholder: string
  style?: object
}

const TextInput = (props: TextInputProps) => {
  const {
    variant,
    color,
    size,
    type,
    disabled,
    error,
    placeholder,
    style
  } = props 
  return (
    <input
      className={clsx(
        cls('text'),
        cls('text', color),
        error && cls('text', color, 'error'),
        cls('text', variant),
        cls('text', size)
      )}
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      style={style}
    >
    </input>
  )
}

TextInput.defaultProps = {
  variant: 'outline',
  color: 'primary',
  size: 'md',
  type: 'text',
  disabled: false,
  error: false
}

export default TextInput
