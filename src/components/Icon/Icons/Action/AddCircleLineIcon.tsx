import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const AddCircleLineIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" />
      <path
        d="M11.9998 6.50024C12.4684 6.50024 12.8483 6.87894 12.8483 7.34609V11.1356H16.6515C17.1201 11.1356 17.5 11.5143 17.5 11.9814C17.5 12.4486 17.1201 12.8273 16.6515 12.8273H12.8483V16.6544C12.8483 17.1215 12.4684 17.5002 11.9998 17.5002C11.5312 17.5002 11.1513 17.1215 11.1513 16.6544V12.8264L7.3486 12.8273C6.87999 12.8273 6.5001 12.4486 6.5001 11.9814C6.5001 11.5143 6.87999 11.1356 7.3486 11.1356L11.1513 11.1348L11.1513 7.34609C11.1513 6.87894 11.5312 6.50024 11.9998 6.50024Z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

AddCircleLineIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default AddCircleLineIcon
