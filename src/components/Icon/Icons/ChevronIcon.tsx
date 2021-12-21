import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const ChevronIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="m9.603 5.21.095.084 5.289 5.298 1.41 1.406-.003.004.002.003-1.406 1.408-5.29 5.295a.994.994 0 0 1-1.313.084l-.095-.084a.997.997 0 0 1 0-1.408l5.288-5.298-5.289-5.299a.997.997 0 0 1 0-1.409.994.994 0 0 1 1.312-.083z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

ChevronIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default ChevronIcon
