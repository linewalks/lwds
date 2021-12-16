const {
  colors,
  spacing,
  size,
  boxShadow,
} = require('./tailwindConfigConverter.js')

// Custom Style 로 인해 Tailwind default 스타일이 강제로 덮어씌워지는 문제 해결
const defaultStyle = require('./src/assets/styles/defaultStyle')

module.exports = {
  purge: {},
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      ...colors,
    },
    spacing: {
      ...spacing,
      ...size,
    },
    minWidth: {
      ...size,
      ...defaultStyle.minWidth,
    },
    boxShadow,
    fill: (theme) => ({
      background: theme('colors.background'),
      primary: theme('colors.primary_element'),
      danger: theme('colors.danger'),
      icon01: theme('colors.icon01'),
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
