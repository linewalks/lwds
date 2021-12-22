import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const TrashIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M21 6a1 1 0 0 1 0 2h-1.064l-.001.046-.753 12.079a2 2 0 0 1-1.84 1.869l-.156.006H6.814a2 2 0 0 1-1.98-1.719l-.016-.156-.75-12A2.03 2.03 0 0 1 4.064 8H3a1 1 0 1 1 0-2h18zm-3.065 2H6.064l.75 12h10.372l.749-12zM10 10.5a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0v-5a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0v-5a1 1 0 0 1 1-1zM17 2a1 1 0 0 1 0 2H7a1 1 0 1 1 0-2h10z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

TrashIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default TrashIcon
