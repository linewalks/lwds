import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const CheckboxUncheckedIcon = (props: IconProps) => {
  return (
    <SVGIcon {...props}>
      <path
        d="M20 0a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h16zm0 2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"
        fill="#6C7A89"
        fillRule="evenodd"
      />
    </SVGIcon>
  )
}

CheckboxUncheckedIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default CheckboxUncheckedIcon
