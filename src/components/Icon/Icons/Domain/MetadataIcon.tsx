import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const MetadataIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M3 17.2a.8.8 0 0 1 .794.7l.006.1v1a1.2 1.2 0 0 0 1.077 1.194L5 20.2h14a1.2 1.2 0 0 0 1.194-1.077L20.2 19v-.945a.8.8 0 0 1 1.594-.1l.006.1V19a2.8 2.8 0 0 1-2.63 2.795L19 21.8H5a2.8 2.8 0 0 1-2.795-2.63L2.2 19v-1a.8.8 0 0 1 .8-.8zm1.5-8.95A1.5 1.5 0 0 1 6 9.75v4.5a1.5 1.5 0 0 1-1.5 1.5H3a1.5 1.5 0 0 1-1.5-1.5v-4.5A1.5 1.5 0 0 1 3 8.25h1.5zm11 0a1.5 1.5 0 0 1 1.5 1.5v4.5a1.5 1.5 0 0 1-1.5 1.5H14a1.5 1.5 0 0 1-1.5-1.5v-4.5a1.5 1.5 0 0 1 1.5-1.5h1.5zm5.5 0a1.5 1.5 0 0 1 1.5 1.5v1.5c0 .75-.477 1.5-1.385 1.5H19.5v3H18v-6a1.5 1.5 0 0 1 1.5-1.5H21zM9.25 9.736l1.013-1.074c.247-.275.435-.412.564-.412.48 0 .618.227.657.735l.012.254.004.497v4.5l-.002.023v1.477H10v-4.871l-.75.799-.75-.8v4.872H7.002l-.002-6 .004-.497.012-.254c.04-.508.177-.735.657-.735.11 0 .265.101.462.303L9.25 9.736zM4.5 9.75H3v4.5h1.5v-4.5zm11 0H14v4.5h1.5v-4.5zm5.5 0h-1.5v1.5H21v-1.5zM19 2.2a2.8 2.8 0 0 1 2.795 2.63L21.8 5v1a.8.8 0 0 1-1.594.1L20.2 6V5a1.2 1.2 0 0 0-1.077-1.194L19 3.8H5a1.2 1.2 0 0 0-1.194 1.077L3.8 5v.934a.8.8 0 0 1-1.594.1l-.006-.1V5a2.8 2.8 0 0 1 2.63-2.795L5 2.2h14z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

MetadataIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default MetadataIcon
