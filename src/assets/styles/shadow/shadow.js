const colors = require('../color/colors')

//tailwind.config.js 설정을 위해 CommonJS 방식 사용
module.exports = {
  $shadow_v1: `0 0 4px 0 ${colors.lw_shadow_01}`,
  $shadow_v2: `0 1px 8px 0 ${colors.lw_shadow_01}`,
  $shadow_v3: `0 2px 14px 0 ${colors.lw_shadow_02}`,
  $shadow_v4: `0 3px 24px 0 ${colors.lw_shadow_02}`,
}
