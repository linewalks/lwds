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

const ArrowIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="m13.203 4.21.094.083L21.004 12l-7.707 7.707a1 1 0 0 1-1.497-1.32l.083-.094 5.294-5.295-13.178-.003a.998.998 0 0 1-.12-1.988L3.997 11h.001l13.183.004-5.297-5.297a1 1 0 0 1-.083-1.32l.083-.094a1 1 0 0 1 1.32-.083z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

ArrowIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default ArrowIcon
