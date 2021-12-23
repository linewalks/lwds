import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const CalendarIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M16 2a1 1 0 0 1 1 1v1h3a1 1 0 0 1 .993.883L21 5v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V3a1 1 0 1 1 2 0v1h6V3a1 1 0 0 1 1-1zm3 7H5v10h14V9zm-6.75 6a.75.75 0 1 1 0 1.5h-4.5a.75.75 0 1 1 0-1.5h4.5zm4-3.5a.75.75 0 1 1 0 1.5h-8.5a.75.75 0 1 1 0-1.5h8.5z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

CalendarIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default CalendarIcon
