const { colors, spacing, size, boxShadow } = require('./tailwindConfigConverter.js')

module.exports = {
  purge: {},
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors,
    spacing,
    size,
    boxShadow,
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
