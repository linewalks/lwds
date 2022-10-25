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

  // Chart
  // Sea
  $color_chart_sea_10: colors.$lw_sea10,
  $color_chart_sea_50: colors.$lw_sea50,
  $color_chart_sea_100: colors.$lw_sea100,
  $color_chart_sea_200: colors.$lw_sea200,
  $color_chart_sea_300: colors.$lw_sea300,
  $color_chart_sea_400: colors.$lw_sea400,
  $color_chart_sea_500: colors.$lw_sea500,
  $color_chart_sea_600: colors.$lw_sea600,
  $color_chart_sea_700: colors.$lw_sea700,
  $color_chart_sea_800: colors.$lw_sea800,

  // Teal
  $color_chart_teal_10: colors.$lw_teal10,
  $color_chart_teal_50: colors.$lw_teal50,
  $color_chart_teal_100: colors.$lw_teal100,
  $color_chart_teal_200: colors.$lw_teal200,
  $color_chart_teal_300: colors.$lw_teal300,
  $color_chart_teal_400: colors.$lw_teal400,
  $color_chart_teal_500: colors.$lw_teal500,
  $color_chart_teal_600: colors.$lw_teal600,
  $color_chart_teal_700: colors.$lw_teal700,
  $color_chart_teal_800: colors.$lw_teal800,

  // Moss
  $color_chart_moss_10: colors.$lw_moss10,
  $color_chart_moss_50: colors.$lw_moss50,
  $color_chart_moss_100: colors.$lw_moss100,
  $color_chart_moss_200: colors.$lw_moss200,
  $color_chart_moss_300: colors.$lw_moss300,
  $color_chart_moss_400: colors.$lw_moss400,
  $color_chart_moss_500: colors.$lw_moss500,
  $color_chart_moss_600: colors.$lw_moss600,
  $color_chart_moss_700: colors.$lw_moss700,
  $color_chart_moss_800: colors.$lw_moss800,

  // Rose
  $color_chart_rose_10: colors.$lw_rose10,
  $color_chart_rose_50: colors.$lw_rose50,
  $color_chart_rose_100: colors.$lw_rose100,
  $color_chart_rose_200: colors.$lw_rose200,
  $color_chart_rose_300: colors.$lw_rose300,
  $color_chart_rose_400: colors.$lw_rose400,
  $color_chart_rose_500: colors.$lw_rose500,
  $color_chart_rose_600: colors.$lw_rose600,
  $color_chart_rose_700: colors.$lw_rose700,
  $color_chart_rose_800: colors.$lw_rose800,

  // Gold
  $color_chart_gold_10: colors.$lw_gold10,
  $color_chart_gold_50: colors.$lw_gold50,
  $color_chart_gold_100: colors.$lw_gold100,
  $color_chart_gold_200: colors.$lw_gold200,
  $color_chart_gold_300: colors.$lw_gold300,
  $color_chart_gold_400: colors.$lw_gold400,
  $color_chart_gold_500: colors.$lw_gold500,
  $color_chart_gold_600: colors.$lw_gold600,
  $color_chart_gold_700: colors.$lw_gold700,
  $color_chart_gold_800: colors.$lw_gold800,

  // Butter
  $color_chart_butter_10: colors.$lw_butter10,
  $color_chart_butter_50: colors.$lw_butter50,
  $color_chart_butter_100: colors.$lw_butter100,
  $color_chart_butter_200: colors.$lw_butter200,
  $color_chart_butter_300: colors.$lw_butter300,
  $color_chart_butter_400: colors.$lw_butter400,
  $color_chart_butter_500: colors.$lw_butter500,
  $color_chart_butter_600: colors.$lw_butter600,
  $color_chart_butter_700: colors.$lw_butter700,
  $color_chart_butter_800: colors.$lw_butter800,

  // Berry
  $color_chart_berry_10: colors.$lw_berry10,
  $color_chart_berry_50: colors.$lw_berry50,
  $color_chart_berry_100: colors.$lw_berry100,
  $color_chart_berry_200: colors.$lw_berry200,
  $color_chart_berry_300: colors.$lw_berry300,
  $color_chart_berry_400: colors.$lw_berry400,
  $color_chart_berry_500: colors.$lw_berry500,
  $color_chart_berry_600: colors.$lw_berry600,
  $color_chart_berry_700: colors.$lw_berry700,
  $color_chart_berry_800: colors.$lw_berry800,

  // Tulip
  $color_chart_tulip_10: colors.$lw_tulip10,
  $color_chart_tulip_50: colors.$lw_tulip50,
  $color_chart_tulip_100: colors.$lw_tulip100,
  $color_chart_tulip_200: colors.$lw_tulip200,
  $color_chart_tulip_300: colors.$lw_tulip300,
  $color_chart_tulip_400: colors.$lw_tulip400,
  $color_chart_tulip_500: colors.$lw_tulip500,
  $color_chart_tulip_600: colors.$lw_tulip600,
  $color_chart_tulip_700: colors.$lw_tulip700,
  $color_chart_tulip_800: colors.$lw_tulip800,

  // Bluegrey
  $color_chart_bluegrey_10: colors.$lw_bluegrey10,
  $color_chart_bluegrey_50: colors.$lw_bluegrey50,
  $color_chart_bluegrey_100: colors.$lw_bluegrey100,
  $color_chart_bluegrey_200: colors.$lw_bluegrey200,
  $color_chart_bluegrey_300: colors.$lw_bluegrey300,
  $color_chart_bluegrey_400: colors.$lw_bluegrey400,
  $color_chart_bluegrey_500: colors.$lw_bluegrey500,
  $color_chart_bluegrey_600: colors.$lw_bluegrey600,
  $color_chart_bluegrey_700: colors.$lw_bluegrey700,
  $color_chart_bluegrey_800: colors.$lw_bluegrey800,

  // hover
  $color_chart_red_hover: colors.$lw_red_hover,
  $color_chart_grey_hover: colors.$lw_grey_hover,
  $color_chart_highlight_hover: colors.$lw_highlight_hover,
}
