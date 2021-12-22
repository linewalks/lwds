import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
interface IconProps extends SVGIconProps {
  rotate?: number
}

const CheckboxCheckedIcon = (props: IconProps) => {
  return (
    <SVGIcon {...props}>
      <g fill="none" fillRule="evenodd">
        <rect fill="#3B424A" width="24" height="24" rx="4" />
        <rect
          fill="#FFF"
          transform="rotate(90 12 12)"
          x="10.5"
          y="5"
          width="3"
          height="14"
          rx="1.5"
        />
      </g>
    </SVGIcon>
  )
}

CheckboxCheckedIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default CheckboxCheckedIcon
