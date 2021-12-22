import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const CollapseIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M11.004 13v6a1 1 0 0 1-2 0v-2.585l-5.297 5.296a1 1 0 0 1-1.414-1.414L7.59 15H5.004a1 1 0 0 1 0-2h6zM21.711 2.293a1 1 0 0 1 0 1.414l-5.298 5.297H19a1 1 0 0 1 0 2h-6v-6a1 1 0 0 1 2 0V7.59l5.297-5.296a1 1 0 0 1 1.414 0z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

CollapseIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default CollapseIcon
