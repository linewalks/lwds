import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const ListIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M20.1 5C20.5971 5 21 5.44772 21 6C21 6.55228 20.5971 7 20.1 7H3.9C3.40294 7 3 6.55228 3 6C3 5.44772 3.40294 5 3.9 5H20.1ZM20.1 11C20.5971 11 21 11.4477 21 12C21 12.5523 20.5971 13 20.1 13H3.9C3.40294 13 3 12.5523 3 12C3 11.4477 3.40294 11 3.9 11H20.1ZM20.1 17C20.5971 17 21 17.4477 21 18C21 18.5523 20.5971 19 20.1 19H3.9C3.40294 19 3 18.5523 3 18C3 17.4477 3.40294 17 3.9 17H20.1Z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

ListIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default ListIcon
