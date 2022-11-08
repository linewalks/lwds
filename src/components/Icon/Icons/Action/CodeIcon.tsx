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
        d="M7.69929 17.7055L7.79408 17.7892C8.1842 18.0921 8.74793 18.0641 9.10593 17.7055C9.49454 17.3163 9.49453 16.6859 9.10592 16.2967L4.81738 11.9982L9.10489 7.70046C9.49349 7.31125 9.4935 6.68086 9.10489 6.29165L9.01011 6.20795C8.61999 5.9051 8.05625 5.93309 7.69825 6.29164L2.00104 11.9954L2.00338 11.9982L2 12.0018L3.41038 13.4082L7.69929 17.7055Z"
        transform={svgRotate(rotate, viewBox)}
      />
      <path
        d="M16.3006 6.29172L16.2058 6.20803C15.8156 5.90518 15.2519 5.93317 14.8939 6.29173C14.5053 6.68094 14.5053 7.31134 14.8939 7.70055L19.1825 11.9991L14.895 16.2968C14.5063 16.686 14.5063 17.3164 14.895 17.7056L14.9897 17.7893C15.3799 18.0921 15.9436 18.0641 16.3016 17.7056L21.9988 12.0019L21.9965 11.9991L21.9998 11.9955L20.5895 10.5891L16.3006 6.29172Z"
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
