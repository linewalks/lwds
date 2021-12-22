import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const ResetIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M12 2a9.988 9.988 0 0 1 8 3.999V5a1 1 0 0 1 2 0v5h-5a1 1 0 0 1 0-2h1.943l-.042-.056-.04-.06a8 8 0 1 0 0 8.231 1 1 0 1 1 1.715 1.031A9.994 9.994 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

ResetIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default ResetIcon
