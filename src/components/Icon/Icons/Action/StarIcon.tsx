import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const StarIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="m8.556 8.187-5.702.823-.113.023c-.733.19-1.002 1.12-.439 1.666l4.125 3.996-.973 5.645-.013.11c-.05.753.761 1.299 1.459.934L12 18.72l5.1 2.664.1.046c.707.28 1.48-.318 1.346-1.09l-.974-5.645 4.126-3.996.078-.084a.99.99 0 0 0-.63-1.605l-5.703-.823-2.55-5.135a1 1 0 0 0-1.787 0l-2.55 5.135zM12 5.727l1.888 3.803.061.105a.997.997 0 0 0 .69.437l4.222.61-3.055 2.96-.082.09a.986.986 0 0 0-.205.786l.72 4.179-3.775-1.973-.112-.05a1.002 1.002 0 0 0-.816.05L7.76 18.697l.722-4.179.013-.12a.987.987 0 0 0-.3-.756l-3.056-2.96 4.223-.61a.996.996 0 0 0 .75-.542L12 5.726z"
        fill="#3B424A"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

StarIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default StarIcon
