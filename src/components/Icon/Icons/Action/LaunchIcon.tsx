import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const LaunchIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M7 3a1 1 0 1 1 0 2H5v14h14v-2a1 1 0 0 1 2 0v3a1 1 0 0 1-.883.993L20 21H3V4a1 1 0 0 1 1-1h3zm14 0v.002h.003v7a1 1 0 0 1-.883.994l-.12.007a1 1 0 0 1-1-1V6.418l-8.293 8.293a1 1 0 1 1-1.414-1.414l8.295-8.296H14a1 1 0 0 1-.993-.883L13 4a1 1 0 0 1 1-1h7z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

LaunchIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default LaunchIcon
