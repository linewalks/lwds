import React from 'react'
import styled from 'styled-components'
import ColorPalette from '@src/components/Color/Colors'

const WrapColorPaletteList = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'palette_1 palette_2'
    'palette_3 palette_4'
    'palette_3 palette_5';
  justify-items: center;
  text-align: center;
  row-gap: 40px;

  .color_palette:nth-child(1) {
    grid-area: palette_1;
  }
  .color_palette:nth-child(2) {
    grid-area: palette_2;
  }
  .color_palette:nth-child(3) {
    grid-area: palette_3;
  }
  .color_palette:nth-child(4) {
    grid-area: palette_4;
  }
  .color_palette:nth-child(5) {
    grid-area: palette_5;
  }
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
