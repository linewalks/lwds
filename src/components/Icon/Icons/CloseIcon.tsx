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

const CloseIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M4.707 3.29 12 10.582l7.293-7.292a1 1 0 0 1 1.32-.083l.094.084a1 1 0 0 1 0 1.414l-7.292 7.292 7.292 7.293a1 1 0 0 1 .083 1.32l-.083.095a1 1 0 0 1-1.414 0L12 13.412l-7.293 7.293a1 1 0 0 1-1.32.083l-.094-.084a1 1 0 0 1 0-1.414l7.292-7.293-7.292-7.292a1 1 0 0 1-.084-1.32l.084-.095a1 1 0 0 1 1.414 0z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

CloseIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default CloseIcon
