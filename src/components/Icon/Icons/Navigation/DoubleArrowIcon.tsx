import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  direction?: string | 'right' | 'down' | 'left' | 'up'
  rotate?: number
}

const DoubleArrowIcon = (props: IconProps) => {
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
        d="m5.603 4.21.095.084 6.289 6.298.004-.003L13.397 12l-.003.003.002.003-1.406 1.408-.003-.002-6.288 6.297a.994.994 0 0 1-1.312.084l-.095-.084a.997.997 0 0 1 0-1.408l6.288-6.298-6.289-6.299a.997.997 0 0 1 0-1.409.994.994 0 0 1 1.312-.083zm7 0 .095.084 6.289 6.298.004-.003L20.397 12l-.003.003.002.003-1.406 1.408-.003-.002-6.288 6.297a.994.994 0 0 1-1.312.084l-.095-.084a.997.997 0 0 1 0-1.408l6.288-6.298-6.289-6.299a.997.997 0 0 1 0-1.409.994.994 0 0 1 1.312-.083z"
        transform={svgRotate((dirAngle ?? 0) + rotate, viewBox)}
      />
    </SVGIcon>
  )
}

DoubleArrowIcon.defaultProps = {
  viewBox: '0 0 24 24',
  direction: 'right',
  rotate: 0,
}

export default DoubleArrowIcon
