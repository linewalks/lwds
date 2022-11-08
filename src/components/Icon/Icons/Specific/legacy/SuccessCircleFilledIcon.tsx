import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'

const SuccessCircleFilledIcon = (props: SVGIconProps) => {
  return (
    <SVGIcon {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"
          fill="#0CB639"
        />
        <path
          d="M17.166 8.043a1 1 0 0 0-1.32-.083l-.095.083-5.377 5.376-2.122-2.121a1 1 0 0 0-1.497 1.32l.083.094 3.535 3.535.427-.427.002.001 6.364-6.364a1 1 0 0 0 0-1.414z"
          fill="#FFF"
        />
      </g>
    </SVGIcon>
  )
}

export default SuccessCircleFilledIcon
