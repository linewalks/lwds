import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'

const ConceptSetSelectedIcon = (props: SVGIconProps) => {
  return (
    <SVGIcon {...props}>
      <defs>
        <linearGradient
          x1="108.379%"
          y1="41.621%"
          x2="-8.379%"
          y2="41.621%"
          id="k9nf8oeo3a"
        >
          <stop stopColor="#001C53" offset="0%" />
          <stop stopColor="#004191" offset="66.259%" />
          <stop stopColor="#001C53" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="hg7wpahn3b">
          <stop stopColor="#004191" offset="0%" />
          <stop stopColor="#004191" offset="38.411%" />
          <stop stopColor="#001C53" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="0%"
          y1="37.222%"
          x2="259.309%"
          y2="37.222%"
          id="y8tc2cktdc"
        >
          <stop stopColor="#189BFF" offset="0%" />
          <stop stopColor="#8BC8ED" offset="49.996%" />
          <stop stopColor="#FFF5DB" offset="100%" />
          <stop stopColor="#FFF5DB" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="22.655%"
          y1="100%"
          x2="22.655%"
          y2="-143.757%"
          id="2r9odlch0f"
        >
          <stop stopColor="#189BFF" offset="0%" />
          <stop stopColor="#85C5EE" offset="46.995%" />
          <stop stopColor="#FFF5DB" offset="99.898%" />
          <stop stopColor="#FFF5DB" offset="100%" />
        </linearGradient>
        <filter
          x="-7.1%"
          y="-7.7%"
          width="114.3%"
          height="115.4%"
          filterUnits="objectBoundingBox"
          id="9fry0bxj3e"
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
            values="0 0 0 0 0 0 0 0 0 0.352941176 0 0 0 0 0.847058824 0 0 0 0.64 0"
            in="shadowInnerInner1"
          />
        </filter>
        <filter
          x="-7.1%"
          y="-20%"
          width="114.3%"
          height="140%"
          filterUnits="objectBoundingBox"
          id="djy8clq5eh"
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
            values="0 0 0 0 0 0 0 0 0 0.352941176 0 0 0 0 0.847058824 0 0 0 0.64 0"
            in="shadowInnerInner1"
          />
        </filter>
        <path
          d="M0 2.5h14v10.406c0 1.433-3.134 2.594-7 2.594-3.77 0-6.843-1.104-6.994-2.487L0 12.906V2.5z"
          id="224v2dxj3d"
        />
        <path
          d="M7 0C3.134 0 0 1.12 0 2.5S3.134 5 7 5s7-1.12 7-2.5S10.866 0 7 0z"
          id="1yz0tenwsg"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <g fillRule="nonzero">
          <path
            d="M0 2.5h14v10.406c0 1.433-3.134 2.594-7 2.594-3.77 0-6.843-1.104-6.994-2.487L0 12.906V2.5z"
            fill="url(#k9nf8oeo3a)"
            transform="translate(1 1)"
          />
          <path
            d="M7 0C3.134 0 0 1.12 0 2.5S3.134 5 7 5s7-1.12 7-2.5S10.866 0 7 0z"
            fill="url(#hg7wpahn3b)"
            transform="translate(1 1)"
          />
        </g>
        <g transform="translate(9 8)">
          <use fill="url(#y8tc2cktdc)" xlinkHref="#224v2dxj3d" />
          <use fill="#000" filter="url(#9fry0bxj3e)" xlinkHref="#224v2dxj3d" />
        </g>
        <g transform="translate(9 8)">
          <use fill="url(#2r9odlch0f)" xlinkHref="#1yz0tenwsg" />
          <use fill="#000" filter="url(#djy8clq5eh)" xlinkHref="#1yz0tenwsg" />
        </g>
      </g>
    </SVGIcon>
  )
}

export default ConceptSetSelectedIcon
