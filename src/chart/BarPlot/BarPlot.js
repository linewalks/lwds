import React, { useEffect, useState, useRef, useMemo } from 'react'
import _ from 'lodash'
import * as d3 from 'd3'
import { translateAxis, colorScaleOrdinal } from '../common'
import {
  renderDefaultBars,
  renderGroupBars,
  renderStackBars,
} from './renderBar'

// customizing 가능하도록 style, ref 등 뚫어주기

// .tickFormat() 있으면 받기

const BarPlot = ({
  data,
  isHorizontal,
  shape,
  type,
  scroll,
  zoom,
  margin,
  valueAxisLocation,
  nameAxisLocation,
  width,
  height,
  barColor,
  barWidth,
  outerPaddingRatio,
  barPaddingRatio,
  totalTicks,
  isAnimated,
  maxValue,
  hasLabel,
  hasTooltip,
  style,
  valueScaleType, // linear
  nameScaleType, // band, time
  options = {},
}) => {
  const dataRef = useRef()
  const [wrapperRef, setWrapperRef] = useState(null)
  const [tooltipData, setTooltipData] = useState({})
  const [chartTransform, setChartTransform] = useState(null)
  const [startTransform, setStartTransform] = useState(null)

  const calculatedMaxValue =
    shape === 'default'
      ? _.max(data.map((d) => Number(d.value)))
      : _.max(
          data.map((d) => _.max(d.value.map((valueD) => Number(valueD.value)))),
        )

  maxValue = calculatedMaxValue > maxValue ? calculatedMaxValue : maxValue
  // lower maxValue than calculatedMaxValue will be replaced by calculatedMaxValue

  const { groups, subGroups } = options

  // stack, group은 모두
  // name으로 이뤄진 group과 value의 name으로 이뤄진 subGroup이 주어져야 함
  if (shape === 'stack' || shape === 'group') {
    options.groups = !_.isEmpty(groups)
      ? options.groups
      : data.map((d) => d.name)
    options.subGroups = !_.isEmpty(subGroups)
      ? options.subGroups
      : data[0].value.map((d) => d.name)
  }

  const svgWidth = width
  const svgHeight = height

  const graphWidth = svgWidth - (margin.left + margin.right)
  const graphHeight = svgHeight - (margin.top + margin.bottom)

  const chartSvg = d3.select(wrapperRef).select('.chart-svg')
  const tooltipDiv = d3.select(wrapperRef).select('.tooltip')
  const indicatorRect = chartSvg.select('.indicator')

  const wrapperRefFunc = (ref) => setWrapperRef(ref)

  const zoomed = d3
    .zoom()
    .extent([
      [0, 0],
      [graphWidth, graphHeight],
    ])
    .translateExtent([
      [0, 0],
      [graphWidth, graphHeight],
    ])
    .scaleExtent([1, 30])

  // common
  const uid = useMemo(
    () =>
      Date.now().toString(36) +
      Math.floor(
        Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12),
      ).toString(36),
    [],
  )

  const nameScale = d3[`scale${_.upperFirst(nameScaleType)}`]()

  // common
  const valueScale = d3[`scale${_.upperFirst(valueScaleType)}`]()
    .domain([0, maxValue])
    .range(isHorizontal ? [0, graphWidth] : [graphHeight, 0])
    .nice()

  // only stack
  const stackedData =
    shape === 'stack' &&
    d3.stack().keys(subGroups)(
      _.map(data, (d) =>
        _.reduce(
          d.value,
          (acc, cur) => {
            acc[cur.name] = cur.value
            return acc
          },
          { group: d.name },
        ),
      ),
    )

  // only group
  const subGroupScale =
    !_.isEmpty(subGroups) &&
    d3
      .scaleBand() // 어떻게하지 ??
      .domain(subGroups)
      .range(
        isHorizontal ? [nameScale.bandwidth(), 0] : [0, nameScale.bandwidth()],
      )

  // wrapper
  d3.select(wrapperRef)
    .select('.chart-locationer')
    .attr('transform', `translate(${margin.left},${margin.top})`)

  // style
  chartSvg
    .select(`.${isHorizontal ? 'x' : 'y'}-axis`)
    .select('.domain')
    .attr('stroke', 'transparent')

  // common but different variable name
  nameScale
    .domain(shape === 'default' ? _.map(data, (d) => d.name) : groups)
    .range(
      _.isEmpty(chartTransform)
        ? isHorizontal
          ? [0, graphHeight]
          : [0, graphWidth]
        : (isHorizontal ? [0, graphHeight] : [0, graphWidth]).map((d) =>
            chartTransform[`apply${isHorizontal ? 'Y' : 'X'}`](d),
          ),
    )
    .paddingOuter(outerPaddingRatio)
    .paddingInner(barPaddingRatio)

  useEffect(() => {
    if (wrapperRef && data && !_.isEqual(data, dataRef.current)) {
      dataRef.current = data

      // getNameAxis
      const getNameAxis = (svgSelection) =>
        translateAxis(
          svgSelection,
          graphHeight,
          graphWidth,
          nameAxisLocation,
        ).call(
          d3[`axis${_.upperFirst(nameAxisLocation)}`](nameScale).tickSize(0),
        )

      // getValueAxis
      const getValueAxis = (svgSelection) =>
        translateAxis(
          svgSelection,
          graphHeight,
          graphWidth,
          valueAxisLocation,
        ).call(
          d3[`axis${_.upperFirst(valueAxisLocation)}`](valueScale)
            .ticks(totalTicks)
            .tickSize(isHorizontal ? -graphHeight : -graphWidth),
        )

      // differrent by chart types
      // bars
      const getColor =
        shape !== 'default' && colorScaleOrdinal(subGroups, barColor)

      switch (shape) {
        case 'default':
          renderDefaultBars({
            chartSvg,
            data,
            isHorizontal,
            nameScale,
            valueScale,
            graphHeight,
            barColor,
          })
        case 'group':
          typeof subGroupScale === 'function' &&
            renderGroupBars({
              chartSvg,
              data,
              isHorizontal,
              nameScale,
              valueScale,
              subGroupScale,
              getColor,
              graphHeight,
              barColor,
            })
        case 'stack':
          renderStackBars({
            chartSvg,
            data,
            stackedData,
            isHorizontal,
            nameScale,
            valueScale,
            getColor,
            barColor,
          })
        default:
          null
      }

      chartSvg
        .select('.indicator')
        .attr(
          isHorizontal ? 'width' : 'height',
          isHorizontal ? graphWidth : graphHeight,
        )

      const renderZoomedBars = (shape, selectBars) => {
        switch (shape) {
          case 'default':
            return selectBars
              .selectAll('rect')
              .attr(isHorizontal ? 'y' : 'x', (d) => nameScale(d.name))
              .attr(isHorizontal ? 'height' : 'width', nameScale.bandwidth())

          case 'group':
            return selectBars
              .selectAll('g')
              .attr('transform', (d) => {
                return `translate(${
                  isHorizontal
                    ? `0, ${nameScale(d.name)}`
                    : `${nameScale(d.name)}, 0`
                })`
              })
              .selectAll('rect')
              .attr(isHorizontal ? 'y' : 'x', (d) => {
                return subGroupScale(d.name)
              })
              .attr(
                isHorizontal ? 'height' : 'width',
                subGroupScale.bandwidth(),
              )

          case 'stack':
            return selectBars
              .selectAll('rect')
              .attr(isHorizontal ? 'y' : 'x', (d) => nameScale(d.data.group))
              .attr(isHorizontal ? 'height' : 'width', nameScale.bandwidth())

          default:
            null
        }
      }

      const actZoom = (e) => {
        renderZoomedBars(shape, chartSvg.select('.bars'))

        getNameAxis(chartSvg)
        indicatorRect.style('visibility', 'hidden')
        tooltipDiv.style('visibility', 'hidden')

        setChartTransform(() => e.transform)

        nameScale.range(
          (isHorizontal ? [0, graphHeight] : [0, graphWidth]).map((d) =>
            e.transform[`apply${isHorizontal ? 'Y' : 'X'}`](d),
          ),
        )

        shape === 'group' &&
          subGroupScale.range(
            isHorizontal
              ? [nameScale.bandwidth(), 0]
              : [0, nameScale.bandwidth()],
          )
      }

      // common
      chartSvg
        .call(getNameAxis)
        .call(getValueAxis)
        .call(zoom ? zoomed.on('zoom', actZoom) : () => {})
        .on('mouseclick', (mouseEvent) => {
          // indicatorRect.style('visibility', 'hidden')
        })
        .on('mouseenter', () => {
          tooltipDiv.style('display', 'block')
        })
        .on('mousemove', (mouseEvent) => {
          const [mouseX, mouseY] = d3.pointer(mouseEvent)
          // scaleband invert 추가
          if (nameScaleType === 'band') {
            nameScale.invert = (() => {
              const domain = nameScale.domain()
              const range = nameScale.range()
              const scale = d3.scaleQuantize().domain(range).range(domain)
              return (mouseLocationValue) => scale(mouseLocationValue)
            })()
          }

          const namePoint =
            (isHorizontal ? mouseY : mouseX) -
            (isHorizontal ? margin.top : margin.left)
          const targetName = nameScale.invert(namePoint)

          //tooltip data
          const selectedData = _.find(data, (d) => d.name === targetName)
          setTooltipData(selectedData)

          const defaultTooltipLocation =
            nameScale(targetName) + (isHorizontal ? margin.top : margin.left)

          // tooltip
          tooltipDiv
            .style('visibility', 'visible')
            .style(
              // dynamic
              isHorizontal ? 'top' : 'left',
              `${defaultTooltipLocation}px`,
            )
            .style(
              // static
              isHorizontal ? 'right' : 'top',
              `${isHorizontal ? margin.right : margin.top}px`,
            )

          // indicator
          indicatorRect
            .attr(isHorizontal ? 'height' : 'width', nameScale.step())
            .attr(
              isHorizontal ? 'y' : 'x',
              nameScale(targetName) - nameScale.step() * (barPaddingRatio / 2),
            )
            .style('visibility', 'visible')

          // d3.select(wrapperRef).select('.tooltip').style('visibility', 'visible')
        })
        .on('mouseleave', (mouseEvent) => {
          indicatorRect.style('visibility', 'hidden')
          tooltipDiv.style('visibility', 'hidden')
        })
    }
    // unmount
    return () => {}
  })

  return (
    <div
      className="wrapper"
      style={{
        width,
        height,
        ...style,
        position: 'relative',
      }}
      ref={wrapperRefFunc}
    >
      {/* chartLabel */}
      {/* top, bottom, left, right */}
      {hasLabel && <div className="chart-label">labels</div>}
      <svg className="chart-svg">
        <g className="chart-locationer">
          <clipPath id={`${uid}--Bars`}>
            <rect x={0} y={0} width={graphWidth} height={graphHeight} />
          </clipPath>
          <clipPath id={`${uid}--DynamicAxis`}>
            <rect // horizontal ? y-axis : x-axis
              x={isHorizontal ? -margin.left + 1 : 0}
              y={0}
              width={isHorizontal ? margin.left : graphWidth}
              height={isHorizontal ? graphHeight : 30}
            />
          </clipPath>
          {!scroll?.x && (
            <g
              className="x-axis"
              clipPath={!isHorizontal ? `url(#${uid}--DynamicAxis)` : null}
            />
          )}
          {!scroll?.y && (
            <g
              className="y-axis"
              clipPath={isHorizontal ? `url(#${uid}--DynamicAxis)` : null}
            />
          )}
          <g className="axis-label" />
          <rect
            clipPath={`url(#${uid}--Bars)`}
            className="indicator"
            style={{ visibility: 'hidden', fill: 'grey', opacity: 0.4 }}
          />
          <g className="bars" clipPath={`url(#${uid}--Bars)`} />
        </g>
      </svg>
      <svg className="seperate-axis">
        {scroll?.x && (
          <g
            className="x-axis"
            clipPath={!isHorizontal ? `url(#${uid}--DynamicAxis)` : null}
          />
        )}
        {scroll?.y && (
          <g
            className="y-axis"
            clipPath={isHorizontal ? `url(#${uid}--DynamicAxis)` : null}
          />
        )}
      </svg>
      {hasTooltip && (
        <div
          className="tooltip"
          style={{
            display: 'none',
            position: 'absolute',
          }}
        >
          {options?.renderTooltip({
            barColor,
            targetData: tooltipData,
          })}
          {/* {JSON.stringify(tooltipData)} */}
        </div>
      )}
    </div>
  )
}

export default BarPlot

BarPlot.defaultProps = {
  data: [],
  shape: 'default',
  isHorizontal: false,
  type: 'default',
  margin: {
    top: 15,
    bottom: 15,
    left: 15,
    right: 15,
  },
  valueAxisLocation: 'left',
  nameAxisLocation: 'bottom',
  width: 300,
  height: 300,
  barWidth: 20,
  barPaddingRatio: 0.35,
  totalTicks: 6,
  isAnimated: false,
  hasLabel: false,
  hasTooltip: false,
  style: {},
  maxValue: 0,
  barColor: 'skyblue',
  valueScaleType: 'linear',
  nameScaleType: 'band',
  options: {
    groups: [],
    subGroups: [],
  },
}
