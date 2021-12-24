import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'

const RadioBtnUncheckedIcon = (props: SVGIconProps) => {
  return (
    <SVGIcon {...props}>
      <path
        d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
        fill="#6C7A89"
        fillRule="evenodd"
      />
    </SVGIcon>
  )
}

export default RadioBtnUncheckedIcon
