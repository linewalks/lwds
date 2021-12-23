import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const DuplicateIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M20 7a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2h2v1h10V9h-1V7h2zm-4-4a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zm-1 2H5v10h10V5z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

DuplicateIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default DuplicateIcon
