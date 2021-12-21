import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const LinkIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="m7.755 9.17 1.416 1.416-4.288 4.289A3.002 3.002 0 0 0 9 19.242l.129-.121 4.288-4.288 1.415 1.415-4.29 4.29a5 5 0 0 1-6.89.173l-.187-.178a5 5 0 0 1 0-7.07l4.29-4.292zm8.486-1.408a1 1 0 0 1 0 1.415l-7.07 7.071a1 1 0 0 1-1.32.083l-.096-.084a1 1 0 0 1 0-1.414l7.071-7.071a1 1 0 0 1 1.415 0zm4.293-4.298a5.002 5.002 0 0 1 .005 7.077l-4.292 4.29-1.415-1.414 4.289-4.289a3.002 3.002 0 1 0-4.246-4.246l-4.289 4.289-1.415-1.416 4.291-4.29a5 5 0 0 1 7.072 0z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

LinkIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default LinkIcon
