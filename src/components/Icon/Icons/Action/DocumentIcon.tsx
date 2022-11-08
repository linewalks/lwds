import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const DocumentIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.87868 1.87868C4.44129 1.31607 5.20435 1 6 1H14C14.2652 1 14.5196 1.10536 14.7071 1.29289L20.7071 7.29289C20.8946 7.48043 21 7.73478 21 8V20C21 20.7957 20.6839 21.5587 20.1213 22.1213C19.5587 22.6839 18.7957 23 18 23H6C5.20435 23 4.44129 22.6839 3.87868 22.1213C3.31607 21.5587 3 20.7957 3 20V4C3 3.20435 3.31607 2.44129 3.87868 1.87868ZM6 3C5.73478 3 5.48043 3.10536 5.29289 3.29289C5.10536 3.48043 5 3.73478 5 4V20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21H18C18.2652 21 18.5196 20.8946 18.7071 20.7071C18.8946 20.5196 19 20.2652 19 20V8.41421L13.5858 3H6Z"
        transform={svgRotate(rotate, viewBox)}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14 1C14.5523 1 15 1.44772 15 2V7H20C20.5523 7 21 7.44772 21 8C21 8.55228 20.5523 9 20 9H14C13.4477 9 13 8.55228 13 8V2C13 1.44772 13.4477 1 14 1Z"
        transform={svgRotate(rotate, viewBox)}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.1 13C7.1 12.5029 7.50294 12.1 8 12.1H16C16.4971 12.1 16.9 12.5029 16.9 13C16.9 13.4971 16.4971 13.9 16 13.9H8C7.50294 13.9 7.1 13.4971 7.1 13Z"
        transform={svgRotate(rotate, viewBox)}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.1 17C7.1 16.5029 7.50294 16.1 8 16.1H16C16.4971 16.1 16.9 16.5029 16.9 17C16.9 17.4971 16.4971 17.9 16 17.9H8C7.50294 17.9 7.1 17.4971 7.1 17Z"
        transform={svgRotate(rotate, viewBox)}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.1 9C7.1 8.50294 7.50294 8.1 8 8.1H10C10.4971 8.1 10.9 8.50294 10.9 9C10.9 9.49706 10.4971 9.9 10 9.9H8C7.50294 9.9 7.1 9.49706 7.1 9Z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

DocumentIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default DocumentIcon
