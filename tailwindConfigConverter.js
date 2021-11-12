const _ = require('lodash')
const semantics = require('./src/assets/styles/color/semantics')
const spacing = require('./src/assets/styles/spacing')
const size = require('./src/assets/styles/spacing')
const boxShadow = require('./src/assets/styles/shadow')


const deleteDollars = (obj) =>  _.mapKeys(obj, (_, key) => key.substring(1))

module.exports = {
  colors: deleteDollars(semantics),
  size: deleteDollars(size),
  spacing,
  boxShadow
}