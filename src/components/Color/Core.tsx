import React from 'react'
import styled from 'styled-components'
import ColorPalette from '@src/components/Color/Colors'

const WrapColorPaletteList = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  text-align: center;
  row-gap: 40px;
`

const CoreColors = () => {
  const ColorList = ['Common', 'Text', 'Icon', 'Button', 'Field']

  return (
    <WrapColorPaletteList>
      {ColorList.map((themeName) => (
        <ColorPalette key={themeName} themeName={themeName} />
      ))}
    </WrapColorPaletteList>
  )
}

export default CoreColors
