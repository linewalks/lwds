import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const ConditionIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M6 10.5224V9H18V10.5224H6ZM6 15V13.4776H18V15H6Z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

ConditionIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default ConditionIcon
