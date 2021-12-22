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
        d="m17.196 11.413-.386.388-8.887 8.883c-.204.204-.48.319-.768.319l-4.129-.027L3 16.846c0-.289.115-.565.32-.77l9.27-9.27 4.606 4.607zm.417-8.096 3.07 3.073a1.087 1.087 0 0 1-.002 1.536l-1.917 1.918-4.606-4.606 1.919-1.919a1.087 1.087 0 0 1 1.536-.002z"
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
