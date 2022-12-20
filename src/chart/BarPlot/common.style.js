import styled, { css } from 'styled-components'
import styles from '@assets/styles'

export const Labels = styled.div``

export const Label = styled.span`
  &::before {
    display: inline-block;
    content: '';
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${({ color }) => color};
    margin-right: ${styles.spacing_03};
  }
  & + & {
    margin-left: ${styles.spacing_08};
  }
`

export const LabelText = styled.span.attrs({
  className: 'body_02_m',
})`
  color: ${styles.color_text_02};
`

export const AxisUnitText = styled.div.attrs({
  className: 'body_02_m',
})`
  color: ${styles.color_text_04};
`

// export const svgCommonStyle = css`
//   .tick > line {
//     stroke: #dcdfe5;
//   }
//   .domain {
//     stroke: transparent;
//   }
//   .tick > text {
//     font-size: 14px;
//     fill: ${styles.color_text_05};
//   }
// `

export const wrapBarChartCommonStyle = css`
  width: 100%;
  position: relative;
  margin-top: ${styles.spacing_08};
  .domain {
    stroke: transparent;
  }
`

export const rotatedAxisUnitStyle = css`
  position: absolute;
  transform-origin: 0 50%;
  transform: rotate(-90deg) translate(-50%, 50%);
  white-space: nowrap;
`

export const YUnit = styled(AxisUnitText)`
  ${rotatedAxisUnitStyle};
  height: ${({ graphHeight }) => graphHeight}px;
`

export const XUnit = styled(AxisUnitText)`
  color: ${styles.color_text_04};
  text-align: center;
  margin-left: 20px;
`
