import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const LockIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M12 2a5 5 0 0 1 5 5l.001 3.25c.816.107 1.478.246 1.985.42A1.5 1.5 0 0 1 20 12.09v7.076a1.4 1.4 0 0 1-1.218 1.388c-2.26.297-4.521.446-6.782.446-2.26 0-4.522-.149-6.782-.446A1.4 1.4 0 0 1 4 19.166V12.09a1.5 1.5 0 0 1 1.014-1.419c.507-.174 1.17-.314 1.986-.42V7a5 5 0 0 1 5-5zm0 10c-1.75 0-3.5.128-5.25.383L6 12.5v6c1.75.292 3.5.456 5.25.492L12 19c2 0 4-.167 6-.5v-6a36.41 36.41 0 0 0-5.25-.492L12 12zm0-8a3 3 0 0 0-2.995 2.824L9 7v3.074l.787-.036.844-.024.899-.012h.94l.9.012.843.024.789.036L15 7a3 3 0 0 0-3-3z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

LockIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default LockIcon
