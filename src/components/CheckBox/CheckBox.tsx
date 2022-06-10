import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import clsx from 'clsx'

import cls from '@helpers/class'

import '@components/CheckBox/CheckBox.scss'

interface CheckBoxProps {
  color?: 'primary' | 'black'
  className?: string
  containerChecked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  id?: string
  mixed?: boolean
  number?: number
  size?: 'sm' | 'md'
  style?: object
  text?: string
  onChange: (id: string, checked: boolean) => void
}

const CheckBox = ({
  color = 'primary',
  className,
  containerChecked,
  defaultChecked = false,
  disabled = false,
  id = _.uniqueId('checkBox'),
  mixed = false,
  number,
  size = 'md',
  style,
  text,
  onChange,
}: CheckBoxProps) => {
  const [checked, setChecked] = useState(defaultChecked)
  const handleOnChange = (evt) => {
    const checked = evt.target.checked
    setChecked(checked)
    onChange(id, checked)
  }

  useEffect(() => {
    setChecked(defaultChecked)
  }, [defaultChecked])

  // set에서 활용될 경우
  useEffect(() => {
    if (!_.isNil(containerChecked)) setChecked(containerChecked)
  }, [containerChecked])

  return (
    <div className={clsx(cls('checkbox', 'container'))}>
      <input
        type="checkbox"
        id={id}
        className={clsx(
          cls('checkbox'),
          cls('checkbox', color),
          cls('checkbox', size),
          mixed && cls('checkbox', 'mixed'),
          className,
        )}
        checked={checked}
        disabled={disabled}
        onChange={handleOnChange}
      />
      {/* Checkbox.Lable 등 {children} 으로 받고 싶은데,
      모체 id, size, checked 값을 전달 받아야 함
      깔끔하게 처리할 수 있는 방식은 없을까 */}
      {text && (
        <label
          className={clsx(
            cls('checkbox', 'label'),
            cls('checkbox', 'label', size),
            !checked && cls('checkbox', 'label', 'unchecked'),
          )}
          style={style}
          htmlFor={id}
        >
          {text}
          {number && (
            <div
              className={clsx(
                cls('checkbox', 'number'),
                !checked && cls('checkbox', 'label', 'unchecked'),
              )}
            >
              &nbsp;{`(${number})`}
            </div>
          )}
        </label>
      )}
    </div>
  )
}

export default CheckBox
