import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const StarFilledIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="m8.556 8.187-5.702.823-.113.023c-.733.19-1.002 1.12-.439 1.666l4.125 3.996-.973 5.645-.013.11c-.05.753.761 1.299 1.459.934L12 18.72l5.1 2.664.1.046c.707.28 1.48-.318 1.346-1.09l-.974-5.645 4.126-3.996.078-.084a.99.99 0 0 0-.63-1.605l-5.703-.823-2.55-5.135a1 1 0 0 0-1.787 0l-2.55 5.135z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

StarFilledIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default StarFilledIcon
