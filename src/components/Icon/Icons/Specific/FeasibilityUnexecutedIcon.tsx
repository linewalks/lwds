import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'

const FeasibilityUnexecutedIcon = (props: SVGIconProps) => {
  return (
    <SVGIcon {...props}>
      <rect x="2" y="2" width="20" height="20" rx="10" fill="#EAEDF0" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.1655 8.04289C16.805 7.68241 16.2378 7.65468 15.8455 7.9597L15.7513 8.04289L10.3739 13.419L8.25203 11.2976C7.8615 10.907 7.22834 10.907 6.83782 11.2976C6.47733 11.6581 6.4496 12.2253 6.75463 12.6176L6.83782 12.7118L10.3733 16.2473L10.7999 15.82L10.8016 15.8211L17.1655 9.45711C17.5561 9.06658 17.5561 8.43342 17.1655 8.04289Z"
        fill="white"
      />
    </SVGIcon>
  )
}

export default FeasibilityUnexecutedIcon
