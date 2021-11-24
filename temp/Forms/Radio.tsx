import React, { useContext } from 'react'
import clsx from 'clsx'

import './Radio.scss'
import CheckedIcon from '@assets/svg/btn-radiobutton-checked-24.svg'
import UncheckedIcon from '@assets/svg/btn-radiobutton-unchecked-24.svg'
import {
  RadioGroupContextProps,
  RadioGroupContext,
} from '@components/Forms/RadioGroup'
import ChildMargin from '@components/Layout/ChildMargin'
import cls from '@helpers/class'

interface RadioProps {
  size: 'md'
  disabled: boolean
  checked?: boolean
  defaultChecked?: boolean
  iconWeight: 'start' | 'center' | 'end'
  value: string
  children: React.ReactNode
  onChange: (value: string) => void
}

const Radio = (props: RadioProps) => {
  const context: RadioGroupContextProps = useContext(RadioGroupContext)

  const {
    disabled,
    checked: propsChecked,
    iconWeight,
    value,
    children,
    onChange,
  } = props

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange && onChange(e.target.value)
    context?.onChange && context.onChange(e.target.value)
  }

  const checked: any = propsChecked || (context && context.value === value)

  const Icon: any = checked ? CheckedIcon : UncheckedIcon

  return (
    <label className={clsx(cls('radio'), disabled && cls('radio', 'disabled'))}>
      <input
        id={value}
        type="radio"
        checked={checked}
        disabled={disabled}
        value={value}
        onChange={handleChange}
        style={{ display: 'none' }}
      />
      <ChildMargin
        className={clsx(cls('radio', 'box'), cls('radio', 'box', iconWeight))}
        margin={12}
      >
        <div
          className={clsx(
            cls('radio', 'img'),
            disabled && cls('radio', 'img', 'disabled'),
          )}
        >
          <Icon />
        </div>
        <div>{children}</div>
      </ChildMargin>
    </label>
  )
}

Radio.defaultProps = {
  size: 'md',
  disabled: false,
  iconWeight: 'center',
}

export default Radio
