import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const UnlockIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M12 2a5.001 5.001 0 0 1 4.714 3.33 1 1 0 0 1-1.885.667 3.001 3.001 0 0 0-5.824.827L9 7l-.001 3.074C9.886 10.024 10.887 10 12 10c3.348 0 5.675.223 6.98.668A1.497 1.497 0 0 1 20 12.086v7.083a1.4 1.4 0 0 1-1.215 1.385A52.003 52.003 0 0 1 12 21c-2.262 0-4.523-.149-6.785-.446A1.4 1.4 0 0 1 4 19.169v-7.083a1.497 1.497 0 0 1 1.02-1.418c.506-.173 1.166-.312 1.98-.418V7a5 5 0 0 1 5-5zm0 10c-1.75 0-3.5.128-5.25.383L6 12.5v6c1.75.292 3.5.456 5.25.492L12 19c2 0 4-.167 6-.5v-6a36.41 36.41 0 0 0-5.25-.492L12 12z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

UnlockIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default UnlockIcon
