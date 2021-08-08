import React, { useEffect, useState } from 'react'
import clsx from 'clsx'

import './TextInput.scss'
import cls from '@helpers/class'

interface TextInputProps {
  variant: 'outline' | 'outline_round' | string
  color: 'primary' | string
  size: 'md' | 'lg' | 'xlg' | string
  type: 'text' | 'password' | string
  value?: string
  defaultValue?: string
  disabled: boolean
  error: boolean
  placeholder?: string
  style?: object
  onChange: (value: string) => void
}

const TextInput = (props: TextInputProps) => {
  const {
    variant,
    color,
    size,
    type,
    value: propsValue,
    defaultValue,
    disabled,
    error,
    placeholder,
    style,
    onChange
  } = props 
  const [value, setValue] = useState(defaultValue || propsValue || '')

  useEffect(() => {
    if (propsValue !== undefined) {
      setValue(propsValue)
    }
  }, [propsValue])

  const handleChange = (e) => {
    propsValue || setValue(e.target.value)
    onChange && onChange(e.target.value)
  }

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
      value={value}
      disabled={disabled}
      placeholder={placeholder}
      style={style}
      onChange={handleChange}
    />
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
