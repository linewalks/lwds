import React from 'react'
import _ from 'lodash'
import styled from 'styled-components'
import * as colors from '@assets/styles/color/colors'

const ChartColorSet = {
  hover: {
    red_hover: colors.$lw_red_hover,
    grey_hover: colors.$lw_grey_hover,
    highlight_hover: colors.$lw_highlight_hover,
  },
}

export default ChartColorSet

const WrapColorPaletteList = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`

const WrapColorPalette = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  text-align: center;

  h2 {
    margin: 0 0 10px;
    font-size: 18px;
    font-weight: bold;
  }
`

const Box = styled.div`
  display: flex;
  flex-direction: column;

  dl {
    display: flex;
    margin: 0;
    padding: 5px;
  }
  dt {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
`

const ColorBox = styled.div<{ color: string }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: ${({ color }) => color};
  border: ${({ color }) =>
    color === '#ffffff' ? `1px solid #cbd0d8` : 'none'};
`

const ColorPalette = ({ themeName }) => (
  <WrapColorPalette className="color_palette">
    <h2>{themeName}</h2>
    <Box>
      {_.map(ChartColorSet[themeName], (value, key) => (
        <dl key={key}>
          <ColorBox color={value} />
          <dt>{key}</dt>
        </dl>
      ))}
    </Box>
  </WrapColorPalette>
)

export const ChartColors = () => {
  const ColorList = ['hover']

  return (
    <WrapColorPaletteList>
      {ColorList.map((themeName) => (
        <ColorPalette key={themeName} themeName={themeName} />
      ))}
    </WrapColorPaletteList>
  )
}
