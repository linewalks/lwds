import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const CodeIcon = (props: IconProps) => {
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
        d="M15.8427 13.9335L15.7803 14.0067L12 18L8.21967 14.0067C7.92678 13.7031 7.92678 13.2107 8.21967 12.907C8.49003 12.6267 8.91546 12.6051 9.20967 12.8423L9.28033 12.907L11.2515 15.0236L11.2541 9.77593C11.2543 9.34757 11.589 9.00031 12.0022 9C12.3853 8.99971 12.7012 9.29846 12.7446 9.68362L12.7497 9.77479L12.747 15.026L14.7197 12.907C14.99 12.6267 15.4155 12.6051 15.7097 12.8423L15.7803 12.907C16.0507 13.1873 16.0715 13.6284 15.8427 13.9335Z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

CodeIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default CodeIcon
