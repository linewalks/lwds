import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  direction?: string
  rotate?: number
}

const ArrowIcon = (props: IconProps) => {
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
        d="m13.203 4.21.094.083L21.004 12l-7.707 7.707a1 1 0 0 1-1.497-1.32l.083-.094 5.294-5.295-13.178-.003a.998.998 0 0 1-.12-1.988L3.997 11h.001l13.183.004-5.297-5.297a1 1 0 0 1-.083-1.32l.083-.094a1 1 0 0 1 1.32-.083z"
        transform={svgRotate((dirAngle ?? 0) + rotate, viewBox)}
      />
    </SVGIcon>
  )
}

ArrowIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default ArrowIcon
