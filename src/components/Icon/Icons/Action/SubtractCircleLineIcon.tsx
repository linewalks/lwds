import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const SubtractCircleLineIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm4 7a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2h8z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

SubtractCircleLineIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default SubtractCircleLineIcon
