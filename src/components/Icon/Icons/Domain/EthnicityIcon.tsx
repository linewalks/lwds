import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const EthnicityIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M10.429 18.286h2.357v1.571h-2.357v-1.571zm2.357-1.572h1.571v1.572h-1.571v-1.572zm0-3.143h1.571v1.572h-1.571V13.57zM12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11c-.007-6.072-4.928-10.993-11-11zm-.474 1.595 1.97 3.94-1.242 3.108H7.499L6.39 13.09l2.24 2.24-.79 1.189-3.474-2.162H2.882a9.379 9.379 0 0 1 8.644-11.762zM3.918 15.929l3.092 1.924c.72.452 1.67.247 2.138-.463l.792-1.188a1.575 1.575 0 0 0-.197-1.983l-1.562-1.562.463-1.443h3.61a1.564 1.564 0 0 0 1.459-.988l1.242-3.105a1.573 1.573 0 0 0-.053-1.287l-1.579-3.159A9.397 9.397 0 0 1 20.56 15.93H17.5a1.573 1.573 0 0 0-1.571 1.571v3.06A9.387 9.387 0 0 1 3.44 15.929h.478zM17.5 17.5h2.142a9.488 9.488 0 0 1-2.142 2.142V17.5z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

EthnicityIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default EthnicityIcon
