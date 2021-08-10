import React, { useState } from 'react'

import TextInput from '@components/Forms/TextInput'

interface SearchBarProps {
  variant: string
  color: string
  size: string
  disabled: boolean
  placeholder?: string
  onChange: (value: string) => void
  onSubmit: (value: string) => void
}

const SearchBar = (props: SearchBarProps) => {
  const {
    variant,
    color,
    size,
    disabled,
    placeholder,
    onChange,
    onSubmit
  } = props

  const [value, setValue] = useState('')

  const searchIconSrc = '/svg/icn-search-16.svg'
  const removeIconSrc = '/svg/icn-close-16.svg'

  const handleRemoveClick = () => {
    setValue('')
  }

  const handleChange = (value: string) => {
    setValue(value)
    onChange && onChange(value)
  }

  const handleSubmit = (value: string) => {
    setValue(value)
    onSubmit && onSubmit(value)
  }

  return (
    <TextInput
      variant={variant}
      color={color}
      size={size}
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      startImgSrc={searchIconSrc}
      endImgSrc={value && removeIconSrc}
      endImgOnClick={handleRemoveClick}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  )
}

SearchBar.defaultProps = {
  variant: 'outline_round',
  color: 'primary',
  size: 'lg',
  disabled: false
}

export default SearchBar
