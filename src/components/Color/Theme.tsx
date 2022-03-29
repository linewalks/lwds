import React from 'react'
import _ from 'lodash'
import styled from 'styled-components'

import * as colors from '@assets/styles/color/colors'

const ColorSet = {
  'Primary, Secondary': {
    lw_blue10: colors.$lw_blue10,
    lw_blue20: colors.$lw_blue20,
    lw_blue30: colors.$lw_blue30,
    lw_blue40: colors.$lw_blue40,
    lw_blue50: colors.$lw_blue50,
    lw_blue60: colors.$lw_blue60,
    lw_blue70: colors.$lw_blue70,
    lw_blue80: colors.$lw_blue80,
    lw_blue90: colors.$lw_blue90,
  },
  Greyscale: {
    lw_white: colors.$lw_white,
    lw_grey10: colors.$lw_grey10,
    lw_grey20: colors.$lw_grey20,
    lw_grey30: colors.$lw_grey30,
    lw_grey40: colors.$lw_grey40,
    lw_grey50: colors.$lw_grey50,
    lw_grey60: colors.$lw_grey60,
    lw_grey70: colors.$lw_grey70,
    lw_grey80: colors.$lw_grey80,
    lw_grey90: colors.$lw_grey90,
    lw_grey100: colors.$lw_grey100,
  },
  Feedback: {
    lw_red50: colors.$lw_red50,
    lw_red60: colors.$lw_red60,
    lw_red90: colors.$lw_red90,
    lw_blue50: colors.$lw_blue50,
    lw_blue60: colors.$lw_blue60,
    lw_blue90: colors.$lw_blue90,
    lw_green50: colors.$lw_green50,
    lw_green60: colors.$lw_green60,
    lw_green90: colors.$lw_green90,
  },
  Status: {
    lw_dimmed_overlay: colors.$lw_dimmed_overlay,
    lw_active_overlay: colors.$lw_active_overlay,
    lw_hover_overlay: colors.$lw_hover_overlay,
    lw_shadow_01: colors.$lw_shadow_01,
    lw_shadow_02: colors.$lw_shadow_02,
  },
}

const WrapColorPaletteList = styled.section`
  display: flex;
  justify-content: center;
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
      {_.map(ColorSet[themeName], (value, key) => (
        <dl key={key}>
          <ColorBox color={value} />
          <dt>{key}</dt>
        </dl>
      ))}
    </Box>
  </WrapColorPalette>
)

const ThemeColors = () => {
  const ColorList = ['Primary, Secondary', 'Greyscale', 'Feedback', 'Status']

  return (
    <WrapColorPaletteList>
      {ColorList.map((themeName) => (
        <ColorPalette key={themeName} themeName={themeName} />
      ))}
    </WrapColorPaletteList>
  )
}

export default ThemeColors
