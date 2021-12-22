import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const DoneCircleFilledIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        fill="#3481F4"
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"
        transform={svgRotate(rotate, viewBox)}
      />
      <path
        d="M17.166 8.043a1 1 0 0 0-1.32-.083l-.095.083-5.377 5.376-2.122-2.121a1 1 0 0 0-1.497 1.32l.083.094 3.535 3.535.427-.427.002.001 6.364-6.364a1 1 0 0 0 0-1.414z"
        fill="#FFF"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

DoneCircleFilledIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default DoneCircleFilledIcon