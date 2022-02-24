import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const ObservationIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M16.5 22h3a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5h-.75v-3a1.502 1.502 0 0 0-1.5-1.5h-4.5V8h.75A1.5 1.5 0 0 0 15 6.5v-3A1.5 1.5 0 0 0 13.5 2h-3A1.5 1.5 0 0 0 9 3.5v3A1.5 1.5 0 0 0 10.5 8h.75v3.5h-4.5a1.502 1.502 0 0 0-1.5 1.5v3H4.5A1.5 1.5 0 0 0 3 17.5v3A1.5 1.5 0 0 0 4.5 22h3A1.5 1.5 0 0 0 9 20.5v-3A1.5 1.5 0 0 0 7.5 16h-.75v-3h10.5v3h-.75a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5zm-6-15.5v-3h3v3h-3zm-3 11v3h-3v-3h3zm12 0v3h-3v-3h3z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

ObservationIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default ObservationIcon
