import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const PencilFilledIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="m16.466 3.292 4.242 4.242a1 1 0 0 1-.002 1.415l-2.151 2.152.001.001-1.416 1.416-.001-.001L8.955 20.7a1.003 1.003 0 0 1-.708.294L3 21l.006-5.247c0-.265.106-.52.294-.708L15.05 3.294a1 1 0 0 1 1.416-.002zm-3.57 4.982-7.894 7.895-.004 2.83 2.83-.005 7.894-7.894-2.826-2.826zm2.861-2.86-1.445 1.444 2.826 2.826 1.445-1.445-2.826-2.826z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

PencilFilledIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default PencilFilledIcon
