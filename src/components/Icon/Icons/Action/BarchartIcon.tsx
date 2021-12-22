import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const BarchartIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M12 2a1 1 0 0 1 1 1v18a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zM4 12a1 1 0 0 1 1 1v8a1 1 0 0 1-2 0v-8a1 1 0 0 1 1-1zm16-4a1 1 0 0 1 1 1v12a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

BarchartIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default BarchartIcon
