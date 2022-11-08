import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const HomeFilledIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        fill-rule="evenodd"
        d="M12.7674 1.56311C12.316 1.21203 11.684 1.21203 11.2326 1.56311L2.73257 8.17423C2.42809 8.41105 2.25 8.77518 2.25 9.16092V19.9164C2.25 20.6457 2.53973 21.3452 3.05546 21.8609C3.57118 22.3766 4.27065 22.6664 5 22.6664H9V13.9998C9 13.4475 9.44772 12.9998 10 12.9998H14C14.5523 12.9998 15 13.4475 15 13.9998V22.6664H19C19.7293 22.6664 20.4288 22.3766 20.9445 21.8609C21.4603 21.3452 21.75 20.6457 21.75 19.9164V9.16092C21.75 8.77518 21.5719 8.41105 21.2674 8.17423L12.7674 1.56311Z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

HomeFilledIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default HomeFilledIcon
