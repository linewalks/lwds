import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'

const AnalysisSelectedIcon = (props: SVGIconProps) => {
  return (
    <SVGIcon {...props}>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="AnalysisSelectedIcon_a"
        >
          <stop stopColor="#004191" offset="0%" />
          <stop stopColor="#004191" offset="38.411%" />
          <stop stopColor="#001C53" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="66.01%"
          y1="86.022%"
          x2="-34.028%"
          y2="-76.822%"
          id="AnalysisSelectedIcon_b"
        >
          <stop stopColor="#189BFF" offset="0%" />
          <stop stopColor="#FFF5DB" offset="100%" />
        </linearGradient>
        <filter
          x="-6.7%"
          y="-5.9%"
          width="113.3%"
          height="111.8%"
          filterUnits="objectBoundingBox"
          id="AnalysisSelectedIcon_d"
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
          id="AnalysisSelectedIcon_c"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(2.5 1.5)">
          <rect
            fill="url(#AnalysisSelectedIcon_a)"
            fillRule="nonzero"
            width="15"
            height="17"
            rx="1"
          />
          <use
            fill="url(#AnalysisSelectedIcon_b)"
            xlinkHref="#AnalysisSelectedIcon_c"
          />
          <use
            fill="#000"
            filter="url(#AnalysisSelectedIcon_d)"
            xlinkHref="#AnalysisSelectedIcon_c"
          />
          <path d="M14 15h5l-6 6v-5a1 1 0 0 1 1-1z" fill="#004191" />
        </g>
      </g>
    </SVGIcon>
  )
}

export default AnalysisSelectedIcon
