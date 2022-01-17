import React from 'react'
import _ from 'lodash'
import styled from 'styled-components'
import * as colors from '@assets/styles/color/semantics'

const ColorSet = {
  Common: {
    background: colors.$background,
    secondary_background: colors.$secondary_background,
    layout01: colors.$layout01,
    layout02: colors.$layout02,
    layout03: colors.$layout03,
    layout04: colors.$layout04,
    layout05: colors.$layout05,
    layout_emphasize01: colors.$layout_emphasize01,
    layout_emphasize02: colors.$layout_emphasize02,
    layout_emphasize03: colors.$layout_emphasize03,
    primary_element: colors.$primary_element,
    secondary_element: colors.$secondary_element,
    danger: colors.$danger,
    safe: colors.$safe,
  },
  Text: {
    text01: colors.$text01,
    text02: colors.$text02,
    text03: colors.$text03,
    text04: colors.$text04,
    text05: colors.$text05,
    text_error: colors.$text_error,
    text_safe: colors.$text_safe,
    text_info: colors.$text_info,
    text_accent: colors.$text_accent,
    text_inverse: colors.$text_inverse,
    text_disabled: colors.$text_disabled,
  },
  Icon: {
    icon01: colors.$icon01,
    icon02: colors.$icon02,
    icon03: colors.$icon03,
    icon04: colors.$icon04,
    icon_inverse01: colors.$icon_inverse01,
    icon_inverse02: colors.$icon_inverse02,
    icon_disabled: colors.$icon_disabled,
    icon_error: colors.$icon_error,
    icon_safe: colors.$icon_safe,
    icon_accent: colors.$icon_accent,
  },
  Button: {
    button_primary: colors.$button_primary,
    button_secondary: colors.$button_secondary,
    button_tertiary: colors.$button_tertiary,
    button_disabled: colors.$button_disabled,
    button_danger: colors.$button_danger,
  },
  Field: {
    field01: colors.$field01,
    field_disabled: colors.$field_disabled,
  },
  hover: {
    hover_primary: colors.$hover_primary,
    hover_tertiary_button: colors.$hover_tertiary_button,
    hover_danger_tertiary_button: colors.$hover_danger_tertiary_button,
  },
  focus: {
    focus_primary: colors.$focus_primary,
    focus_secondary: colors.$focus_secondary,
    focus_error: colors.$focus_error,
  },
  active: {
    active_primary: colors.$active_primary,
    active_tertiary_button: colors.$active_tertiary_button,
    active_danger_tertiary_button: colors.$active_danger_tertiary_button,
  },
  disabled: {
    disabled01: colors.$disabled01,
    disabled02: colors.$disabled02,
  },
  etc: {
    skeleton01: colors.$skeleton01,
    highlight01: colors.$highlight01,
    dimmed_overlay: colors.$dimmed_overlay,
  },
}

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;

  dl {
    display: inline-flex;
    flex-direction: column;
    width: 175px;
    padding: 5px;
    text-align: center;
  }

  dd {
    margin: 0;
  }

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`

const ColorBox = styled.section<{ size?: number; value: string }>`
  display: inline-block;
  width: ${({ size = 100 }) => `${size}px`};
  height: ${({ size = 100 }) => `${size}px`};
  background-color: ${({ value }) => value};
  border: ${({ value }) =>
    value === '#ffffff' ? `1px solid #cbd0d8` : 'none'};
`

const WrapColorPalette = styled.section`
  display: flex;
  flex-direction: column;
  margin: 10px 10px 30px;
`

const rgba2hex = (color: string): string => {
  const rgbaRegex = /^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i
  const colorRemoveSpace = color.replace(/\s/g, '')

  if (!colorRemoveSpace.match(rgbaRegex)) {
    return color
  }

  const rgb = color.replace(/\s/g, '').match(rgbaRegex)
  const alpha = ((rgb && rgb[4]) || '').trim()
  const hex = rgb
    ? (Number(rgb[1]) | (1 << 8)).toString(16).slice(1) +
      (Number(rgb[2]) | (1 << 8)).toString(16).slice(1) +
      (Number(rgb[3]) | (1 << 8)).toString(16).slice(1)
    : color

  let alp = alpha === '' ? 1 : alpha
  alp = ((Number(alp) * 255) | (1 << 8)).toString(16).slice(1)

  return '#' + hex + alp
}

const ColorPalette = ({ themeName }) => (
  <WrapColorPalette>
    <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>{themeName}</h2>
    <Box>
      {_.map(ColorSet[themeName], (value, key) => (
        <dl key={key}>
          <dt>{key}</dt>
          <dt style={{ marginBottom: '5px' }}>{rgba2hex(value)}</dt>
          <dd>
            <ColorBox value={value} />
          </dd>
        </dl>
      ))}
    </Box>
  </WrapColorPalette>
)
export default ColorPalette
