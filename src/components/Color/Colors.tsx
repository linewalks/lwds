import React from 'react'
import _ from 'lodash'
import styled from 'styled-components'
import * as colors from '@assets/styles/color/semantics'

import { rgba2hex, hexBrightness } from '@src/helpers/color'

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
    color_caution: colors.$color_caution,
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
    color_text_warning: colors.$color_text_warning,
    color_text_danger: colors.$color_text_danger,
    color_text_success: colors.$color_text_success,
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
    color_icon_disabled_accent: colors.$color_icon_disabled_accent,
    color_icon_info: colors.$color_icon_info,
    color_icon_accent: colors.$color_icon_accent,
    color_icon_warning: colors.$color_icon_warning,
    color_icon_caution: colors.$color_icon_caution,
    color_icon_error: colors.$color_icon_error,
    color_icon_danger: colors.$color_icon_danger,
    color_icon_success: colors.$color_icon_success,
    color_icon_safe: colors.$color_icon_safe,
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

const WrapColorPalette = styled.div`
  display: flex;
  flex-direction: column;
  width: 370px;

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
    margin: 0;
    padding: 5px;
  }
  dd {
    margin: 0;
  }
`

const ColorBox = styled.div<{ color: string; isBright: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 360px;
  height: 50px;
  background-color: ${({ color }) => color};
  border: ${({ color }) =>
    color === '#ffffff' ? `1px solid #cbd0d8` : 'none'};
  color: ${({ isBright }) => (isBright ? 'black' : 'white')};
`

const ColorPalette = ({ themeName }) => (
  <WrapColorPalette className="color_palette">
    <h2>{themeName}</h2>
    <Box>
      {_.map(ColorSet[themeName], (value, key) => (
        <dl key={key}>
          <ColorBox
            color={value}
            isBright={hexBrightness(rgba2hex(value)) > 255 * 0.6}
          >
            <dt>{key}</dt> &nbsp;
            <dd>({rgba2hex(value)})</dd>
          </ColorBox>
        </dl>
      ))}
    </Box>
  </WrapColorPalette>
)
export default ColorPalette
