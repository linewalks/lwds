import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const DownloadIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M20.1 15a.9.9 0 0 1 .9.9v4.243a.857.857 0 0 1-.857.857H3.857A.857.857 0 0 1 3 20.143V15.9a.9.9 0 1 1 1.8 0l-.001 3.385h14.4L19.2 15.9a.9.9 0 0 1 .9-.9zM12 3l.117.006a1 1 0 0 1 .876.877L13 4l-.004 8.228 2.814-2.839a.972.972 0 0 1 1.377.003.99.99 0 0 1 .082 1.3l-.082.092L12.022 16l-5.216-5.266a.989.989 0 0 1-.08-1.3l.087-.098a.971.971 0 0 1 1.282-.075l.091.081 2.81 2.838L11 4c0-.513.386-.935.883-.993L12 3z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

DownloadIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default DownloadIcon
