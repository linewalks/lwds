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
      primary: theme('colors.primary_element'),
      danger: theme('colors.danger'),
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
