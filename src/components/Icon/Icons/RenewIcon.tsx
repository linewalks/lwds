import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const RenewIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M20.999 13.025a1 1 0 0 1 .754 1.196A10.003 10.003 0 0 1 4 18.005l.001 1a1 1 0 0 1-2 0v-5h5a1 1 0 1 1 0 2H5.057l.042.056.04.06a8.003 8.003 0 0 0 14.664-2.341 1 1 0 0 1 1.196-.755zM12 2a9.988 9.988 0 0 1 8 3.999V5a1 1 0 0 1 2 0v5h-5a1 1 0 0 1 0-2h1.942l-.042-.056-.038-.06a8.003 8.003 0 0 0-14.664 2.341 1 1 0 1 1-1.951-.441A10.003 10.003 0 0 1 12 2z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

RenewIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default RenewIcon
