import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const BoxIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        fill-rule="evenodd"
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM16.9614 7.98917C17.0514 7.71913 16.9811 7.42141 16.7799 7.22013C16.5786 7.01885 16.2809 6.94857 16.0108 7.03858L9.63811 9.16282C9.41371 9.23763 9.23763 9.41371 9.16282 9.63811L7.03858 16.0108C6.94857 16.2809 7.01885 16.5786 7.22013 16.7799C7.42141 16.9811 7.71913 17.0514 7.98917 16.9614L14.3619 14.8372C14.5863 14.7624 14.7624 14.5863 14.8372 14.3619L16.9614 7.98917Z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

BoxIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default BoxIcon
