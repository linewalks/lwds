import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const FileUploadIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        fill-rule="evenodd"
        d="M3.87868 1.87868C4.44129 1.31607 5.20435 1 6 1H14C14.2652 1 14.5196 1.10536 14.7071 1.29289L20.7071 7.29289C20.8946 7.48043 21 7.73478 21 8V20C21 20.7957 20.6839 21.5587 20.1213 22.1213C19.5587 22.6839 18.7957 23 18 23H6C5.20435 23 4.44129 22.6839 3.87868 22.1213C3.31607 21.5587 3 20.7957 3 20V4C3 3.20435 3.31607 2.44129 3.87868 1.87868ZM6 3C5.73478 3 5.48043 3.10536 5.29289 3.29289C5.10536 3.48043 5 3.73478 5 4V20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21H18C18.2652 21 18.5196 20.8946 18.7071 20.7071C18.8946 20.5196 19 20.2652 19 20V8.41421L13.5858 3H6Z"
        transform={svgRotate(rotate, viewBox)}
      />
      <path
        fill-rule="evenodd"
        d="M14 1C14.5523 1 15 1.44772 15 2V7H20C20.5523 7 21 7.44772 21 8C21 8.55228 20.5523 9 20 9H14C13.4477 9 13 8.55228 13 8V2C13 1.44772 13.4477 1 14 1Z"
        transform={svgRotate(rotate, viewBox)}
      />
      <path
        fill-rule="evenodd"
        d="M8.15728 13.0665L8.21967 12.9933L12 9L15.7803 12.9933C16.0732 13.2969 16.0732 13.7893 15.7803 14.093C15.51 14.3733 15.0845 14.3949 14.7903 14.1577L14.7197 14.093L12.7485 11.9764L12.7459 17.2241C12.7457 17.6524 12.411 17.9997 11.9978 18C11.6147 18.0003 11.2988 17.7015 11.2554 17.3164L11.2503 17.2252L11.253 11.974L9.28033 14.093C9.00997 14.3733 8.58454 14.3949 8.29033 14.1577L8.21967 14.093C7.94931 13.8127 7.92851 13.3716 8.15728 13.0665Z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

FileUploadIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default FileUploadIcon
