const semantics = require('../color/semantics')

//tailwind.config.js 설정을 위해 CommonJS 방식 사용
module.exports = {
  DEFAULT: '0 8px 40px 0 rgba(109, 120, 132, 0.2)',
  $shadow_01: '0 8px 40px 0 rgba(109, 120, 132, 0.2)',
  $shadow_02: '0 3px 22px 0 rgba(109, 120, 132, 0.24)',
  $shadow_03: '0 2px 18px 0 rgba(109, 120, 132, 0.28)',
  $shadow_04: '0 1px 8px 0 rgba(109, 120, 132, 0.36)',
  $shadow_05: '0 1px 4px 0 rgba(109, 120, 132, 0.48)',
  $shadow_06: '0 0 3px 0 rgba(109, 120, 132, 0.6)',
  hover: `inset 5rem 5rem ${semantics.$hover_primary}`, // hover, active, dimmed는 기존 background 위에 덮어씌워야 하기 때문에 inset shadow로 설정
  active: `inset 5rem 5rem ${semantics.$active_primary}`,
  dimmed: `inset 5rem 5rem ${semantics.$dimmed_overlay}`,
}
