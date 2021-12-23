import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const AngledArrowIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M6 19a1 1 0 0 1-2 0v-8.969l-.003-.058c0-.315.146-.597.374-.78A.996.996 0 0 1 5 8.97l.066.003h11.126l-3.266-3.266a1 1 0 0 1-.084-1.32l.084-.094a1 1 0 0 1 1.32-.083l.094.083 5.657 5.657-5.711 5.71a1 1 0 0 1-1.497-1.32l.083-.094 3.274-3.273H6V19z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

AngledArrowIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default AngledArrowIcon
