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

  $layout01: colors.$lw_white,
  $layout02: colors.$lw_grey10,
  $layout03: colors.$lw_grey20,
  $layout04: colors.$lw_grey40,
  $layout05: colors.$lw_grey30,

  $layout_emphasize01: colors.$lw_grey70,
  $layout_emphasize02: colors.$lw_grey80,
  $layout_emphasize03: colors.$lw_grey90,

  $danger: colors.$lw_red50,
  $safe: colors.$lw_green50,

  // Status Colors
  // hover
  $hover_primary: colors.$lw_hover_overlay,
  $hover_tertiary_button: colors.$lw_blue50,
  $hover_danger_tertiary_button: colors.$lw_red50,

  // focus
  $focus_primary: colors.$lw_blue50,
  $focus_secondary: colors.$lw_grey70,
  $focus_error: colors.$lw_red50,

  // active
  $active_primary: colors.$lw_active_overlay,
  $active_tertiary_button: colors.$lw_blue60,
  $active_danger_tertiary_button: colors.$lw_red60,

  // disabled
  $disabled01: colors.$lw_grey20,
  $disabled02: colors.$lw_grey50,

  // etc
  $skeleton01: colors.$lw_grey20,
  $highlight01: colors.$lw_highlight,
  $dimmed_overlay: colors.$lw_dimmed_overlay,

  // Text
  $text01: colors.$lw_grey100,
  $text02: colors.$lw_grey90,
  $text03: colors.$lw_grey80,
  $text04: colors.$lw_grey70,
  $text05: colors.$lw_grey60,
  $text_error: colors.$lw_red60,
  $text_safe: colors.$lw_green60,
  $text_info: colors.$lw_blue60,
  $text_accent: colors.$lw_blue50,
  $text_inverse: colors.$lw_white,
  $text_disabled: colors.$lw_grey50,

  // Icon
  $icon01: colors.$lw_grey100,
  $icon02: colors.$lw_grey90,
  $icon03: colors.$lw_grey80,
  $icon04: colors.$lw_grey60,
  $icon_danger: colors.$lw_red50,
  $icon_safe: colors.$lw_green50,
  $icon_accent: colors.$lw_blue50,
  $icon_inverse01: colors.$lw_white,
  $icon_inverse02: colors.$lw_grey40,
  $icon_disabled: colors.$lw_grey50,

  // Button
  $button_primary: colors.$lw_blue50,
  $button_secondary: colors.$lw_grey30,
  $button_tertiary: colors.$lw_blue50,
  $button_disabled: colors.$lw_grey20,
  $button_danger: colors.$lw_red50,

  // Field
  $field01: colors.$lw_white,
  $field_disabled: colors.$lw_grey20,
}
