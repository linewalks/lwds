import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const RadioBtnCheckedIcon = (props: IconProps) => {
  return (
    <SVGIcon {...props}>
      <circle fill="#3481F4" cx="12" cy="12" r="12" />
      <circle fill="#FFF" cx="12" cy="12" r="4" />
    </SVGIcon>
  )
}

RadioBtnCheckedIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default RadioBtnCheckedIcon
