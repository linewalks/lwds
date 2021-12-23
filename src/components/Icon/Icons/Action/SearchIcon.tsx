import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const SearchIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M10 2a8 8 0 0 1 6.32 12.906l5.391 5.39a1 1 0 0 1-1.414 1.415l-5.391-5.391A8 8 0 1 1 10 2zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

SearchIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default SearchIcon
