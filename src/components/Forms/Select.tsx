import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import clsx from 'clsx'

import './Select.scss'
import FocusedIconLarge from '@assets/svg/icn-chevron-up-24.svg'
import NormalIconLarge from '@assets/svg/icn-chevron-down-24.svg'
import FocusedIcon from '@assets/svg/icn-chevron-up-16.svg'
import NormalIcon from '@assets/svg/icn-chevron-down-16.svg'
import cls from '@helpers/class'

interface SelectProps {
  variant: 'outline' | 'outline_round' | string
  color: 'primary' | string
  size: 'md' | 'lg' | 'xlg' | string
  value?: string
  defaultValue?: string
  disabled: boolean
  error: boolean
  placeholder?: string
  options: string[]
  style?: object
  onChange?: (value: string) => void
}

const Select = (props: SelectProps) => {
  const {
    variant,
    color,
    size,
    value: propsValue,
    defaultValue,
    disabled,
    error,
    placeholder,
    options,
    style,
    onChange
  } = props
  const [value, setValue] = useState(defaultValue || propsValue || '')

  useEffect(() => {
    if (propsValue !== undefined) {
      setValue(propsValue)
    }
  }, [propsValue])

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    propsValue || setValue(e.target.value)
    onChange && onChange(e.target.value)
  }

  const iconSrc = size === 'xlg' ? 
    '/svg/icn-chevron-down-24.svg' :
    '/svg/icn-chevron-down-16.svg'

  const renderOptions = () => {
    return (
      <>
        {placeholder && (
          <option
            value={''}
            disabled
            hidden
          >
            {placeholder}
          </option>
        )}
        {_.map(options, (option, index) => {
          return (
            <option
              key={`option__${index}`}
              value={option}
            >
              {option}
            </option>
          )
        })}
      </>
    )
  }

  return (
    <div
      className={clsx(
        cls('select'),
        cls('select', color),
        error && cls('select', color, 'error'),
        disabled && cls('select', color, 'disabled'),
        cls('select', variant),
        cls('select', size)
      )}
      style={style}
    >
      <select
        value={value}
        disabled={disabled}
        onChange={handleChange}

        style={{
          backgroundImage: `url(${iconSrc})`
        }}
      >
        {renderOptions()}
      </select>
    </div>
  )
}

Select.defaultProps = {
  variant: 'outline',
  color: 'primary',
  size: 'md',
  disabled: false,
  error: false
}

export default Select
