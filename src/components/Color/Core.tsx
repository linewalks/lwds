import React from 'react'

import ColorPalette from '@src/components/Color/Colors'

function CoreColor() {
  const ColorList = ['Common', 'Text', 'Icon', 'Button', 'Field']

  return (
    <>
      {ColorList.map((themeName) => (
        <ColorPalette key={themeName} themeName={themeName} />
      ))}
    </>
  )
}

export default CoreColor
