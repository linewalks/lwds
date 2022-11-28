export const colorScaleOrdinal = (keyArr, colorArr) =>
  scaleOrdinal().domain(keyArr).range(colorArr)

export const translateAxis = (
  chartSvg,
  graphHeight,
  graphWidth,
  axisLocation,
) => {
  if (axisLocation === 'bottom' || axisLocation === 'top') {
    return chartSvg
      .select('.x-axis')
      .attr(
        'transform',
        `translate(${
          axisLocation === 'bottom' ? `0, ${graphHeight}` : `0, 0`
        })`,
      )
  }
  if (axisLocation === 'left' || axisLocation === 'right') {
    return chartSvg
      .select('.y-axis')
      .attr(
        'transform',
        `translate(${axisLocation === 'left' ? `0, 0` : `${graphWidth}, 0`})`,
      )
  }
}
