import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'

const DocumentIcon = (props: SVGIconProps) => {
  return (
    <SVGIcon {...props}>
      <defs>
        <linearGradient
          x1="28.638%"
          y1="100%"
          x2="28.64%"
          y2="-41.848%"
          id="DocumentIcon_a"
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
          id="DocumentIcon_c"
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
          d="M1 0h12.997a1 1 0 0 1 1 1v9.942L9 16.967H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1z"
          id="DocumentIcon_b"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <g transform="translate(4.503 3.533)">
          <use fill="url(#DocumentIcon_a)" xlinkHref="#DocumentIcon_b" />
          <use
            fill="#000"
            filter="url(#DocumentIcon_c)"
            xlinkHref="#DocumentIcon_b"
          />
        </g>
        <path d="M14.5 14.5h5l-6 6v-5a1 1 0 0 1 1-1z" fill="#4D5661" />
      </g>
    </SVGIcon>
  )
}

export default DocumentIcon
