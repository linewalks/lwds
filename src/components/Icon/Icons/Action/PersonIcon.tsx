import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const PersonIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M14.686 12a7.535 7.535 0 0 1 7.094 5 3.74 3.74 0 0 1-3.517 5H5.736a3.738 3.738 0 0 1-3.517-5 7.535 7.535 0 0 1 7.094-5h5.373zm0 2H9.313a5.535 5.535 0 0 0-5.211 3.674 1.743 1.743 0 0 0 1.484 2.32l.15.006h12.527a1.74 1.74 0 0 0 1.634-2.326 5.536 5.536 0 0 0-4.97-3.669l-.24-.005zM12 2a4.5 4.5 0 0 1 .212 8.995L12 11a4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

PersonIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default PersonIcon
