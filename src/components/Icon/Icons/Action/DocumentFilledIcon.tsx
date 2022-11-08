import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const DatabaseIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        fill-rule="evenodd"
        d="M6 1C5.20435 1 4.44129 1.31607 3.87868 1.87868C3.31607 2.44129 3 3.20435 3 4V20C3 20.7957 3.31607 21.5587 3.87868 22.1213C4.44129 22.6839 5.20435 23 6 23H18C18.7957 23 19.5587 22.6839 20.1213 22.1213C20.6839 21.5587 21 20.7957 21 20V8C21 7.73478 20.8946 7.48043 20.7071 7.29289L14.7071 1.29289C14.5196 1.10536 14.2652 1 14 1H6ZM7.25 9C7.25 8.58579 7.58579 8.25 8 8.25H10C10.4142 8.25 10.75 8.58579 10.75 9C10.75 9.41421 10.4142 9.75 10 9.75H8C7.58579 9.75 7.25 9.41421 7.25 9ZM8 12.25C7.58579 12.25 7.25 12.5858 7.25 13C7.25 13.4142 7.58579 13.75 8 13.75H16C16.4142 13.75 16.75 13.4142 16.75 13C16.75 12.5858 16.4142 12.25 16 12.25H8ZM7.25 17C7.25 16.5858 7.58579 16.25 8 16.25H16C16.4142 16.25 16.75 16.5858 16.75 17C16.75 17.4142 16.4142 17.75 16 17.75H8C7.58579 17.75 7.25 17.4142 7.25 17ZM14 3L19 8H15C14.4477 8 14 7.55228 14 7V3Z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

DatabaseIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default DatabaseIcon
