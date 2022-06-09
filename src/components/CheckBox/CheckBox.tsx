import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import clsx from 'clsx'

import cls from '@helpers/class'

import '@components/CheckBox/CheckBox.scss'

interface CheckBoxProps {
  color: 'primary' | 'black'
  defaultChecked: boolean
  disabled: boolean
  id: string
  mixed: boolean
  size: 'sm' | 'md'
  text: string
  onChange: (e: React.FormEventHandler<HTMLInputElement>) => void
}

const CheckBox = ({
  color = 'primary',
  defaultChecked = false,
  disabled = false,
  id = _.uniqueId('checkbox'),
  mixed = false,
  size = 'sm',
  text = '',
  onChange = (e) => {},
}: CheckBoxProps) => {
  const [checked, setChecked] = useState(defaultChecked)
  const handleOnChange = (evt) => {
    setChecked(evt.target.checked)
    onChange(evt.target.checked)
  }

  useEffect(() => {
    setChecked(defaultChecked)
  }, [defaultChecked])

  return (
    <div className={clsx(cls('checkbox', 'container'))}>
      <input
        type="checkbox"
        className={clsx(
          cls('checkbox'),
          cls('checkbox', color),
          mixed && cls('checkbox', 'mixed'),
        )}
        id={id}
        checked={checked}
        disabled={disabled}
        onChange={handleOnChange}
      />
      <label className={clsx(cls('checkbox', 'label'))} htmlFor={id}>
        {text}
      </label>
    </div>
  )
}

export default CheckBox
