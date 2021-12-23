import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const PersonFilledIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M14.686 12a7.535 7.535 0 0 1 7.094 5 3.74 3.74 0 0 1-3.517 5H5.736a3.738 3.738 0 0 1-3.517-5 7.535 7.535 0 0 1 7.094-5h5.373zM12 2a4.5 4.5 0 0 1 .212 8.995L12 11a4.5 4.5 0 0 1 0-9z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

PersonFilledIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default PersonFilledIcon
