// eslint-disable-next-line import/no-webpack-loader-syntax
import variables from '!!sass-variable-loader!../assets/styles/variables.scss'

const getCls = (name: string): string => {
  console.log(variables)
  return `${variables.prefix}-${name}`
}

export default getCls
