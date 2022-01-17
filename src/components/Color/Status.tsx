import React from 'react'

import ColorPalette from '@src/components/Color/Colors'

const StatusColor = () => {
  const ColorList = ['hover', 'focus', 'active', 'disabled', 'etc']

  return (
    <>
      {ColorList.map((themeName) => (
        <ColorPalette key={themeName} themeName={themeName} />
      ))}
    </>
  )
}

export default StatusColor
