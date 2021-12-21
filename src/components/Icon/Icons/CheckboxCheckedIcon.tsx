import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const CheckboxCheckedIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <rect
        fill="#3481F4"
        width="24"
        height="24"
        rx="4"
        transform={svgRotate(rotate, viewBox)}
      />
      <path
        fill="#FFF"
        d="M5.075 15.51a1.5 1.5 0 1 1 2.122-2.12l1.766 1.767 7.426-7.425a1.5 1.5 0 0 1 2.121 2.122l-8.47 8.47a1.53 1.53 0 0 1-.015.015l-.016.015-1.045 1.045-3.889-3.889z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

CheckboxCheckedIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default CheckboxCheckedIcon
