import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const PeopleFilledIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M15.597 14c2.5 0 4.776 1.31 5.82 3.365l.107.222.24.532c.67 1.478-.135 3.138-1.712 3.695-.279.099-.571.158-.867.178l-.223.008h-8.924C8.386 22 7 20.776 7 19.2c0-.298.051-.592.151-.873l.084-.208.24-.532c.955-2.107 3.178-3.49 5.66-3.582l.268-.005h2.194zm-6.72-5c.22 0 .439.013.654.038-.02.146-.031.299-.031.462 0 1.311.505 2.504 1.33 3.395a8.21 8.21 0 0 0-1.776.802 7.653 7.653 0 0 0-1.97 1.702H4.43C3.108 15.4 2 14.42 2 13.16c0-.237.041-.473.12-.698l.068-.166.192-.425c.76-1.679 2.527-2.783 4.504-2.865L7.122 9h1.755zM14.5 6a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zM8 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

PeopleFilledIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default PeopleFilledIcon
