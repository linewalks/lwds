export const renderDefaultBars = ({
  chartSvg,
  data,
  isHorizontal,
  nameScale,
  valueScale,
  graphHeight,
  barColor,
}) =>
  chartSvg
    .select('.bars')
    .selectAll('rect') //default ? rect : g
    .data(data)
    .join('rect') //default ? rect : g
    .attr('fill', (d) => d.color || barColor) // gradient?
    .attr(
      'x',
      (
        d, // value animation?
      ) => (isHorizontal ? 0 : nameScale(d.name)),
    )
    .attr(
      'y',
      (
        d, //value animation?
      ) => (isHorizontal ? nameScale(d.name) : valueScale(d.value)),
    )
    .attr('width', (d) =>
      isHorizontal ? valueScale(d.value) : nameScale.bandwidth(),
    ) //
    .attr('height', (d) =>
      isHorizontal ? nameScale.bandwidth() : graphHeight - valueScale(d.value),
    )

export const renderGroupBars = ({
  chartSvg,
  data,
  isHorizontal,
  nameScale,
  subGroupScale,
  valueScale,
  getColor,
  graphHeight,
}) =>
  chartSvg
    .select('.bars')
    .selectAll('g.barGroup')
    .data(data)
    .join('g')
    .attr('className', 'barGroup')
    .attr(
      'transform',
      (d) =>
        `translate(${
          isHorizontal ? `0, ${nameScale(d.name)}` : `${nameScale(d.name)}, 0`
        })`,
    )
    .selectAll('rect') //default ? rect : g
    .data((d) => d.value) // in values (subgroup)
    .join('rect') //default ? rect : g
    .attr('fill', (valueD) => getColor(valueD.name)) // d === value
    .attr(
      'x',
      (
        valueD, // value animation?
      ) => (isHorizontal ? 0 : subGroupScale(valueD.name)),
    )
    .attr(
      'y',
      (
        valueD, //value animation?
      ) =>
        isHorizontal ? subGroupScale(valueD.name) : valueScale(valueD.value),
    )
    .attr('width', (valueD) =>
      isHorizontal ? valueScale(valueD.value) : subGroupScale.bandwidth(),
    ) //
    .attr('height', (valueD) =>
      isHorizontal
        ? subGroupScale.bandwidth()
        : graphHeight - valueScale(valueD.value),
    )

export const renderStackBars = ({
  chartSvg,
  data,
  stackedData,
  isHorizontal,
  nameScale,
  valueScale,
  getColor,
}) =>
  chartSvg
    .select('.bars')
    .selectAll('g.barGroup')
    .data(stackedData)
    .join('g')
    .attr('className', 'sameColorBarGroup')
    .attr('fill', (stackedD) => getColor(stackedD.key))
    .selectAll('rect')
    .data((d) => d)
    .join('rect')
    .attr(
      'x',
      (
        stackedValueD, // value animation?
      ) =>
        isHorizontal
          ? valueScale(stackedValueD[0])
          : nameScale(stackedValueD.data.group),
    )
    .attr(
      'y',
      (
        stackedValueD, //value animation?
      ) =>
        isHorizontal
          ? nameScale(stackedValueD.data.group)
          : valueScale(stackedValueD[1]),
    )
    .attr('width', (stackedValueD) =>
      isHorizontal
        ? valueScale(stackedValueD[1]) - valueScale(stackedValueD[0])
        : nameScale.bandwidth(),
    )
    .attr('height', (stackedValueD) =>
      isHorizontal
        ? nameScale.bandwidth()
        : valueScale(stackedValueD[0]) - valueScale(stackedValueD[1]),
    ) //
