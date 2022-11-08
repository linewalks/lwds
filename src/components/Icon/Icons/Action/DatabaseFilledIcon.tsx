import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const DatabaseFilledIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M4.21489 3.68975C3.85256 4.02288 3.75 4.29753 3.75 4.5C3.75 4.70247 3.85256 4.97712 4.21489 5.31025C4.57786 5.64398 5.14448 5.97899 5.90787 6.27587C7.4299 6.86777 9.58354 7.25 12 7.25C14.4165 7.25 16.5701 6.86777 18.0921 6.27587C18.8555 5.97899 19.4221 5.64398 19.7851 5.31025C20.1474 4.97712 20.25 4.70247 20.25 4.5C20.25 4.29753 20.1474 4.02288 19.7851 3.68975C19.4221 3.35602 18.8555 3.02101 18.0921 2.72413C16.5701 2.13223 14.4165 1.75 12 1.75C9.58354 1.75 7.4299 2.13223 5.90787 2.72413C5.14448 3.02101 4.57786 3.35602 4.21489 3.68975Z"
        transform={svgRotate(rotate, viewBox)}
      />
      <path
        d="M20.8004 6.41446C21.2718 5.98096 21.6344 5.44271 21.727 4.81485C21.742 4.87407 21.75 4.9361 21.75 5V11.023L21.376 11.584C21.0117 12.1305 20.088 12.8099 18.4703 13.3513C16.8811 13.8832 14.7139 14.25 12 14.25C9.28614 14.25 7.11893 13.8832 5.52974 13.3513C3.91209 12.8099 2.98838 12.1305 2.62406 11.584L2.25 11.0229V5C2.25 4.9361 2.25799 4.87407 2.27303 4.81484C2.36557 5.4427 2.72815 5.98096 3.19964 6.41446C3.74752 6.9182 4.49892 7.33738 5.3642 7.67388C7.09954 8.34873 9.4459 8.75 12 8.75C14.5541 8.75 16.9005 8.34873 18.6358 7.67388C19.5011 7.33738 20.2525 6.9182 20.8004 6.41446Z"
        transform={svgRotate(rotate, viewBox)}
      />
      <path
        d="M2.25 13.3419V19C2.25 19.7408 2.6974 20.329 3.23733 20.7569C3.78475 21.1907 4.53097 21.548 5.3875 21.8339C7.10832 22.4084 9.44243 22.75 12 22.75C14.5576 22.75 16.8917 22.4084 18.6125 21.8339C19.469 21.548 20.2153 21.1907 20.7627 20.7569C21.3026 20.329 21.75 19.7408 21.75 19V13.342C21.05 13.9022 20.0947 14.3894 18.9464 14.7737C17.1745 15.3668 14.8417 15.75 12 15.75C9.15835 15.75 6.82557 15.3668 5.05364 14.7737C3.90532 14.3894 2.95002 13.9022 2.25 13.3419Z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

DatabaseFilledIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default DatabaseFilledIcon