import React, { useContext } from 'react'
import clsx from 'clsx'

import cls from '@helpers/class'

import '@components/Radio/Radio.scss'

import { RadioGroupContext } from '@components/Radio/RadioGroup'
import { IRadioGroupContextProps, IRadioProps } from '@components/Radio/Type'

const Radio = ({
  id: propsId,
  className,
  checked: propsChecked,
  disabled,
  name: propsName,
  size,
  style,
  value,
  children,
  onChange,
}: IRadioProps) => {
  const context: IRadioGroupContextProps = useContext(RadioGroupContext)

  const id: any = propsId || value
  const name: any = propsName || context?.name
  const checked: any = propsChecked || (context && context.value === value)

  const handleChange = (e: any): void => {
    context?.onChange && context.onChange(e.target.value, name)
    onChange && onChange(e.target.value)
  }

  return (
    <div
      className={clsx(
        cls('radio'),
        cls('radio', size),
        checked && cls('radio', 'checked'),
        disabled && cls('radio', 'disabled'),
        className,
      )}
      style={style}
    >
      <input
        id={id}
        name={name}
        type="radio"
        checked={checked}
        disabled={disabled}
        value={value}
        onChange={handleChange}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  )
}

Radio.defaultProps = {
  size: 'md',
  disabled: false,
}

export default Radio
