import React, { useEffect, useMemo, useState } from 'react'
import _ from 'lodash'
import clsx from 'clsx'
import { renderToStaticMarkup } from 'react-dom/server'

import './Select.scss'
import ChevronIcon from '@components/Icon/ChevronIcon'
import cls from '@helpers/class'
import { getColor } from '@helpers/ui'

interface SelectProps {
  variant: 'outline' | 'outline_round' | string
  color: 'primary' | string
  size: 'md' | 'lg' | 'xlg' | string
  value?: string
  defaultValue?: string
  disabled: boolean
  error: boolean
  placeholder?: string
  options: string[] | { value: string, label: string }[]
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

  const backgroundImage = useMemo(() => {
    const iconSize = size === 'xlg' ? 24 : 16
    const Icon = <ChevronIcon
      width={iconSize}
      height={iconSize}
      color={getColor('secondary_text')}
    />
    return `url('data:image/svg+xml;utf8,${encodeURIComponent(renderToStaticMarkup(Icon))}')`
  }, [size])

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
        {_.map(options, (option: string | { value: string, label: string }, index: number) => {
          const value = typeof(option) === 'string' ? option : option.value
          const label = typeof(option) === 'string' ? option : option.label
          return (
            <option
              key={`option__${index}`}
              value={value}
            >
              {label}
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
        style={{ backgroundImage: backgroundImage }}
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
