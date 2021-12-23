import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
interface IconProps extends SVGIconProps {
  rotate?: number
}

const CheckIcon = (props: IconProps) => {
  return (
    <SVGIcon {...props}>
      <path d="m20.615 5.207.095.083a.994.994 0 0 1 0 1.404L8.433 19l-5.141-5.152a1 1 0 0 1 0-1.412.995.995 0 0 1 1.313-.084l.095.084 3.74 3.748L19.31 5.291a.99.99 0 0 1 1.305-.084z" />
    </SVGIcon>
  )
}

CheckIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default CheckIcon
