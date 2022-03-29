// lwds/styles 구성 modules (docs 상에서는 ECMAScript 사용)
import colors from './color/semantics'
import colorsTheme from './color/colors'
import sizeSem from './size/semantics'
import spacing from './spacing/semantics'
import shadow from './shadow/semantics'

// lodash 사용시 불필요한 모듈도 export 되어 js 내에서 해결
const deleteDollar = (obj) => {
  let ret = {}

  Object.keys(obj).map((key) =>
    Object.assign(ret, { [key.substring(1)]: obj[`${key}`] }),
  )
  return ret
}

export default {
  ...deleteDollar(colors),
  ...deleteDollar(colorsTheme),
  ...deleteDollar(sizeSem.size),
  ...deleteDollar(spacing),
  ...deleteDollar(shadow),
}
