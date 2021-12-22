//tailwind.config.js 설정을 위해 CommonJS 방식 사용
const size = require('./size')
const btnFieldSize = require('./btnFieldSize')
const iconSize = require('./iconSize')

module.exports = {
  size: {
    // px
    $size_0: size.p0,
    $size_01: size.p01,
    $size_02: size.p02,
    $size_03: size.p03,
    $size_04: size.p04,
    $size_05: size.p05,
    $size_06: size.p06,
    $size_07: size.p07,
    $size_08: size.p08,
    $size_09: size.p09,
    $size_10: size.p10,
    $size_11: size.p11,
    $size_12: size.p12,
    $size_13: size.p13,
    // rem
    $size_r01: size.r01,
    $size_r02: size.r02,
    $size_r03: size.r03,
    $size_r04: size.r04,
    $size_r05: size.r05,
    $size_r06: size.r06,
    $size_r07: size.r07,
    $size_r08: size.r08,
    $size_r09: size.r09,
    $size_r10: size.r10,
    $size_r11: size.r11,
    $size_r12: size.r12,
    $size_r13: size.r13,
  },
  button: {
    $sm: btnFieldSize.sm,
    $md: btnFieldSize.md,
    $lg: btnFieldSize.lg,
    $xl: btnFieldSize.xl,
    $sm_r: btnFieldSize.sm_r,
    $md_r: btnFieldSize.md_r,
    $lg_r: btnFieldSize.lg_r,
    $xl_r: btnFieldSize.xl_r,
  },
  icon: {
    $icon_xs: iconSize.xs,
    $icon_sm: iconSize.sm,
    $icon_md: iconSize.md,
    $icon_lg: iconSize.lg,
    $icon_xl: iconSize.xl,
    $icon_xs_r: iconSize.xs_r,
    $icon_sm_r: iconSize.sm_r,
    $icon_md_r: iconSize.md_r,
    $icon_lg_r: iconSize.lg_r,
    $icon_xl_r: iconSize.xl_r,
  },
}
