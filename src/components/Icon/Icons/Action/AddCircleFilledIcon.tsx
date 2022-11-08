import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const AddCircleFilledIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        fillRule="evenodd"
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM11.9999 6C12.4772 6 12.8641 6.38691 12.8641 6.8642V11.1358H17.1358C17.6131 11.1358 18 11.5227 18 12C18 12.4773 17.6131 12.8642 17.1358 12.8642H12.8641V17.1358C12.8641 17.6131 12.4772 18 11.9999 18C11.5226 18 11.1357 17.6131 11.1357 17.1358V12.8633L6.8642 12.8642C6.38691 12.8642 6 12.4773 6 12C6 11.5227 6.38691 11.1358 6.8642 11.1358L11.1357 11.135V6.8642C11.1357 6.38691 11.5226 6 11.9999 6Z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

AddCircleFilledIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default AddCircleFilledIcon
