//tailwind.config.js 설정을 위해 CommonJS 방식 사용
const colors = require('./colors')

// semantic color 설정 시 무조건 colors의 값을 가져와야 함.
// ex) $danger: colors.$lw_red50이고, $focus_error도 동일한 값으로 할당하고 싶을때
//   $focus_error: colors.$lw_red50 (o)
//   $focus_error: $danger (x)

module.exports = {
  $background: colors.$lw_white,
  $secondary_background: colors.$lw_grey10,

  $primary_element: colors.$lw_blue50,
  $secondary_element: colors.$lw_blue90,

  $layout_01: colors.$lw_white,
  $layout_02: colors.$lw_grey10,
  $layout_03: colors.$lw_grey20,
  $layout_04: colors.$lw_grey40,
  $layout_05: colors.$lw_grey30,

  $layout_emphasize_01: colors.$lw_grey70,
  $layout_emphasize_02: colors.$lw_grey80,
  $layout_emphasize_03: colors.$lw_grey90,

  $danger: colors.$lw_red50,
  $safe: colors.$lw_green50,

  // Status Colors
  // hover
  $hover_primary: colors.$lw_hover_overlay,
  $hover_tertiary_button: colors.$lw_blue50,
  $hover_danger_tertiary_button: colors.$lw_red50,

  // focus
  $focus_primary: colors.$lw_blue70,
  $focus_accent: colors.$lw_blue50,
  $focus_secondary: colors.$lw_grey70,
  $focus_error: colors.$lw_red50,

  // active
  $active_primary: colors.$lw_active_overlay,
  $active_tertiary_button: colors.$lw_blue60,
  $active_danger_tertiary_button: colors.$lw_red60,

  // disabled
  $disabled_01: colors.$lw_grey20,
  $disabled_02: colors.$lw_grey50,

  // etc
  $shadow_01: colors.$lw_shadow_01,
  $shadow_02: colors.$lw_shadow_02,
  $skeleton_01: colors.$lw_grey20,
  $highlight_01: colors.$lw_highlight,
  $dimmed_overlay: colors.$lw_dimmed_overlay,

  // Text
  $text_01: colors.$lw_grey100,
  $text_02: colors.$lw_grey90,
  $text_03: colors.$lw_grey80,
  $text_04: colors.$lw_grey70,
  $text_05: colors.$lw_grey60,
  $text_error: colors.$lw_red60,
  $text_safe: colors.$lw_green60,
  $text_info: colors.$lw_blue60,
  $text_accent: colors.$lw_blue50,
  $text_danger: colors.$lw_red50,
  $text_inverse: colors.$lw_white,
  $text_disabled: colors.$lw_grey50,

  // Icon
  $icon_01: colors.$lw_grey100,
  $icon_02: colors.$lw_grey90,
  $icon_03: colors.$lw_grey80,
  $icon_04: colors.$lw_grey70,
  $icon_danger: colors.$lw_red50,
  $icon_safe: colors.$lw_green50,
  $icon_accent: colors.$lw_blue50,
  $icon_inverse_01: colors.$lw_white,
  $icon_inverse_02: colors.$lw_grey40,
  $icon_disabled: colors.$lw_grey50,

  // Button
  $button_primary: colors.$lw_blue50,
  $button_secondary: colors.$lw_grey30,
  $button_tertiary: colors.$lw_blue50,
  $button_disabled: colors.$lw_grey20,
  $button_danger: colors.$lw_red50,

  // Field
  $field_01: colors.$lw_white,
  $field_disabled: colors.$lw_grey20,
}
