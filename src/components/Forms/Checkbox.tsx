import React, { useEffect, useState } from 'react'
import clsx from 'clsx'

import './Checkbox.scss'
import CheckedIconMedium from '@assets/svg/btn-checkbox-checked-24.svg'
import UncheckedIconMedium from '@assets/svg/btn-checkbox-unchecked-24.svg'
import CheckedIconSmall from '../../assets/svg/btn-checkbox-checked-16.svg'
import UncheckedIconSmall from '../../assets/svg/btn-checkbox-unchecked-16.svg'
import cls from '@helpers/class'

interface CheckboxProps {
  size: string
  disabled: boolean
  checked?: boolean
  defaultChecked?: boolean
  children: React.ReactNode
  onChange: (checked: boolean) => void
}

const IconMap = {
  sm: {
    true: CheckedIconSmall,
    false: UncheckedIconSmall
  },
  md: {
    true: CheckedIconMedium,
    false: UncheckedIconMedium
  }
}

const Checkbox = (props: CheckboxProps) => {
  const {
    size,
    disabled,
    checked: propsChecked,
    defaultChecked,
    children,
    onChange
  } = props

  const [checked, setChecked] = useState(defaultChecked || propsChecked || false)

  useEffect(() => {
    if (propsChecked !== undefined) {
      setChecked(propsChecked)
    }
  }, [propsChecked])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    propsChecked || setChecked(e.target.checked)
    onChange && onChange(e.target.checked)
  }

  const getIcon = (checked: boolean, size: string): string => {
    return IconMap[size][checked]
  }
  const Icon = getIcon(checked, size)
  console.log(Icon)
  // console.log(Comp)

  return (
    <label
      className={clsx(
        cls('checkbox')
      )}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        style={{ display: 'none' }}
      />
      <span
        className={cls('checkbox', 'img', size)}
      >
        <Icon />
      </span>
      <span>{children}</span>
      </label>
  )
}

Checkbox.defaultProps = {
  size: 'md',
  disabled: false
}

export default Checkbox