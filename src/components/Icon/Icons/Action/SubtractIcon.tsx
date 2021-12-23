import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const SubtractIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <rect
        transform={svgRotate(rotate + 90, viewBox)}
        x="11"
        y="3"
        width="2"
        height="18"
        rx="1"
      />
    </SVGIcon>
  )
}

SubtractIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default SubtractIcon
