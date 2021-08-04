import React, { useState } from 'react'
import clsx from 'clsx'

import './Tabs.scss'
import ChildMargin from 'components/Layout/ChildMargin'
import cls from 'helpers/class'
import { cloneWithProps } from 'helpers/node'

interface TabsProps {
  id?: string
  variant: string
  size: string
  tabSpacing: number
  activeIndex?: number
  defaultActiveIndex?: number
  style?: object
  children: React.ReactNode
  onChange?: (index: number) => void
}

const Tabs = (props: TabsProps) => {
  const {
    id,
    variant,
    size,
    tabSpacing,
    activeIndex: propsActiveIndex,
    defaultActiveIndex,
    style,
    children,
    onChange
  } = props

  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex || propsActiveIndex || 0)

  const handleTabClick = (index: number) => {
    propsActiveIndex || setActiveIndex(index)
    onChange && onChange(index)
  }

  const renderChild = () => {
    return React.Children.map(children, (child, index) => {
      return cloneWithProps(child, {
        variant,
        size,
        active: index === activeIndex,
        onClick: () => handleTabClick(index)
      })
    })
  }

  return (
    <ChildMargin
      id={id}
      className={clsx(
        cls('tabs'),
        cls('tabs', variant),
        cls('tabs', size)
      )}
      style={style}
      margin={tabSpacing}
    >
      {renderChild()}
    </ChildMargin>
  )
}

Tabs.defaultProps = {
  variant: 'basic',
  size: 'md',
  tabSpacing: 20,
  activeIndex: 0
}

export default Tabs
