import React from 'react'
import clsx from 'clsx'

import './Dropdown.scss'
import cls from '@helpers/class'

export interface DropdownContextProps {
  size: string
}

export const DropdownContext = React.createContext<DropdownContextProps | null>(null)

interface DropdownProps {
  size: 'lg' | 'md' | string
  style?: object
  children: React.ReactNode
}

const Dropdown = (props: DropdownProps) => {
  const {
    size,
    style,
    children
  } = props

  return (
    <DropdownContext.Provider
      value={{ size }}
    >
      <div
        className={clsx(
          cls('dropdown'),
          cls('dropdown', size)
        )}
        style={style}
      >
        {children}
      </div>
    </DropdownContext.Provider>
  )
}

Dropdown.defaultProps = {
  size: 'md'
}

export default Dropdown
