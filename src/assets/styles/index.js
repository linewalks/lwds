const colors = require('./color/semantics')
const sizeSem = require('./size/semantics')
const spacing = require('./spacing/semantics')
const shadow = require('./shadow/semantics')

module.exports = {
  ...colors,
  ...sizeSem.size,
  ...spacing,
  ...shadow,
}
