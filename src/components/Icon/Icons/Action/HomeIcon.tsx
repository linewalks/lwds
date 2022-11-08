import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const HomeIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        fillRule="evenodd"
        d="M11.2129 1.27112C11.6759 0.909628 12.3241 0.909628 12.7871 1.27112L21.5051 8.07822C21.8173 8.32206 22 8.69699 22 9.09416V20.1685C22 20.9194 21.7028 21.6397 21.1739 22.1707C20.6449 22.7017 19.9275 23 19.1795 23H4.82051C4.07247 23 3.35506 22.7017 2.82611 22.1707C2.29716 21.6397 2 20.9194 2 20.1685V9.09416C2 8.69699 2.18266 8.32206 2.49495 8.07822L11.2129 1.27112ZM12 3L4 9.22006V19.7129C4 20.0543 4.13507 20.3817 4.3755 20.623C4.61594 20.8644 4.94203 21 5.28205 21H18.7179C19.058 21 19.3841 20.8644 19.6245 20.623C19.8649 20.3817 20 20.0543 20 19.7129V9.22006L12 3Z"
        transform={svgRotate(rotate, viewBox)}
      />
      <path
        fillRule="evenodd"
        d="M10 14V22.5C10 22.9322 9.94183 23 9.5 23C9.05817 23 8 22.9322 8 22.5V13.3043C8 12.584 8.59695 12 9.33333 12H14.6667C15.403 12 16 12.584 16 13.3043V22.5C16 22.9322 14.9418 23 14.5 23C14.0582 23 14 22.9322 14 22.5V14H10Z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

HomeIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default HomeIcon
