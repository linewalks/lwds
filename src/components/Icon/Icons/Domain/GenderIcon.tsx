import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const GenderIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="m21.66 2.5.076.003.042-.002.722-.001v5.16a.84.84 0 1 1-1.68 0l-.001-2.293-2.524 2.525a6 6 0 0 1-9.384 7.473c.312-.07.621-.157.928-.264.231-.08.443-.166.635-.255l.185-.091A4.32 4.32 0 1 0 13.5 7.18l-.144.004a6.001 6.001 0 0 1-5.015 7.258l-.001 3.218H9.66a.84.84 0 1 1 0 1.68H8.339l.001 1.82a.84.84 0 1 1-1.68 0l-.001-1.82H5.34a.84.84 0 1 1 0-1.68h1.319v-3.218a6.001 6.001 0 1 1 6.067-8.892 5.973 5.973 0 0 1 4.382 1.155l2.524-2.525H17.34a.84.84 0 1 1 0-1.68h4.32zM7.5 4.18a4.32 4.32 0 1 0 4.218 3.383 4.323 4.323 0 0 0-2.536 3.797 2.8 2.8 0 0 1-.765.333c-.283.077-.589.12-.917.127v-.32a6.001 6.001 0 0 1 3.541-5.475A4.314 4.314 0 0 0 7.5 4.18z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

GenderIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default GenderIcon
