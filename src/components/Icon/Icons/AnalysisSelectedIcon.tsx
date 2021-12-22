import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/SVGIcon'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const AnalysisSelectedIcon = (props: IconProps) => {
  return (
    <SVGIcon {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
          <stop stop-color="#004191" offset="0%" />
          <stop stop-color="#004191" offset="38.411%" />
          <stop stop-color="#001C53" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="66.01%"
          y1="86.022%"
          x2="-34.028%"
          y2="-76.822%"
          id="b"
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
          id="d"
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
          d="M5.003 4.033H18a1 1 0 0 1 1 1v9.941L13.004 21h-8a1 1 0 0 1-1-1V5.033a1 1 0 0 1 1-1z"
          id="c"
        />
      </defs>
      <g fill="none" fill-rule="evenodd">
        <path d="M0 0h24v24H0z" />
        <g transform="translate(2.5 1.5)">
          <rect
            fill="url(#a)"
            fill-rule="nonzero"
            width="15"
            height="17"
            rx="1"
          />
          <use fill="url(#b)" href="#c" />
          <use fill="#000" filter="url(#d)" href="#c" />
          <path d="M14 15h5l-6 6v-5a1 1 0 0 1 1-1z" fill="#004191" />
        </g>
      </g>
    </SVGIcon>
  )
}

AnalysisSelectedIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default AnalysisSelectedIcon
