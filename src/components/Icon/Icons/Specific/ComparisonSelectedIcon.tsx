import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const ComparisonSelectedIcon = (props: IconProps) => {
  return (
    <SVGIcon {...props}>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ComparisonSelectedIcon_a"
        >
          <stop stopColor="#004191" offset="0%" />
          <stop stopColor="#004191" offset="38.411%" />
          <stop stopColor="#001C53" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="65.691%"
          y1="86.022%"
          x2="-32.351%"
          y2="-76.822%"
          id="ComparisonSelectedIcon_b"
        >
          <stop stopColor="#189BFF" offset="0%" />
          <stop stopColor="#FFF5DB" offset="100%" />
        </linearGradient>
        <filter
          x="-7.1%"
          y="-6.2%"
          width="114.3%"
          height="112.5%"
          filterUnits="objectBoundingBox"
          id="ComparisonSelectedIcon_d"
        >
          <feGaussianBlur
            stdDeviation="1"
            in="SourceAlpha"
            result="shadowBlurInner1"
          />
          <feOffset in="shadowBlurInner1" result="shadowOffsetInner1" />
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
            result="shadowInnerInner1"
          />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0.354601126 0 0 0 0 0.847959214 0 0 0 0.642465445 0"
            in="shadowInnerInner1"
          />
        </filter>
        <path
          d="M16.513 9c1.743 0 3.411.694 4.627 1.924a2.96 2.96 0 0 1-.057 4.228 3.055 3.055 0 0 1-2.115.848h-7.936C9.358 16 8 14.662 8 13.01c0-.779.309-1.527.86-2.086A6.504 6.504 0 0 1 13.486 9zM15 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"
          id="ComparisonSelectedIcon_c"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          d="M8.513 9c1.743 0 3.411.694 4.627 1.924a2.96 2.96 0 0 1-.057 4.228 3.055 3.055 0 0 1-2.115.848H3.032C1.358 16 0 14.662 0 13.01c0-.779.309-1.527.86-2.086A6.504 6.504 0 0 1 5.486 9zM7 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"
          fill="url(#ComparisonSelectedIcon_a)"
          fillRule="nonzero"
          transform="translate(1 4)"
        />
        <g transform="translate(1 4)">
          <use
            fill="url(#ComparisonSelectedIcon_b)"
            xlinkHref="#ComparisonSelectedIcon_c"
          />
          <use
            fill="#000"
            filter="url(#ComparisonSelectedIcon_d)"
            xlinkHref="#ComparisonSelectedIcon_c"
          />
        </g>
      </g>
    </SVGIcon>
  )
}

ComparisonSelectedIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default ComparisonSelectedIcon
