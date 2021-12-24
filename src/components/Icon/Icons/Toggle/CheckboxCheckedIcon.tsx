import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'

const CheckboxCheckedIcon = (props: SVGIconProps) => {
  return (
    <SVGIcon {...props}>
      <rect fill="#3481F4" width="24" height="24" rx="4" />
      <path
        fill="#FFF"
        d="M5.075 15.51a1.5 1.5 0 1 1 2.122-2.12l1.766 1.767 7.426-7.425a1.5 1.5 0 0 1 2.121 2.122l-8.47 8.47a1.53 1.53 0 0 1-.015.015l-.016.015-1.045 1.045-3.889-3.889z"
      />
    </SVGIcon>
  )
}

export default CheckboxCheckedIcon
