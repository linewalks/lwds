// eslint-disable-next-line import/no-webpack-loader-syntax
import variables from '!!sass-variables-loader!../assets/styles/variables.scss'

const getCls = (...args: string[]): string => {  
  return [variables.prefix, ...args].join('-')
}

export default getCls
