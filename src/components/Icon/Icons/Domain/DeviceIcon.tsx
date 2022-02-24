import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const DeviceIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M21.5 4c.552 0 1 .478 1 1.067v13.866c0 .59-.448 1.067-1 1.067h-19c-.552 0-1-.478-1-1.067V5.067c0-.59.448-1.067 1-1.067h19zm-11 5-1.4 2.05a.727.727 0 0 1-.548.393l-.102.007H3.1L3.1 18.4h17.8v-6.951l-4.976.001-1.908 2.395a.728.728 0 0 1-1.2.016l-.055-.094L10.5 9zm7.7 5.9a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zm-11 .4a.8.8 0 1 1 0 1.6H5.3a.8.8 0 1 1 0-1.6h1.9zm5 0a.8.8 0 1 1 0 1.6h-1.9a.8.8 0 1 1 0-1.6h1.9zm8.7-9.7H3.1l-.001 4.399L8 10l1.85-2.945a.728.728 0 0 1 1.244-.094l.056.094L13.5 12l1.43-1.677a.727.727 0 0 1 .502-.316l.103-.007 5.365-.001V5.6z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

DeviceIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default DeviceIcon
