import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const CompassIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        fill-rule="evenodd"
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        transform={svgRotate(rotate, viewBox)}
      />
      <path
        fill-rule="evenodd"
        d="M16.7799 7.22013C16.9811 7.42141 17.0514 7.71913 16.9614 7.98917L14.8372 14.3619C14.7624 14.5863 14.5863 14.7624 14.3619 14.8372L7.98917 16.9614C7.71913 17.0514 7.42141 16.9811 7.22013 16.7799C7.01885 16.5786 6.94857 16.2809 7.03858 16.0108L9.16282 9.63812C9.23763 9.41371 9.41371 9.23763 9.63812 9.16282L16.0108 7.03858C16.2809 6.94857 16.5786 7.01885 16.7799 7.22013ZM10.5 10.5L9.16282 14.8372L13.5 13.5L14.8372 9.16282L10.5 10.5Z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

CompassIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default CompassIcon
