import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const ObservationIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M19.5 1.5a3 3 0 0 1 2.995 2.817l.005.183v15a3 3 0 0 1-2.817 2.995l-.183.005h-15a3 3 0 0 1-2.995-2.817L1.5 19.5v-15a3 3 0 0 1 2.817-2.995L4.5 1.5h15zm0 1.714h-15c-.666 0-1.213.506-1.28 1.155l-.006.131v15c0 .666.506 1.213 1.155 1.28l.131.006h15c.666 0 1.213-.506 1.28-1.155l.006-.131v-15c0-.666-.506-1.213-1.155-1.28l-.131-.006zm-1.28 7.747a.804.804 0 0 1 0 1.136l-6.186 6.186-2.84-2.841a.804.804 0 0 1 1.136-1.137l1.704 1.705 5.05-5.049a.804.804 0 0 1 1.136 0zm-5.952-2.175a.804.804 0 1 1 0 1.607H6.375a.804.804 0 1 1 0-1.607h5.893zm4.286-3.215a.804.804 0 1 1 0 1.608H6.375a.804.804 0 1 1 0-1.608h10.179z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

ObservationIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default ObservationIcon
