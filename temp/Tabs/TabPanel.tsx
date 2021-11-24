import React from 'react'

interface TabPanelProps {
  children: React.ReactNode
}

const TabPanel = (props: TabPanelProps) => {
  const {
    children,
    ...rest
  } = props

  return (
    <div
      {...rest}
    >
      {children}
    </div>
  )
}

export default TabPanel
