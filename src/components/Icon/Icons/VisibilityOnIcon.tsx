import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const VisibilityOnIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M12 5c3.69 0 6.974 2.19 9.83 6.442a1 1 0 0 1 0 1.116C18.974 16.81 15.69 19 12 19c-3.69 0-6.974-2.19-9.83-6.442a1 1 0 0 1 0-1.116C5.026 7.19 8.31 5 12 5zm0 2c-2.788 0-5.376 1.63-7.784 5 2.408 3.37 4.996 5 7.784 5 2.788 0 5.376-1.63 7.784-5C17.376 8.63 14.788 7 12 7zm0 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

VisibilityOnIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default VisibilityOnIcon
