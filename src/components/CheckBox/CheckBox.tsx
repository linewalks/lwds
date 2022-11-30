import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import clsx from 'clsx'

import cls from '@helpers/class'

import '@components/CheckBox/CheckBox.scss'

interface CheckBoxProps {
  color?: 'primary' | 'black'
  checked: boolean
  className?: string
  defaultChecked?: boolean
  disabled?: boolean
  id: string
  mixed?: boolean
  size?: 'sm' | 'md'
  style?: object
  children: React.ReactElement
  onChange: (checked: boolean, id: string) => void
}

const CheckBox = ({
  color = 'primary',
  className,
  defaultChecked = false,
  disabled = false,
  id = _.uniqueId('checkBox'),
  mixed = false,
  checked: propsChecked,
  size = 'md',
  style,
  children,
  onChange,
}: CheckBoxProps) => {
  const [checked, setChecked] = useState(defaultChecked)

  const handleOnChange = (evt) => {
    const checked = evt.target.checked
    _.isNil(propsChecked) && setChecked(checked)
    onChange && onChange(checked, id)
  }

  useEffect(() => {
    if (!_.isNil(propsChecked)) setChecked(propsChecked)
  }, [propsChecked])

  return (
    <div
      className={clsx(
        cls('checkbox'),
        cls('checkbox', color),
        cls('checkbox', size),
        mixed && cls('checkbox', 'mixed'),
        checked && cls('checkbox', 'checked'),
        disabled && cls('checkbox', 'disabled'),
        className,
      )}
      style={style}
    >
      <input
        type="checkbox"
        id={id}
        checked={_.isNil(propsChecked) ? checked : propsChecked}
        disabled={disabled}
        onChange={handleOnChange}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  )
}

export default CheckBox
