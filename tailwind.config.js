const { colors, spacing, size, boxShadow } = require('./tailwindConfigConverter.js')

module.exports = {
  purge: {},
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      ...colors
    },
    spacing,
    size,
    boxShadow,
    fill: theme => ({
      background: theme('colors.background'),
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
