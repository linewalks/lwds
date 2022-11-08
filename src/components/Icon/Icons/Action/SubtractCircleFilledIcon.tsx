import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const SubtractCircleIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        fillRule="evenodd"
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM7.48758 11H16.5126C17.0581 11 17.5003 11.4477 17.5003 12C17.5003 12.5523 17.0581 13 16.5126 13H7.48758C6.94212 13 6.49993 12.5523 6.49993 12C6.49993 11.4477 6.94212 11 7.48758 11Z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

SubtractCircleIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default SubtractCircleIcon
