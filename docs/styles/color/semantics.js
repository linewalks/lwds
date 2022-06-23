//tailwind.config.js 설정을 위해 CommonJS 방식 사용
const colors = require('./colors')

// semantic color 설정 시 무조건 colors의 값을 가져와야 함.
// ex) $danger: colors.$lw_red50이고, $focus_error도 동일한 값으로 할당하고 싶을때
//   $focus_error: colors.$lw_red50 (o)
//   $focus_error: $danger (x)

module.exports = {
  $color_background: colors.$lw_white,
  $color_secondary_background: colors.$lw_grey10,

  $color_primary_element: colors.$lw_blue50,
  $color_secondary_element: colors.$lw_blue90,

  $color_layout_01: colors.$lw_white,
  $color_layout_02: colors.$lw_grey10,
  $color_layout_03: colors.$lw_grey20,
  $color_layout_04: colors.$lw_grey40,
  $color_layout_05: colors.$lw_grey30,

  $color_layout_emphasize_01: colors.$lw_grey70,
  $color_layout_emphasize_02: colors.$lw_grey80,
  $color_layout_emphasize_03: colors.$lw_grey90,

  $color_danger: colors.$lw_red50,
  $color_safe: colors.$lw_green50,

  // Status Colors
  // hover
  $color_hover_primary: colors.$lw_hover_overlay,
  $color_hover_tertiary_button: colors.$lw_blue50,
  $color_hover_danger_tertiary_button: colors.$lw_red50,

  // focus
  $color_focus_primary: colors.$lw_blue70,
  $color_focus_accent: colors.$lw_blue50,
  $color_focus_secondary: colors.$lw_grey70,
  $color_focus_error: colors.$lw_red50,

  // active
  $color_active_primary: colors.$lw_active_overlay,
  $color_active_tertiary_button: colors.$lw_blue60,
  $color_active_danger_tertiary_button: colors.$lw_red60,

  // disabled
  $color_disabled_01: colors.$lw_grey20,
  $color_disabled_02: colors.$lw_grey50,

  // etc
  $color_shadow_01: colors.$lw_shadow_01,
  $color_shadow_02: colors.$lw_shadow_02,
  $color_skeleton_01: colors.$lw_grey20,
  $color_highlight_01: colors.$lw_highlight,
  $color_dimmed_overlay: colors.$lw_dimmed_overlay,

  // Text
  $color_text_01: colors.$lw_grey100,
  $color_text_02: colors.$lw_grey90,
  $color_text_03: colors.$lw_grey80,
  $color_text_04: colors.$lw_grey70,
  $color_text_05: colors.$lw_grey60,
  $color_text_error: colors.$lw_red60,
  $color_text_safe: colors.$lw_green60,
  $color_text_info: colors.$lw_blue60,
  $color_text_accent: colors.$lw_blue50,
  $color_text_danger: colors.$lw_red50,
  $color_text_inverse: colors.$lw_white,
  $color_text_disabled: colors.$lw_grey50,

  // Icon
  $color_icon_01: colors.$lw_grey100,
  $color_icon_02: colors.$lw_grey90,
  $color_icon_03: colors.$lw_grey80,
  $color_icon_04: colors.$lw_grey70,
  $color_icon_05: colors.$lw_grey60,
  $color_icon_danger: colors.$lw_red50,
  $color_icon_safe: colors.$lw_green50,
  $color_icon_accent: colors.$lw_blue50,
  $color_icon_inverse_01: colors.$lw_white,
  $color_icon_inverse_02: colors.$lw_grey40,
  $color_icon_disabled: colors.$lw_grey50,

  // Button
  $color_button_primary: colors.$lw_blue50,
  $color_button_secondary: colors.$lw_grey30,
  $color_button_tertiary: colors.$lw_blue50,
  $color_button_disabled: colors.$lw_grey20,
  $color_button_danger: colors.$lw_red50,

  // Field
  $color_field_01: colors.$lw_white,
  $color_field_disabled: colors.$lw_grey20,
}
