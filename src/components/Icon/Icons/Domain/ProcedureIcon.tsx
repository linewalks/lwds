import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const ProcedureIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M12.496 16.864c3.224.744 6.208 1.77 8.531 2.918.04.02.078.044.113.07l.043.01a.8.8 0 1 1-.34 1.563c-2.412-.525-5.441-.79-8.639-.734-3.368.06-6.535.467-8.976 1.132a.8.8 0 1 1-.421-1.543c2.577-.703 5.874-1.127 9.37-1.188 1.167-.02 2.314 0 3.422.06a47.093 47.093 0 0 0-3.418-.924.7.7 0 0 1 .315-1.364zm4.9-14.1a2.761 2.761 0 0 1 3.814 0 2.696 2.696 0 0 1 .132 3.673l-.132.142-10.148 10.232c-.591.595-1.591 1.263-2.802 1.341l-.244.008H2L17.395 2.765zm-5.523 11.247-1.909-1.908-4.708 4.708h2.76c.77.002 1.587-.494 2.004-.87l.088-.084 1.765-1.846zm-.089-3.728-.866.866 1.908 1.908.866-.866-1.908-1.908zm8.472-6.565a1.38 1.38 0 0 0-1.797-.095l-.11.095-5.611 5.611 1.908 1.908 5.61-5.611a1.348 1.348 0 0 0 0-1.908z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

ProcedureIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default ProcedureIcon
