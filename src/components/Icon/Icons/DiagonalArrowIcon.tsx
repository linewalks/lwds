import React from 'react'

import SVGIcon from '@components/Icon/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps {
  color?: string
  width?: number
  height?: number
  viewBox?: string
  size?: string | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  rotate?: number
  responsive?: boolean
}

const DiagonalArrowIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M19 5v11a1 1 0 0 1-2.001 0l-.001-7.57L6.713 18.708a1.001 1.001 0 0 1-1.5-1.318l.084-.095L15.6 7H8A1 1 0 0 1 8 5h11z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

DiagonalArrowIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default DiagonalArrowIcon
