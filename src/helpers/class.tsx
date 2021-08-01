import variables from 'assets/styles/_export.module.scss'

const getCls = (name: string): string => {
  return `${variables.prefix}-${name}`
}

export default getCls
