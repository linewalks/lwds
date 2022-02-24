import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const VisitIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M17.5 1.5a1 1 0 0 1 1 1v7H21a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h2.5v-7a1 1 0 0 1 1-1h11zm-.68 1.679H7.18v8.001H3.679v9.64H8.82v-6.5a1 1 0 0 1 .883-.993l.117-.007h4.36a1 1 0 0 1 .993.883l.007.117v6.5h5.14v-9.64h-3.5V3.179zm-3.32 11.82h-3v5.64h3v-5.64zm-.66-9.159v1.32h1.32a.84.84 0 1 1 0 1.68h-1.32v1.32a.84.84 0 1 1-1.68 0V8.84H9.84a.84.84 0 1 1 0-1.68h1.32V5.84a.84.84 0 1 1 1.68 0z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

VisitIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default VisitIcon
