import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const RaceIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-4.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-8.75 8.25A2.25 2.25 0 0 0 1 17v2h1.5v-2a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2H10v-2a2.25 2.25 0 0 0-2.25-2.25h-4.5zM5.5 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-4.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm10.75 5.25A2.25 2.25 0 0 0 14 17v2h1.5v-2a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2H23v-2a2.25 2.25 0 0 0-2.25-2.25h-4.5zM18.5 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-4.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

RaceIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default RaceIcon
