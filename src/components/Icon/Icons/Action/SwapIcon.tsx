import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const SwapIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M21.705 9.292a.998.998 0 0 1 0 1.41L12.407 20 15 20a1 1 0 0 1 0 2H9v-6a1 1 0 0 1 2 0l.001 2.583 9.293-9.291a.998.998 0 0 1 1.41 0zm-6.708-7.293v6a1 1 0 1 1-2 0l-.001-2.583-9.293 9.292a.998.998 0 1 1-1.41-1.411L11.59 4H8.997a1 1 0 1 1 0-2h6z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

SwapIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default SwapIcon
