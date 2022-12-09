import React, { useEffect } from 'react'
import _ from 'lodash'
import * as d3 from 'd3'
import styled from 'styled-components'

import Legend from './Legend'

interface Data {
  key: string
  value: number
}

interface PieStyleObj {
  width?: number
  height?: number
  margin?: number
  radius?: number
  innerRadius?: number
  hoverStorkeWidth?: number
  hoverStrokeColor?: number
}

interface DurationObj {
  init?: number
  hover?: number
}

interface TooltipObj {
  x?: number
  y?: number
}

interface PieChartProps {
  data?: Data[]
  colors?: string[]
  style?: PieStyleObj
  duration?: DurationObj
  tooltip?: TooltipObj
  id?: string
}

const PieChart = ({
  // props 논의 필요. 임의 지정.
  data,
  colors,
  style,
  duration,
  tooltip,
  id = _.uniqueId('pie_chart'),
}: PieChartProps) => {
  const colorSizeDiff = _.size(data) - _.size(colors)
  if (colorSizeDiff !== 0) {
    _.forEach(_.range(colorSizeDiff + 1), () =>
      colors.push(`#${Math.round(Math.random() * 0xffffff).toString(16)}`),
    )
  }

  useEffect(() => {
    // selector
    const chartBox = d3.select(`#${id}`)
    const svg = chartBox.select('.svg')
    const tooltipBox = chartBox.select('.tooltip-box')
    const tooltipSircle = chartBox.select('.tooltip-sircle')
    const tooltipTextBox = chartBox.select('.tooltip-text-box')

    // default value
    const SVG_WIDTH = svg.node().getBoundingClientRect().width - 16
    const SVG_HEIGHT = svg.node().getBoundingClientRect().height
    const MARGIN = 8
    const INIT_DURATION_MS = 600
    const HOVER_DURATION_MS = 300
    const TOOLTIP_DISTANCE_X = 30
    const TOOLTIP_DISTANCE_Y = 0
    const HOVER_STROKE_WIDTH = 1.5
    const HOVER_STROKE_COLOR = '#24292d'

    const {
      width: svgWidth = SVG_WIDTH,
      height: svgHeight = SVG_HEIGHT,
      margin = MARGIN,
      radius = Math.min(svgWidth, svgHeight) / 2 - margin,
      innerRadius = radius / 2,
      hoverStorkeWidth = HOVER_STROKE_WIDTH,
      hoverStrokeColor = HOVER_STROKE_COLOR,
    } = style || {}

    const {
      init: initDuration = INIT_DURATION_MS,
      hover: hoverDuration = HOVER_DURATION_MS,
    } = duration || {}

    const {
      x: tooltipDistanceX = TOOLTIP_DISTANCE_X,
      y: tooltipDistanceY = TOOLTIP_DISTANCE_Y,
    } = tooltip || {}

    // event fucntion
    const mouseover = (e, { data, index }) => {
      d3.select(e.target)
        .transition()
        .duration(hoverDuration)
        .attr('stroke-width', hoverStorkeWidth)
        .style('stroke', hoverStrokeColor)

      tooltipBox.style('visibility', 'visible')
      tooltipSircle.style('background-color', colors[index])
      tooltipTextBox
        .append('div')
        .style('margin-right', '0.5rem')
        .text(`${data.key} :`)
      tooltipTextBox.append('div').text(`${data.value}`)
    }

    const mousemove = (e) => {
      tooltipBox
        .style('left', `${e.pageX + tooltipDistanceX}px`)
        .style('top', `${e.pageY + tooltipDistanceY}px`)
    }

    const mouseleave = ({ target }) => {
      d3.select(target).transition().duration(300).attr('stroke-width', 0)
      tooltipBox.style('visibility', 'hidden')
      tooltipTextBox.selectAll('*').remove()
    }
  }, [JSON.stringify(data)])

  return (
    <WrapChartBox id={id}>
      <WrapSvg className="svg" />
      <Legend data={data} colors={colors} />
      <WrapTooltip className="tooltip-box">
        <WrapSircle className="tooltip-sircle" />
        <WrapTextBox className="tooltip-text-box" />
      </WrapTooltip>
    </WrapChartBox>
  )
}

const WrapChartBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const WrapSvg = styled.svg`
  width: 100%;
  height: 100%;
`

const WrapTooltip = styled.div`
  visibility: hidden;
  display: flex;
  align-items: center;
  position: absolute;
  min-width: 5rem;
  width: max-content;
  padding: 12px;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 3px 24px 0 rgba(36, 41, 45, 0.24);
  border-radius: 0.3rem;
  opacity: 1;
`

const WrapSircle = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  margin-right: 8px;
  border-radius: 50%;
`

const WrapTextBox = styled.div`
  display: flex;
  width: 100%;
  font-size: 1rem;
`

export default PieChart
