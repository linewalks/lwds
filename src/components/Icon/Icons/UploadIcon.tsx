import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const UploadIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M20.1 15a.9.9 0 0 1 .9.9v4.243a.857.857 0 0 1-.857.857H3.857A.857.857 0 0 1 3 20.143V15.9a.9.9 0 1 1 1.8 0l-.001 3.385h14.4L19.2 15.9a.9.9 0 0 1 .9-.9zM12.022 3l5.165 5.215.082.093a.99.99 0 0 1-.082 1.299.972.972 0 0 1-1.284.084l-.096-.084-2.811-2.836.004 8.228-.007.116a1 1 0 0 1-.763.858l-.113.02-.117.006-.117-.007a1.001 1.001 0 0 1-.877-.877L11 15l-.004-8.18-2.81 2.839-.09.08a.972.972 0 0 1-1.191.007l-.098-.087-.082-.093a.99.99 0 0 1 0-1.206l.081-.093L12.022 3z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

UploadIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default UploadIcon
