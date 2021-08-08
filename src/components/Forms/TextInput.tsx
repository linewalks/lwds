import React from 'react'
import clsx from 'clsx'

import './TextInput.scss'
import cls from '@helpers/class'

interface TextInputProps {
  variant: 'outline' | 'outline_round' | string
  color: 'primary' | string
  size: 'md' | 'lg' | 'xlg' | string
  disabled: boolean
  error: boolean
  placeholder: string
}

const TextInput = (props: TextInputProps) => {
  const {
    variant,
    color,
    size,
    disabled,
    error,
    placeholder
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
      type="text"
      disabled={disabled}
      placeholder={placeholder}
    >
    </input>
  )
}

TextInput.defaultProps = {
  variant: 'outline',
  color: 'primary',
  size: 'md',
  disabled: false,
  error: false
}

export default TextInput
