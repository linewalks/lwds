const _ = require('lodash')
const colorSem = require('./src/assets/styles/color/semantics')
const sizeSem = require('./src/assets/styles/size/semantics')
const spacingSem = require('./src/assets/styles/spacing/semantics')
const boxShadowSem = require('./src/assets/styles/shadow/semantics')

const deleteDollars = (obj) => _.mapKeys(obj, (_, key) => key.substring(1))

module.exports = {
  colors: deleteDollars(colorSem),
  size: deleteDollars({ ...sizeSem.size, ...sizeSem.button, ...sizeSem.icon }),
  spacing: deleteDollars(spacingSem),
  boxShadow: deleteDollars(boxShadowSem),
}
