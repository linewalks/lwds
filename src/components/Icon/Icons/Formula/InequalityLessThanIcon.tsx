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
        d="M7 12.9689V11.0311L17 5V7.01038L8.74419 11.8789V12.0727L17 16.9412V19L7 12.9689Z"
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
