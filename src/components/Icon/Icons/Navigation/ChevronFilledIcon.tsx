import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  direction?: string | 'right' | 'down' | 'left' | 'up'
  rotate?: number
}

const ChevronFilledIcon = (props: IconProps) => {
  const { viewBox, direction, rotate } = props

  const dirAngle = {
    right: 0,
    down: 90,
    left: 180,
    up: -90,
  }[direction]

  return (
    <SVGIcon {...props}>
      <path
        d="m9.697 5.293.001.002 5.289 5.297.004-.003L16.397 12l-.003.003.002.003-1.406 1.408-.003-.002-5.288 5.297a.994.994 0 0 1-1.312.084l-.093-.082-.002-.002A.994.994 0 0 1 8.001 18H8V6a.994.994 0 0 1 1.697-.707z"
        transform={svgRotate((dirAngle ?? 0) + rotate, viewBox)}
      />
    </SVGIcon>
  )
}

ChevronFilledIcon.defaultProps = {
  viewBox: '0 0 24 24',
  direction: 'right',
  rotate: 0,
}

export default ChevronFilledIcon
