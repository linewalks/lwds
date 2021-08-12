import React, { useContext } from 'react'
import clsx from 'clsx'

import cls from '@helpers/class'
import {
  DropdownContextProps,
  DropdownContext
} from '@components/Menu/Dropdown/Dropdown'
import { isNoSubstitutionTemplateLiteral } from 'typescript'

interface DropdownItemProps {
  bold: boolean
  isButton: boolean
  children: React.ReactNode
  onClick?: () => void
}

const DropdownItem = (props: DropdownItemProps) => {
  const context: DropdownContextProps = useContext(DropdownContext)

  const {
    bold,
    isButton,
    children,
    onClick
  } = props
  return (
    <div
      className={clsx(
        cls('dropdown', 'item'),
        cls('dropdown', 'item', context.size),
        isButton && cls('dropdown', 'item', 'button')
      )}
      style={{ fontWeight: bold ? 'bold' : 'normal' }}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

DropdownItem.defaultProps = {
  bold: false,
  isButton: false
}

export default DropdownItem
