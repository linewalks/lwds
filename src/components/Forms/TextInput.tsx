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
  startImgSrc?: string
  endImgSrc?: string
  startImgOnClick?: () => void
  endImgOnClick?: () => void
  onChange?: (value: string) => void
  onSubmit?: (value: string) => void
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
    startImgSrc,
    endImgSrc,
    startImgOnClick,
    endImgOnClick,
    onChange,
    onSubmit
  } = props 
  const [value, setValue] = useState(defaultValue || propsValue || '')

  useEffect(() => {
    if (propsValue !== undefined) {
      setValue(propsValue)
    }
  }, [propsValue])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    propsValue || setValue(e.target.value)
    onChange && onChange(e.target.value)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key == 'Enter') {
      onSubmit && onSubmit(value)
    }
  }

  const renderStartImg = (): React.ReactNode => {
    return (
      <img
        className={clsx(
          cls('text', size, 'startimg'),
          startImgOnClick && cls('text', 'img', 'button')
        )}
        src={startImgSrc}
        alt=""
        onClick={startImgOnClick}
      />
    )
  }

  const renderEndImg = (): React.ReactNode => {
    return (
      <img
        className={clsx(
          cls('text', size, 'endimg'),
          endImgOnClick && cls('text', 'img', 'button')
        )}
        src={endImgSrc}
        alt=""
        onClick={endImgOnClick}
      />
    )
  }

  return (
    <div
      className={clsx(
        cls('text'),
        cls('text', color),
        error && cls('text', color, 'error'),
        disabled && cls('text', color, 'disabled'),
        cls('text', variant),
        cls('text', size)
      )}
      style={style}
    >
      {startImgSrc && renderStartImg()}
      <input
        type={type}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      {endImgSrc && renderEndImg()}
    </div>
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
