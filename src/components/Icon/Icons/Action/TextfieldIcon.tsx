import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const TextfieldIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M19.708 4.293a1 1 0 0 1 0 1.414l-14 14a1 1 0 0 1-1.415-1.413l14-14.001a1 1 0 0 1 1.415 0zm-.043 9.008a1 1 0 0 1 0 1.415l-4.95 4.95a1 1 0 0 1-1.414-1.415l4.95-4.95a1 1 0 0 1 1.414 0z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

TextfieldIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default TextfieldIcon
