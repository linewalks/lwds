import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const FileGroupFilledIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        fillRule="evenodd"
        d="M4 22C3.27065 22 2.5 21.8891 1.80546 21.1945C1.11091 20.5 1 19.7293 1 19V5C1 4.27065 1.28973 3.32118 1.80546 2.80546C2.32118 2.28973 3.27065 2 4 2H9.09861C9.34938 2 9.58355 2.12533 9.72265 2.33397L11.5 5H20C20.7293 5 21.5 5.11091 22.1945 5.80546C22.8098 6.42071 23 7.27065 23 8V19C23 19.7293 22.8891 20.5 22.1945 21.1945C21.5 21.8891 20.7293 22 20 22H4Z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

FileGroupFilledIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default FileGroupFilledIcon
