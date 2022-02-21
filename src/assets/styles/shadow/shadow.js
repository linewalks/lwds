// tailwindCSS 에서 사용하기 위한 용도
const colors = require('../color/colors')

// tailwind.config.js 설정을 위해 CommonJS 방식 사용
module.exports = {
  $shadow_v1: `0 0 4px 0 ${colors.$lw_shadow_01}`,
  $shadow_v2: `0 1px 8px 0 ${colors.$lw_shadow_01}`,
  $shadow_v3: `0 2px 14px 0 ${colors.$lw_shadow_02}`,
  $shadow_v4: `0 3px 24px 0 ${colors.$lw_shadow_02}`,

  // hover, active, dimmed는 기존 background 위에 덮어씌워야 하기 때문에 inset shadow로 설정
  $shadow_hover: `inset 5rem 5rem ${colors.$lw_hover_overlay}`,
  $shadow_active: `inset 5rem 5rem ${colors.$lw_active_overlay}`,
  $shadow_dimmed: `inset 5rem 5rem ${colors.$lw_dimmed_overlay}`,

  $shadow_focus: ` 0 0 0 1px ${colors.$lw_white}, 0 0 0 2.5px ${colors.$lw_blue70}`,
}
