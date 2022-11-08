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
        d="M7 19V17.3946H17V19H7ZM17 6.8887L8.74419 10.4772V10.6425L17 14.2074V16.1433L7 11.6341V9.53288L17 5V6.8887Z"
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
