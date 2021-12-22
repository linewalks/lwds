import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/SVGIcon'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const ComparisonIcon = (props: IconProps) => {
  return (
    <SVGIcon {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
          <stop stopColor="#848F9A" offset="0%" />
          <stop stopColor="#4E5762" offset="38.411%" />
          <stop stopColor="#4D5661" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="29.064%"
          y1="100%"
          x2="29.066%"
          y2="-41.848%"
          id="d"
        >
          <stop stopColor="#96A0A9" offset="0%" />
          <stop stopColor="#B3BBC2" offset="34.205%" />
          <stop stopColor="#FFF" offset="100%" />
        </linearGradient>
        <filter
          x="-10.7%"
          y="-9.4%"
          width="121.4%"
          height="118.8%"
          filterUnits="objectBoundingBox"
          id="c"
        >
          <feGaussianBlur
            stdDeviation="1.5"
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
            values="0 0 0 0 0.428642203 0 0 0 0 0.471373558 0 0 0 0 0.519446332 0 0 0 0.578793399 0"
            in="shadowInnerInner1"
          />
        </filter>
        <filter
          x="-7.1%"
          y="-6.2%"
          width="114.3%"
          height="112.5%"
          filterUnits="objectBoundingBox"
          id="f"
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
          d="M8.513 9c1.743 0 3.411.694 4.627 1.924a2.96 2.96 0 0 1-.057 4.228 3.055 3.055 0 0 1-2.115.848H3.032C1.358 16 0 14.662 0 13.01c0-.779.309-1.527.86-2.086A6.504 6.504 0 0 1 5.486 9zM7 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"
          id="b"
        />
        <path
          d="M16.513 9c1.743 0 3.411.694 4.627 1.924a2.96 2.96 0 0 1-.057 4.228 3.055 3.055 0 0 1-2.115.848h-7.936C9.358 16 8 14.662 8 13.01c0-.779.309-1.527.86-2.086A6.504 6.504 0 0 1 13.486 9zM15 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"
          id="e"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <g fillRule="nonzero" transform="translate(1 4)">
          <use fill="url(#a)" xlinkHref="#b" />
          <use fill="#000" filter="url(#c)" xlinkHref="#b" />
        </g>
        <g transform="translate(1 4)">
          <use fill="url(#d)" xlinkHref="#e" />
          <use fill="#000" filter="url(#f)" xlinkHref="#e" />
        </g>
      </g>
    </SVGIcon>
  )
}

ComparisonIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default ComparisonIcon
