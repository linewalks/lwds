import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const ReportManageFilledIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        fillRule="evenodd"
        d="M7.25 3V3.25H5C4.0335 3.25 3.25 4.0335 3.25 5V21C3.25 21.9665 4.0335 22.75 5 22.75H19C19.9665 22.75 20.75 21.9665 20.75 21V5C20.75 4.0335 19.9665 3.25 19 3.25H16.75V3C16.75 2.0335 15.9665 1.25 15 1.25H9C8.0335 1.25 7.25 2.0335 7.25 3ZM9 2.75C8.86193 2.75 8.75 2.86193 8.75 3V6C8.75 6.13807 8.86193 6.25 9 6.25H15C15.1381 6.25 15.25 6.13807 15.25 6V3C15.25 2.86193 15.1381 2.75 15 2.75H9ZM17.1969 8.96967C17.4898 9.26256 17.4898 9.73744 17.1969 10.0303L10.7802 16.447C10.4874 16.7399 10.0125 16.7399 9.71959 16.447L6.80292 13.5303C6.51003 13.2374 6.51003 12.7626 6.80292 12.4697C7.09582 12.1768 7.57069 12.1768 7.86358 12.4697L10.2499 14.856L16.1363 8.96967C16.4291 8.67678 16.904 8.67678 17.1969 8.96967Z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

ReportManageFilledIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default ReportManageFilledIcon
