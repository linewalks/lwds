import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  direction?: string | 'topRight' | 'bottomRight' | 'bottomLeft' | 'topLeft'
  rotate?: number
}

const DiagonalArrowIcon = (props: IconProps) => {
  const { viewBox, direction, rotate } = props

  const dirAngle = {
    topRight: 0,
    bottomRight: 90,
    bottomLeft: 180,
    topLeft: -90,
  }[direction]

  return (
    <SVGIcon {...props}>
      <path
        d="M19 5v11a1 1 0 0 1-2.001 0l-.001-7.57L6.713 18.708a1.001 1.001 0 0 1-1.5-1.318l.084-.095L15.6 7H8A1 1 0 0 1 8 5h11z"
        transform={svgRotate((dirAngle ?? 0) + rotate, viewBox)}
      />
    </SVGIcon>
  )
}

DiagonalArrowIcon.defaultProps = {
  viewBox: '0 0 24 24',
  direction: 'topRight',
  rotate: 0,
}

export default DiagonalArrowIcon
