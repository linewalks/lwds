import _ from 'lodash'

const svgRotate = (angle: number, viewBox: string): string => {
  const viewBoxArr = _.map(viewBox.split(' '), _.toNumber)

  const viewBoxWidth = _.isUndefined(viewBoxArr[2]) ? 0 : viewBoxArr[2]
  const viewBoxHeight = _.isUndefined(viewBoxArr[3]) ? 0 : viewBoxArr[3]

  return `rotate(${angle}, ${viewBoxWidth / 2}, ${viewBoxHeight / 2})`
}

export default svgRotate
