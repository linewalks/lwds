import React from 'react'
import _ from 'lodash'
import styled from 'styled-components'
import * as colors from '@assets/styles/color/colors'

const ChartColorSet = {
  sea: {
    sea_10: colors.$lw_sea10,
    sea_50: colors.$lw_sea50,
    sea_100: colors.$lw_sea100,
    sea_200: colors.$lw_sea200,
    sea_300: colors.$lw_sea300,
    sea_400: colors.$lw_sea400,
    sea_500: colors.$lw_sea500,
    sea_600: colors.$lw_sea600,
    sea_700: colors.$lw_sea700,
    sea_800: colors.$lw_sea800,
  },
  teal: {
    teal_10: colors.$lw_teal10,
    teal_50: colors.$lw_teal50,
    teal_100: colors.$lw_teal100,
    teal_200: colors.$lw_teal200,
    teal_300: colors.$lw_teal300,
    teal_400: colors.$lw_teal400,
    teal_500: colors.$lw_teal500,
    teal_600: colors.$lw_teal600,
    teal_700: colors.$lw_teal700,
    teal_800: colors.$lw_teal800,
  },
  moss: {
    moss_10: colors.$lw_moss10,
    moss_50: colors.$lw_moss50,
    moss_100: colors.$lw_moss100,
    moss_200: colors.$lw_moss200,
    moss_300: colors.$lw_moss300,
    moss_400: colors.$lw_moss400,
    moss_500: colors.$lw_moss500,
    moss_600: colors.$lw_moss600,
    moss_700: colors.$lw_moss700,
    moss_800: colors.$lw_moss800,
  },
  rose: {
    rose_10: colors.$lw_rose10,
    rose_50: colors.$lw_rose50,
    rose_100: colors.$lw_rose100,
    rose_200: colors.$lw_rose200,
    rose_300: colors.$lw_rose300,
    rose_400: colors.$lw_rose400,
    rose_500: colors.$lw_rose500,
    rose_600: colors.$lw_rose600,
    rose_700: colors.$lw_rose700,
    rose_800: colors.$lw_rose800,
  },
  gold: {
    gold_10: colors.$lw_gold10,
    gold_50: colors.$lw_gold50,
    gold_100: colors.$lw_gold100,
    gold_200: colors.$lw_gold200,
    gold_300: colors.$lw_gold300,
    gold_400: colors.$lw_gold400,
    gold_500: colors.$lw_gold500,
    gold_600: colors.$lw_gold600,
    gold_700: colors.$lw_gold700,
    gold_800: colors.$lw_gold800,
  },
  butter: {
    butter_10: colors.$lw_butter10,
    butter_50: colors.$lw_butter50,
    butter_100: colors.$lw_butter100,
    butter_200: colors.$lw_butter200,
    butter_300: colors.$lw_butter300,
    butter_400: colors.$lw_butter400,
    butter_500: colors.$lw_butter500,
    butter_600: colors.$lw_butter600,
    butter_700: colors.$lw_butter700,
    butter_800: colors.$lw_butter800,
  },
  berry: {
    berry_10: colors.$lw_berry10,
    berry_50: colors.$lw_berry50,
    berry_100: colors.$lw_berry100,
    berry_200: colors.$lw_berry200,
    berry_300: colors.$lw_berry300,
    berry_400: colors.$lw_berry400,
    berry_500: colors.$lw_berry500,
    berry_600: colors.$lw_berry600,
    berry_700: colors.$lw_berry700,
    berry_800: colors.$lw_berry800,
  },
  tulip: {
    tulip_10: colors.$lw_tulip10,
    tulip_50: colors.$lw_tulip50,
    tulip_100: colors.$lw_tulip100,
    tulip_200: colors.$lw_tulip200,
    tulip_300: colors.$lw_tulip300,
    tulip_400: colors.$lw_tulip400,
    tulip_500: colors.$lw_tulip500,
    tulip_600: colors.$lw_tulip600,
    tulip_700: colors.$lw_tulip700,
    tulip_800: colors.$lw_tulip800,
  },
  bluegrey: {
    bluegrey_10: colors.$lw_bluegrey10,
    bluegrey_50: colors.$lw_bluegrey50,
    bluegrey_100: colors.$lw_bluegrey100,
    bluegrey_200: colors.$lw_bluegrey200,
    bluegrey_300: colors.$lw_bluegrey300,
    bluegrey_400: colors.$lw_bluegrey400,
    bluegrey_500: colors.$lw_bluegrey500,
    bluegrey_600: colors.$lw_bluegrey600,
    bluegrey_700: colors.$lw_bluegrey700,
    bluegrey_800: colors.$lw_bluegrey800,
  },
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
  const ColorList = [
    'sea',
    'teal',
    'moss',
    'rose',
    'gold',
    'butter',
    'berry',
    'tulip',
    'bluegrey',
    'hover',
  ]

  return (
    <WrapColorPaletteList>
      {ColorList.map((themeName) => (
        <ColorPalette key={themeName} themeName={themeName} />
      ))}
    </WrapColorPaletteList>
  )
}
