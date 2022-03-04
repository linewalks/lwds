import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'

const ConceptSetIcon = (props: SVGIconProps) => {
  return (
    <SVGIcon {...props}>
      <defs>
        <linearGradient
          x1="108.379%"
          y1="41.621%"
          x2="-8.379%"
          y2="41.621%"
          id="96whp9apva"
        >
          <stop stopColor="#848F9A" offset="0%" />
          <stop stopColor="#4E5762" offset="66.259%" />
          <stop stopColor="#4D5661" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="-16.759%"
          x2="50%"
          y2="100%"
          id="25j2332z2b"
        >
          <stop stopColor="#848F9A" offset="0%" />
          <stop stopColor="#4E5762" offset="66.259%" />
          <stop stopColor="#4D5661" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="0%"
          y1="38.983%"
          x2="136.568%"
          y2="39.784%"
          id="fzyky4csdc"
        >
          <stop stopColor="#96A0A9" offset="0%" />
          <stop stopColor="#B3BBC2" offset="48.569%" />
          <stop stopColor="#FFF" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="22.655%"
          y1="56.378%"
          x2="22.658%"
          y2="38.285%"
          id="joqx3vufef"
        >
          <stop stopColor="#96A0A9" offset="0%" />
          <stop stopColor="#B3BBC2" offset="34.205%" />
          <stop stopColor="#FFF" offset="100%" />
        </linearGradient>
        <filter
          x="-7.1%"
          y="-7.7%"
          width="114.3%"
          height="115.4%"
          filterUnits="objectBoundingBox"
          id="gbcofuowde"
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
        <filter
          x="-7.1%"
          y="-20%"
          width="114.3%"
          height="140%"
          filterUnits="objectBoundingBox"
          id="egswzew00h"
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
          d="M0 2.5h14v10.406c0 1.433-3.134 2.594-7 2.594-3.77 0-6.843-1.104-6.994-2.487L0 12.906V2.5z"
          id="fzkmxywxsd"
        />
        <path
          d="M7 0C3.134 0 0 1.12 0 2.5S3.134 5 7 5s7-1.12 7-2.5S10.866 0 7 0z"
          id="dltkpkqnmg"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <g fillRule="nonzero">
          <path
            d="M0 2.5h14v10.406c0 1.433-3.134 2.594-7 2.594-3.77 0-6.843-1.104-6.994-2.487L0 12.906V2.5z"
            fill="url(#96whp9apva)"
            transform="translate(1 1)"
          />
          <path
            d="M7 0C3.134 0 0 1.12 0 2.5S3.134 5 7 5s7-1.12 7-2.5S10.866 0 7 0z"
            fill="url(#25j2332z2b)"
            transform="translate(1 1)"
          />
        </g>
        <g transform="translate(9 8)">
          <use fill="url(#fzyky4csdc)" xlinkHref="#fzkmxywxsd" />
          <use fill="#000" filter="url(#gbcofuowde)" xlinkHref="#fzkmxywxsd" />
        </g>
        <g transform="translate(9 8)">
          <use fill="url(#joqx3vufef)" xlinkHref="#dltkpkqnmg" />
          <use fill="#000" filter="url(#egswzew00h)" xlinkHref="#dltkpkqnmg" />
        </g>
      </g>
    </SVGIcon>
  )
}

export default ConceptSetIcon
