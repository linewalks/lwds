import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const VisibilityOffIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="m5.636 4.207 1.93 1.929C8.97 5.372 10.45 4.986 12 4.986c3.69 0 6.974 2.189 9.83 6.442a1 1 0 0 1 0 1.115c-1.163 1.731-2.396 3.12-3.7 4.16l1.648 1.646a1 1 0 0 1-1.414 1.414L4.222 5.621a1 1 0 0 1 1.414-1.414zm-.828 4L6.221 9.62c-.682.661-1.35 1.449-2.005 2.365 2.408 3.37 4.996 5 7.784 5 .485 0 .964-.049 1.437-.148l1.617 1.618a8.998 8.998 0 0 1-3.054.53c-3.69 0-6.974-2.19-9.83-6.442a1 1 0 0 1 0-1.115c.842-1.255 1.722-2.33 2.638-3.222zm3.23 3.23 4.51 4.511a4 4 0 0 1-4.51-4.51zM12 6.986a7.092 7.092 0 0 0-2.942.643l.91.91a4 4 0 0 1 5.478 5.478l1.26 1.262c1.058-.806 2.083-1.9 3.078-3.293-2.408-3.369-4.996-5-7.784-5zm0 3c-.179 0-.352.024-.517.068l2.45 2.45A2.003 2.003 0 0 0 12 9.985z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

VisibilityOffIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default VisibilityOffIcon
