//tailwind.config.js 설정을 위해 CommonJS 방식 사용
const size = require('./size')
const btnFieldSize = require('./btnFieldSize')
const iconSize = require('./iconSize')

module.exports = {
  size: {
    // px
    $size_0: size.p0,
    $size_04: size.p04,
    $size_08: size.p08,
    $size_10: size.p10,
    $size_12: size.p12,
    $size_16: size.p16,
    $size_20: size.p20,
    $size_24: size.p24,
    $size_28: size.p28,
    $size_32: size.p32,
    $size_36: size.p36,
    $size_40: size.p40,
    $size_44: size.p44,
    $size_48: size.p48,
    // rem
    $size_r0: size.r0,
    $size_r04: size.r04,
    $size_r08: size.r08,
    $size_r10: size.r10,
    $size_r12: size.r12,
    $size_r16: size.r16,
    $size_r20: size.r20,
    $size_r24: size.r24,
    $size_r28: size.r28,
    $size_r32: size.r32,
    $size_r36: size.r36,
    $size_r40: size.r40,
    $size_r44: size.r44,
    $size_r48: size.r48,
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
