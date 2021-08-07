import React, { useEffect, useState } from 'react'

interface RadioGroupContextProps {
  name: string
  value: string
  onChange: (value: string) => void
}

export const RadioGroupContext = React.createContext<RadioGroupContextProps | null>(null);

interface RadioGroupProps {
  name: string
  value?: string
  defaultValue?: string
  children: React.ReactNode
  onChange: (value: string) => void
}

const RadioGroup = (props: RadioGroupProps) => {
  const {
    name,
    value: propsValue,
    defaultValue,
    children,
    onChange
  } = props

  const [value, setValue] = useState(defaultValue || propsValue || '')

  useEffect(() => {
    if (propsValue !== undefined) {
      setValue(propsValue)
    }
  }, [propsValue])

  const handleChange = (value: string) => {
    propsValue || setValue(value)
    onChange && onChange(value)
  }

  return (
    <RadioGroupContext.Provider
      value={{
        name, value, onChange: handleChange
      }}
    >
      {children}
    </RadioGroupContext.Provider>
  )
}

export default RadioGroup
