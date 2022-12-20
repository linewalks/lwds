import React, { useEffect, useState, useRef, useMemo } from 'react'
import _ from 'lodash'
import * as d3 from 'd3'

import './BarPlot.scss'

import cls from '@helpers/class'
import clsx from 'clsx'

import Legend from './Legend'
import { translateAxis, colorScaleOrdinal } from '../common'
import { YUnit, XUnit } from './common.style'
import { useRect } from './useRect'

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
  type,
  margin,
  valueAxisLocation,
  nameAxisLocation,
  width,
  height,
  barColor,
  barWidth,
  barPaddingRatio,
  totalTicks,
  isAnimated,
  maxValue,
  hasTooltip,
  isScrollable,
  style,
  valueScaleType, // linear
  nameScaleType, // band, time
  zoom,
  options = {},
}) => {
  // const dataRef = useRef()
  // const [wrapperRef, setWrapperRef] = useState(null)
  const [tooltipData, setTooltipData] = useState({})
  const [chartTransform, setChartTransform] = useState(null)
  const [startTransform, setStartTransform] = useState(null)
  const wrapperRef = useRef()
  const AXIS_UNIT_WIDTH = 20

  const wrapperRefRect = useRect(wrapperRef)
  const { width: wrapperWidth, height: wrapperHeight } = wrapperRefRect

  const svgWidth = wrapperWidth - (options?.axisUnit.x ? AXIS_UNIT_WIDTH : 0) // Axis Label
  const svgHeight = wrapperHeight - (options?.axisUnit.y ? AXIS_UNIT_WIDTH : 0) // Axis Label

  const graphWidth = svgWidth - (margin.left + margin.right)
  const graphHeight = svgHeight - (margin.top + margin.bottom)

  const calculatedMaxValue =
    type === 'default'
      ? _.max(data.map((d) => Number(d.value)))
      : _.max(
          data.map((d) => _.max(d.value.map((valueD) => Number(valueD.value)))),
        )

  maxValue = calculatedMaxValue > maxValue ? calculatedMaxValue : maxValue
  // lower maxValue than calculatedMaxValue will be replaced by calculatedMaxValue

  const { groups, subGroups } = options

  // stack, group은 모두
  // name으로 이뤄진 group과 value의 name으로 이뤄진 subGroup이 주어져야 함
  if (type === 'stack' || type === 'group') {
    options.groups = !_.isEmpty(groups)
      ? options.groups
      : data.map((d) => d.name)
    options.subGroups = !_.isEmpty(subGroups)
      ? options.subGroups
      : data[0].value.map((d) => d.name)
  }

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

  // common but different variable name
  const nameScale = d3[`scale${_.upperFirst(nameScaleType)}`]()
    .domain(type === 'default' ? _.map(data, (d) => d.name) : groups)
    .range(
      _.isEmpty(chartTransform)
        ? isHorizontal
          ? [0, graphHeight]
          : [0, graphWidth]
        : (isHorizontal ? [0, graphHeight] : [0, graphWidth]).map((d) =>
            chartTransform[`apply${isHorizontal ? 'Y' : 'X'}`](d),
          ),
    )
    .padding(barPaddingRatio)

  // common
  const valueScale = d3[`scale${_.upperFirst(valueScaleType)}`]()
    .domain([0, maxValue])
    .range(isHorizontal ? [0, graphWidth] : [graphHeight, 0])
    .nice()

  // only stack
  const stackedData =
    type === 'stack' &&
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

  // getNameAxis
  const getNameAxis = (svgSelection) =>
    translateAxis(svgSelection, graphHeight, graphWidth, nameAxisLocation).call(
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

  useEffect(() => {
    if (wrapperWidth !== 0 && data) {
      // zoom 해결시 주석 해제
      //   dataRef.current = data

      const wrapperRefSelection = d3.select(wrapperRef.current)
      // wrapper
      wrapperRefSelection
        .select('.chart-locationer')
        // .attr('width', svgWidth)
        // .attr('height', svgHeight)
        .attr('transform', `translate(${margin.left},${margin.top})`)

      const chartSvg = wrapperRefSelection.select('.chart-svg')
      const tooltipDiv = wrapperRefSelection.select('.tooltip')
      const indicatorRect = chartSvg.select('.indicator')

      // differrent by chart types
      // bars
      const getColor =
        type !== 'default' && colorScaleOrdinal(subGroups, barColor)

      switch (type) {
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

      // common
      chartSvg.call(getNameAxis).call(getValueAxis)

      zoom &&
        chartSvg
          .call(
            zoomed.on('zoom', (e) => {
              chartSvg
                .selectAll('.bars rect')
                .attr(isHorizontal ? 'y' : 'x', (d) => nameScale(d.name))
                .attr(isHorizontal ? 'height' : 'width', nameScale.bandwidth())
              getNameAxis(chartSvg)
              indicatorRect.style('visibility', 'hidden')
              tooltipDiv.style('visibility', 'hidden')

              setChartTransform(() => e.transform)

              nameScale.range(
                (isHorizontal ? [0, graphHeight] : [0, graphWidth]).map((d) =>
                  e.transform[`apply${isHorizontal ? 'Y' : 'X'}`](d),
                ),
              )
            }),
          )
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
              .attr(
                isHorizontal ? 'height' : 'width',
                nameScale.bandwidth() * 1.5,
              )
              .attr(
                isHorizontal ? 'y' : 'x',
                nameScale(targetName) - nameScale.bandwidth() / 4,
              )
              .style('visibility', 'visible')

            // wrapperRefSelection.select('.tooltip').style('visibility', 'visible')
          })
          .on('mouseleave', (mouseEvent) => {
            indicatorRect.style('visibility', 'hidden')
            tooltipDiv.style('visibility', 'hidden')
          })
    }
  }, [data, wrapperRefRect])

  return (
    <>
      {options?.legend && <Legend legendOptions={options.legend} />}
      <div
        className={cls('barplot', 'wrapper')}
        style={{
          width: width + margin.left + margin.right,
          height: height + margin.top + margin.bottom,
          ...style,
          position: 'relative',
        }}
        ref={wrapperRef}
      >
        <div style={{ display: 'flex', width: '100%', height: 'max-content' }}>
          {options?.axisUnit.y && (
            <YUnit graphHeight={graphHeight}>{options?.axisUnit.y}</YUnit>
          )}
          <svg
            className={clsx(cls('barplot'), 'chart-svg')}
            width={svgWidth}
            height={svgHeight}
          >
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
              <g
                className="x-axis"
                clipPath={!isHorizontal ? `url(#${uid}--DynamicAxis)` : null}
              />
              <g
                className="y-axis"
                clipPath={isHorizontal ? `url(#${uid}--DynamicAxis)` : null}
              />
              <rect
                clipPath={`url(#${uid}--Bars)`}
                className="indicator"
                style={{ visibility: 'hidden', fill: 'grey', opacity: 0.4 }}
              />
              <g className="bars" clipPath={`url(#${uid}--Bars)`} />
              <g className="axis-label" />
            </g>
          </svg>
        </div>
        {options?.axisUnit.x && <XUnit>{options?.axisUnit.x}</XUnit>}
      </div>
      {options?.renderTooltip && (
        <div
          className="tooltip"
          style={{
            position: 'absolute',
          }}
        >
          {options.renderTooltip({ targetData: tooltipData })}
        </div>
      )}
    </>
  )
}

export default BarPlot

BarPlot.defaultProps = {
  data: [],
  type: 'default',
  isHorizontal: false,
  margin: {
    top: 15,
    bottom: 15,
    left: 15,
    right: 15,
  },
  valueAxisLocation: 'left',
  nameAxisLocation: 'bottom',
  width: '100%',
  height: '100%',
  barWidth: 20,
  barPaddingRatio: 0.35,
  totalTicks: 6,
  isAnimated: false,
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
  zoom: false,
}
