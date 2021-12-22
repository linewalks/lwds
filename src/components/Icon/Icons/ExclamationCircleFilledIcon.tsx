import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/SVGIcon'
interface IconProps extends SVGIconProps {
  rotate?: number
}

const ExclamationCircleFilledIcon = (props: IconProps) => {
  return (
    <SVGIcon {...props}>
      <circle fill="#FF4C33" cx="12" cy="12" r="10" />
      <path
        fill="#FFF"
        d="M12 15a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm1.439-7.066c0 .368-.196 2.003-.588 4.904-.041.377-.41.664-.851.664s-.81-.287-.852-.664c-.388-2.896-.582-4.53-.582-4.904 0-.56.472-1.432 1.434-1.432.961 0 1.439.88 1.439 1.432z"
      />
    </SVGIcon>
  )
}

ExclamationCircleFilledIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default ExclamationCircleFilledIcon
