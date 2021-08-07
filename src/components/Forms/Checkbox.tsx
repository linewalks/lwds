import React, { useEffect, useState } from 'react'
import clsx from 'clsx'

import './Checkbox.scss'
import CheckedIconMedium from '@assets/svg/btn-checkbox-checked-24.svg'
import UncheckedIconMedium from '@assets/svg/btn-checkbox-unchecked-24.svg'
import CheckedIconSmall from '@assets/svg/btn-checkbox-checked-16.svg'
import UncheckedIconSmall from '@assets/svg/btn-checkbox-unchecked-16.svg'
import ChildMargin from '@components/Layout/ChildMargin'
import cls from '@helpers/class'

interface CheckboxProps {
  size: string
  disabled: boolean
  checked?: boolean
  defaultChecked?: boolean
  iconWeight: string
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
    iconWeight,
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
      <ChildMargin
        className={clsx(
          cls('checkbox', 'box'),
          cls('checkbox', 'box', iconWeight)
        )}
        margin={12}
      >
        <div
          className={cls('checkbox', 'img')}
        >
          <Icon />
        </div>
        <div>{children}</div>
      </ChildMargin>
    </label>
  )
}

Checkbox.defaultProps = {
  size: 'md',
  disabled: false,
  iconWeight: 'center'
}

export default Checkbox