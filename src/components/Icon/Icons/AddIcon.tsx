import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const AddIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M12 3a1 1 0 0 1 1 1v7h7a1 1 0 0 1 0 2h-7v7a1 1 0 0 1-2 0v-7.001L4 13a1 1 0 0 1 0-2l7-.001V4a1 1 0 0 1 1-1z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

AddIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default AddIcon
