import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const DrugIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M10.232 3.161 20.84 13.768a5 5 0 0 1-7.071 7.07L3.16 10.233a5 5 0 1 1 7.071-7.07zm2.861 9.435c-.822.822-1.84 1.533-3.054 2.137l4.917 4.918a3.32 3.32 0 0 0 4.824-4.558l-.13-.137-4.83-4.831a8.384 8.384 0 0 1-1.727 2.47zM4.35 4.349a3.32 3.32 0 0 0-.13 4.558l.13.137 4.429 4.428c1.29-.579 2.331-1.268 3.127-2.064a6.61 6.61 0 0 0 1.623-2.576L9.044 4.349a3.32 3.32 0 0 0-4.695 0z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

DrugIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default DrugIcon
