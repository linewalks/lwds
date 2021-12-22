import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const DescIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M17 17a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h14zm4.003-4a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h18.003zM11 9a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h8zm10-4a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2h18z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

DescIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default DescIcon
