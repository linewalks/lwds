import React, { useContext } from 'react'
import clsx from 'clsx'

import cls from '@helpers/class'
import {
  DropdownContextProps,
  DropdownContext,
} from '@components/Menu/Dropdown/Dropdown'

interface DropdownItemProps {
  bold: boolean
  isButton: boolean
  startImgSrc?: string
  endImgSrc?: string
  children: React.ReactNode
  onClick?: any
}

const DropdownItem = (props: DropdownItemProps) => {
  const context: DropdownContextProps = useContext(DropdownContext)

  const { bold, isButton, startImgSrc, endImgSrc, children, onClick } = props

  const renderStartImg = (): React.ReactNode => {
    return (
      <img
        className={cls('dropdown', 'item', 'startimg')}
        src={startImgSrc}
        alt=""
      />
    )
  }

  const renderEndImg = (): React.ReactNode => {
    return (
      <img
        className={cls('dropdown', 'item', 'endimg')}
        src={endImgSrc}
        alt=""
      />
    )
  }

  return (
    <div
      className={clsx(
        cls('dropdown', 'item'),
        cls('dropdown', 'item', context.size),
        isButton && cls('dropdown', 'item', 'button'),
      )}
      style={{ fontWeight: bold ? 'bold' : 'normal' }}
      onClick={onClick}
    >
      {startImgSrc && renderStartImg()}
      {children}
      {endImgSrc && renderEndImg()}
    </div>
  )
}

DropdownItem.defaultProps = {
  bold: false,
  isButton: false,
}

export default DropdownItem
