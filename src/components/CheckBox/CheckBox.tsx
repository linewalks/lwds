import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import clsx from 'clsx'

import cls from '@helpers/class'

import '@components/CheckBox/CheckBox.scss'

interface CheckBoxProps {
  color: 'primary' | 'black'
  defaultChecked: boolean
  disabled: boolean
  mixed: boolean
  number: number
  size: 'sm' | 'md'
  text: string
  onChange: (e: React.FormEventHandler<HTMLInputElement>) => void
}

const CheckBox = ({
  color = 'primary',
  defaultChecked = false,
  disabled = false,
  mixed = false,
  number = null,
  size = 'md',
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
    <div className={clsx(cls('container'))}>
      <input
        type="checkbox"
        className={clsx(
          cls('checkbox'),
          cls('checkbox', color),
          cls('checkbox', size),
          mixed && cls('checkbox', 'mixed'),
        )}
        checked={checked}
        disabled={disabled}
        onChange={handleOnChange}
      />
      {(text || number) && (
        <div
          className={clsx(
            cls('label'),
            cls('label', size),
            !checked && cls('label', 'unchecked'),
          )}
        >
          {text}
          &nbsp;
          <div
            className={clsx(
              cls('number'),
              !checked && cls('number', 'unchecked'),
            )}
          >{`(${number})`}</div>
        </div>
      )}
    </div>
  )
}

export default CheckBox
