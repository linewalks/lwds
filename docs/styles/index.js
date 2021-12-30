const colors = require('./color/semantics')
const sizeSem = require('./size/semantics')
const spacing = require('./spacing/semantics')
const shadow = require('./shadow/semantics')

// lodash 사용시 불필요한 모듈도 export 되어 js 내에서 해결
const deleteDollar = (obj) => {
  let ret = {}

  Object.keys(obj).map((key) =>
    Object.assign(ret, { [key.substring(1)]: obj[`${key}`] }),
  )
  return ret
}

module.exports = {
  ...deleteDollar(colors),
  ...deleteDollar(sizeSem.size),
  ...deleteDollar(spacing),
  ...deleteDollar(shadow),
}
