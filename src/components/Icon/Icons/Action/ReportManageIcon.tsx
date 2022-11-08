import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const ReportManageIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M17.197 8.96967C17.4899 9.26256 17.4899 9.73744 17.197 10.0303L10.7803 16.447C10.4874 16.7399 10.0125 16.7399 9.71965 16.447L6.80298 13.5303C6.51009 13.2374 6.51009 12.7626 6.80298 12.4697C7.09588 12.1768 7.57075 12.1768 7.86364 12.4697L10.25 14.856L16.1363 8.96967C16.4292 8.67678 16.9041 8.67678 17.197 8.96967Z"
        transform={svgRotate(rotate, viewBox)}
      />
      <path
        fill-rule="evenodd"
        d="M7.25 3.25V3C7.25 2.0335 8.0335 1.25 9 1.25H15C15.9665 1.25 16.75 2.0335 16.75 3V3.25H19C19.9665 3.25 20.75 4.0335 20.75 5V21C20.75 21.9665 19.9665 22.75 19 22.75H5C4.0335 22.75 3.25 21.9665 3.25 21V5C3.25 4.0335 4.0335 3.25 5 3.25H7.25ZM7.25 6C7.25 6.9665 8.0335 7.75 9 7.75H15C15.9665 7.75 16.75 6.9665 16.75 6V4.75H19C19.1381 4.75 19.25 4.86193 19.25 5V21C19.25 21.1381 19.1381 21.25 19 21.25H5C4.86193 21.25 4.75 21.1381 4.75 21V5C4.75 4.86193 4.86193 4.75 5 4.75H7.25V6ZM9 6.25C8.86193 6.25 8.75 6.13807 8.75 6V3C8.75 2.86193 8.86193 2.75 9 2.75H15C15.1381 2.75 15.25 2.86193 15.25 3V6C15.25 6.13807 15.1381 6.25 15 6.25H9Z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

ReportManageIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default ReportManageIcon
