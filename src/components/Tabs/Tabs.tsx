import React, { useEffect, useState } from 'react'
import clsx from 'clsx'

import './Tabs.scss'
import ChildMargin from 'components/Layout/ChildMargin'
import cls from 'helpers/class'
import { cloneWithProps } from 'helpers/node'

interface TabsProps {
  variant: string
  size: string
  tabSpacing: number
  activeIndex?: number
  children: React.ReactNode
  onChange?: (index: number) => void
}

const Tabs = (props: TabsProps) => {
  const {
    variant,
    size,
    tabSpacing,
    activeIndex: propsActiveIndex,
    children,
    onChange,
    ...rest
  } = props

  const [activeIndex, setActiveIndex] = useState(propsActiveIndex || 0)

  const handleTabClick = (index: number) => {
    propsActiveIndex || setActiveIndex(index)
    onChange && onChange(index)
  }

  useEffect(() => {
    if (propsActiveIndex != null) {
      setActiveIndex(propsActiveIndex)
    }
  }, [propsActiveIndex])

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
      {...rest}
      className={clsx(
        cls('tabs'),
        cls('tabs', variant),
        cls('tabs', size)
      )}
      margin={tabSpacing}
    >
      {renderChild()}
    </ChildMargin>
  )
}

Tabs.defaultProps = {
  variant: 'basic',
  size: 'md',
  tabSpacing: 20
}

export default Tabs
