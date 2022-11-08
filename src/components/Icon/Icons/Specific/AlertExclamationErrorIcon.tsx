import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'

const AlertExclamationErrorIcon = (props: SVGIconProps) => {
  return (
    <SVGIcon {...props}>
      <circle cx="12" cy="12" r="10" fill="#FF4C33" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 14.9997C12.8284 14.9997 13.5 15.6713 13.5 16.4997C13.5 17.3281 12.8284 17.9997 12 17.9997C11.1716 17.9997 10.5 17.3281 10.5 16.4997C10.5 15.6713 11.1716 14.9997 12 14.9997ZM13.439 7.93347C13.439 8.48611 12.8514 12.8379 12.8514 12.8379C12.8095 13.2144 12.4408 13.502 11.9998 13.502C11.5588 13.502 11.1901 13.2144 11.1483 12.8379C11.1483 12.8379 10.5659 8.49339 10.5659 7.93347C10.5659 7.37355 11.0384 6.50195 11.9998 6.50195C12.9612 6.50195 13.439 7.38083 13.439 7.93347Z"
        fill="white"
      />
    </SVGIcon>
  )
}

export default AlertExclamationErrorIcon
