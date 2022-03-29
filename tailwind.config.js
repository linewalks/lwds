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
    borderWidth: {
      ...defaultStyle.borderWidth,
    },
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
    fill: colors,
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
