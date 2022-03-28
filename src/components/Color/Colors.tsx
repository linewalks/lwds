import React from 'react'
import _ from 'lodash'
import styled from 'styled-components'
import * as colors from '@assets/styles/color/semantics'

const ColorSet = {
  Common: {
    color_background: colors.$color_background,
    color_secondary_background: colors.$color_secondary_background,
    color_layout_01: colors.$color_layout_01,
    color_layout_02: colors.$color_layout_02,
    color_layout_03: colors.$color_layout_03,
    color_layout_04: colors.$color_layout_04,
    color_layout_05: colors.$color_layout_05,
    color_layout_emphasize_01: colors.$color_layout_emphasize_01,
    color_layout_emphasize_02: colors.$color_layout_emphasize_02,
    color_layout_emphasize_03: colors.$color_layout_emphasize_03,
    color_primary_element: colors.$color_primary_element,
    color_secondary_element: colors.$color_secondary_element,
    color_danger: colors.$color_danger,
    color_safe: colors.$color_safe,
  },
  Text: {
    color_text_01: colors.$color_text_01,
    color_text_02: colors.$color_text_02,
    color_text_03: colors.$color_text_03,
    color_text_04: colors.$color_text_04,
    color_text_05: colors.$color_text_05,
    color_text_error: colors.$color_text_error,
    color_text_safe: colors.$color_text_safe,
    color_text_info: colors.$color_text_info,
    color_text_accent: colors.$color_text_accent,
    color_text_danger: colors.$color_text_danger,
    color_text_inverse: colors.$color_text_inverse,
    color_text_disabled: colors.$color_text_disabled,
  },
  Icon: {
    color_icon_01: colors.$color_icon_01,
    color_icon_02: colors.$color_icon_02,
    color_icon_03: colors.$color_icon_03,
    color_icon_04: colors.$color_icon_04,
    color_icon_inverse_01: colors.$color_icon_inverse_01,
    color_icon_inverse_02: colors.$color_icon_inverse_02,
    color_icon_disabled: colors.$color_icon_disabled,
    color_icon_danger: colors.$color_icon_danger,
    color_icon_safe: colors.$color_icon_safe,
    color_icon_accent: colors.$color_icon_accent,
  },
  Button: {
    color_button_primary: colors.$color_button_primary,
    color_button_secondary: colors.$color_button_secondary,
    color_button_tertiary: colors.$color_button_tertiary,
    color_button_disabled: colors.$color_button_disabled,
    color_button_danger: colors.$color_button_danger,
  },
  Field: {
    color_field_01: colors.$color_field_01,
    color_field_disabled: colors.$color_field_disabled,
  },
  hover: {
    color_hover_primary: colors.$color_hover_primary,
    color_hover_tertiary_button: colors.$color_hover_tertiary_button,
    color_hover_danger_tertiary_button:
      colors.$color_hover_danger_tertiary_button,
  },
  focus: {
    color_focus_primary: colors.$color_focus_primary,
    color_focus_accent: colors.$color_focus_accent,
    color_focus_secondary: colors.$color_focus_secondary,
    color_focus_error: colors.$color_focus_error,
  },
  active: {
    color_active_primary: colors.$color_active_primary,
    color_active_tertiary_button: colors.$color_active_tertiary_button,
    color_active_danger_tertiary_button:
      colors.$color_active_danger_tertiary_button,
  },
  disabled: {
    color_disabled_01: colors.$color_disabled_01,
    color_disabled_02: colors.$color_disabled_02,
  },
  etc: {
    color_shadow_01: colors.$color_shadow_01,
    color_shadow_02: colors.$color_shadow_02,
    color_skeleton_01: colors.$color_skeleton_01,
    color_highlight_01: colors.$color_highlight_01,
    color_dimmed_overlay: colors.$color_dimmed_overlay,
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
