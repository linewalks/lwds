import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const PeopleIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M15.597 14c2.5 0 4.776 1.31 5.82 3.365l.107.222.24.532c.67 1.478-.135 3.138-1.712 3.695-.279.099-.571.158-.867.178l-.223.008h-8.924C8.386 22 7 20.776 7 19.2c0-.298.051-.592.151-.873l.084-.208.24-.532c.955-2.107 3.178-3.49 5.66-3.582l.268-.005h2.194zm0 2h-2.194c-1.753 0-3.317.892-4.019 2.235l-.087.178-.24.531A.618.618 0 0 0 9 19.2c0 .383.378.744.912.794l.126.006h8.924c.146 0 .29-.025.423-.072.473-.167.69-.55.59-.898l-.032-.086-.24-.531C19.048 16.97 17.425 16 15.596 16zM8.73 9c.66 0 1 .5 1 1s-.343 1-1 1H7.414c-1.38 0-2.369.649-2.896 1.467l-.128.2a.745.745 0 0 0-.125.405c0 .59.253.928 1.355.928h1.532c.48 0 .771.443.31.972C7 15.5 6.663 16 6 16H4.43A2.437 2.437 0 0 1 2 13.55c0-.26.041-.518.12-.764l.068-.182.192-.465c.762-1.839 2.533-3.047 4.512-3.134L7.122 9h1.61zM14.5 6a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM8 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

PeopleIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default PeopleIcon
