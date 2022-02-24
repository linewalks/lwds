import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const ConditionIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M9 8.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-1.136-6.601a10.5 10.5 0 0 0-7.19 19.383l.012.117c.074.768.72 1.353 1.493 1.351h7.642a1.495 1.495 0 0 0 1.493-1.35l.011-.118A10.476 10.476 0 0 0 22.5 12a10.5 10.5 0 0 0-8.636-10.351zM12 3a8.992 8.992 0 0 1 8.977 8.548L17.073 13.5H6.927l-3.904-1.952A8.992 8.992 0 0 1 12 3zM3.09 13.258l2.955 1.478.436 4.357a8.978 8.978 0 0 1-3.391-5.835zM15.821 21H8.179l-.6-6h8.842l-.6 6zm2.134-6.264 2.955-1.478a8.978 8.978 0 0 1-3.39 5.835l.435-4.357z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

ConditionIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default ConditionIcon
