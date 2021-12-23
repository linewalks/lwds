import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const FilterIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M15 17a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2h6zm3-6a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2h12zm3-6a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2h18z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

FilterIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default FilterIcon
