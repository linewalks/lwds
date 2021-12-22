import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/SVGIcon'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const DocumentSelectedIcon = (props: IconProps) => {
  return (
    <SVGIcon {...props}>
      <defs>
        <linearGradient
          x1="66.01%"
          y1="86.022%"
          x2="-34.028%"
          y2="-76.822%"
          id="a"
        >
          <stop stop-color="#189BFF" offset="0%" />
          <stop stop-color="#FFF5DB" offset="100%" />
        </linearGradient>
        <filter
          x="-6.7%"
          y="-5.9%"
          width="113.3%"
          height="111.8%"
          filterUnits="objectBoundingBox"
          id="c"
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
          d="M1 0h12.997a1 1 0 0 1 1 1v9.942L9 16.967H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1z"
          id="b"
        />
      </defs>
      <g fill="none" fill-rule="evenodd">
        <path d="M0 0h24v24H0z" />
        <g transform="translate(4.503 3.533)">
          <use fill="url(#a)" href="#b" />
          <use fill="#000" filter="url(#c)" href="#b" />
        </g>
        <path d="M14.5 14.5h5l-6 6v-5a1 1 0 0 1 1-1z" fill="#004191" />
      </g>
    </SVGIcon>
  )
}

DocumentSelectedIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default DocumentSelectedIcon
