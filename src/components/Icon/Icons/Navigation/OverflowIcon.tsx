import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const OverflowIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-7 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm14 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

OverflowIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default OverflowIcon
