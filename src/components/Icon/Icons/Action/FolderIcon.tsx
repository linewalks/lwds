import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const FolderIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M4.25 4C3.91848 4 3.60054 4.1317 3.36612 4.36612C3.1317 4.60054 3 4.91848 3 5.25V18.75C3 19.0815 3.1317 19.3995 3.36612 19.6339C3.60054 19.8683 3.91848 20 4.25 20H19H19.75C20.0815 20 20.3995 19.8683 20.6339 19.6339C20.8683 19.3995 21 19.0815 21 18.75V18V8.25C21 7.91848 20.8683 7.60054 20.6339 7.36612C20.3995 7.1317 20.0815 7 19.75 7H11C10.7492 7 10.5151 6.87467 10.376 6.66603L8.59861 4H4.25ZM19 22H4C3.27065 22 2.5 21.8891 1.80546 21.1945C1.11091 20.5 1 19.7293 1 19V5C1 4.27065 1.28973 3.32118 1.80546 2.80546C2.32118 2.28973 3.27065 2 4 2H9.09861C9.34938 2 9.58355 2.12533 9.72265 2.33397L11.5 5H20C20.7293 5 21.5 5.11091 22.1945 5.80546C22.8098 6.42071 23 7.27065 23 8V18V19C23 19.7293 22.8891 20.5 22.1945 21.1945C21.5 21.8891 20.7293 22 20 22H19Z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

FolderIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default FolderIcon
