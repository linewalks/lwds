import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'

const CheckboxCheckedIcon = (props: SVGIconProps) => {
  return (
    <SVGIcon {...props}>
      <path
        d="M4 0h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
        fill="#3B424A"
      />
      <path
        d="M4.766 11.591a1.25 1.25 0 0 1 1.768 0l3.004 3.004 7.956-7.954a1.25 1.25 0 1 1 1.768 1.768l-9.723 9.723-.707-.707-.09-.098-.087-.08-3.889-3.888a1.25 1.25 0 0 1 0-1.768z"
        fill="#FFF"
      />
    </SVGIcon>
  )
}

export default CheckboxCheckedIcon
