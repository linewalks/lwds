import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const SortIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="m5.18 15.37.074.08 5.511 5.354-.002.003 1.233 1.197.003-.003.002.002 1.233-1.197-.002-.002 5.511-5.353a.83.83 0 0 0 .074-1.117l-.074-.08a.879.879 0 0 0-.507-.242l-.113-.008H5.871a.882.882 0 0 0-.617.248.83.83 0 0 0-.073 1.117z"
        transform={svgRotate(rotate, viewBox)}
      />
      <path
        d="m5.18 8.64.074-.081 5.511-5.354-.002-.003 1.233-1.198.003.003.002-.002 1.233 1.198-.002.002 5.511 5.353a.83.83 0 0 1 .074 1.116l-.074.081a.879.879 0 0 1-.507.242l-.113.007H5.871a.882.882 0 0 1-.617-.248.83.83 0 0 1-.073-1.117z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

SortIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default SortIcon
