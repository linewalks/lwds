import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const ExpandIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M10.711 13.293a1 1 0 0 1 0 1.414l-5.298 5.297H8a1 1 0 1 1 0 2H2v-6a1 1 0 1 1 2 0v2.585l5.297-5.296a1 1 0 0 1 1.414 0zM22.004 2v6a1 1 0 0 1-2 0V5.415l-5.297 5.296a1 1 0 0 1-1.414-1.414L18.59 4h-2.587a1 1 0 1 1 0-2h6z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

ExpandIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default ExpandIcon
