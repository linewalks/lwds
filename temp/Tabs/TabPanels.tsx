import React from 'react'

interface TabPanelProps {
  activeIndex: number
  children: React.ReactNode
}

const TabPanels = (props: TabPanelProps) => {
  const {
    activeIndex,
    children,
    ...rest
  } = props
  return (
    <div
      {...rest}
    >
      {React.Children.map(children, (child, index) => {
        return index === activeIndex && child
      })}
    </div>
  )
}

export default TabPanels
