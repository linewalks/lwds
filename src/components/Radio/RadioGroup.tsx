import React, { useEffect, useState } from 'react'
import _ from 'lodash'

import {
  IRadioGroupContextProps,
  IRadioGroupProps,
} from '@components/Radio/Type'

export const RadioGroupContext =
  React.createContext<IRadioGroupContextProps | null>(null)

const RadioGroup = ({
  defaultValue,
  name,
  value: propsValue,
  children,
  onChange,
}: IRadioGroupProps) => {
  const [value, setValue] = useState(defaultValue || propsValue || '')

  useEffect(() => {
    if (!_.isNil(propsValue)) setValue(propsValue)
  }, [propsValue])

  const handleChange = (value: string, name: string) => {
    propsValue || setValue(value)
    onChange && onChange(value, name)
  }

  return (
    <RadioGroupContext.Provider
      value={{
        name,
        value,
        onChange: handleChange,
      }}
    >
      {children}
    </RadioGroupContext.Provider>
  )
}

export default RadioGroup
