import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const AnalysisIcon = (props: IconProps) => {
  return (
    <SVGIcon {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AnalysisIcon_a">
          <stop stopColor="#848F9A" offset="0%" />
          <stop stopColor="#4E5762" offset="38.411%" />
          <stop stopColor="#4D5661" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="28.638%"
          y1="100%"
          x2="28.64%"
          y2="-41.848%"
          id="AnalysisIcon_b"
        >
          <stop stopColor="#96A0A9" offset="0%" />
          <stop stopColor="#B3BBC2" offset="34.205%" />
          <stop stopColor="#FFF" offset="100%" />
        </linearGradient>
        <filter
          x="-6.7%"
          y="-5.9%"
          width="113.3%"
          height="111.8%"
          filterUnits="objectBoundingBox"
          id="AnalysisIcon_d"
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
            values="0 0 0 0 0.300940406 0 0 0 0 0.337563612 0 0 0 0 0.378764719 0 0 0 0.5 0"
            in="shadowInnerInner1"
          />
        </filter>
        <path
          d="M5.003 4.033H18a1 1 0 0 1 1 1v9.941L13.004 21h-8a1 1 0 0 1-1-1V5.033a1 1 0 0 1 1-1z"
          id="AnalysisIcon_c"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <g transform="translate(2.5 1.5)">
          <rect
            fill="url(#AnalysisIcon_a)"
            fillRule="nonzero"
            width="15"
            height="17"
            rx="1"
          />
          <use fill="url(#AnalysisIcon_b)" xlinkHref="#AnalysisIcon_c" />
          <use
            fill="#000"
            filter="url(#AnalysisIcon_d)"
            xlinkHref="#AnalysisIcon_c"
          />
          <path d="M14 15h5l-6 6v-5a1 1 0 0 1 1-1z" fill="#4D5661" />
        </g>
      </g>
    </SVGIcon>
  )
}

AnalysisIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default AnalysisIcon
