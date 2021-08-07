import React from 'react'
import clsx from 'clsx'

import './Tab.scss'
import cls from '@helpers/class'

interface TabProps {
  id?: string
  variant: string
  size: string
  active: boolean
  style?: object
  children: React.ReactNode
  onClick: () => void
}

const Tab = (props: TabProps) => {
  const {
    id,
    variant,
    size,
    active,
    style,
    children,
    onClick
  } = props
  return (
    <div
      id={id}
      className={clsx(
        cls('tab'),
        cls('tab', variant),
        cls('tab', size),
        active && cls('tab', variant, 'active')
      )}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Tab
