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
        d="M17 19V17.3946H7V19H17ZM7 6.8887L15.2558 10.4772V10.6425L7 14.2074V16.1433L17 11.6341V9.53288L7 5V6.8887Z"
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
