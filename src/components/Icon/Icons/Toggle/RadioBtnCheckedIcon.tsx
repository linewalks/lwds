import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'

const RadioBtnCheckedIcon = (props: SVGIconProps) => {
  return (
    <SVGIcon {...props}>
      <circle fill="#3481F4" cx="12" cy="12" r="12" />
      <circle fill="#FFF" cx="12" cy="12" r="4" />
    </SVGIcon>
  )
}

export default RadioBtnCheckedIcon
