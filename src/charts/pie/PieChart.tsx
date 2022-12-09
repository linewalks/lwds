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
