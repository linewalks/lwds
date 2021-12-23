import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const CohortIcon = (props: IconProps) => {
  return (
    <SVGIcon {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CohortIcon_a">
          <stop stopColor="#848F9A" offset="0%" />
          <stop stopColor="#4E5762" offset="38.411%" />
          <stop stopColor="#4D5661" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="29.064%"
          y1="100%"
          x2="29.066%"
          y2="-41.848%"
          id="CohortIcon_b"
        >
          <stop stopColor="#96A0A9" offset="0%" />
          <stop stopColor="#B3BBC2" offset="34.205%" />
          <stop stopColor="#FFF" offset="100%" />
        </linearGradient>
        <filter
          x="-7.1%"
          y="-6.2%"
          width="114.3%"
          height="112.5%"
          filterUnits="objectBoundingBox"
          id="CohortIcon_d"
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
          d="M16.513 15c1.743 0 3.411.694 4.627 1.924a2.96 2.96 0 0 1-.057 4.228 3.055 3.055 0 0 1-2.115.848h-7.936C9.358 22 8 20.662 8 19.01c0-.779.309-1.527.86-2.086A6.504 6.504 0 0 1 13.486 15zM15 6a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"
          id="CohortIcon_c"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          d="M8 0c4.318 0 7.837 1.283 7.994 2.888L16 3v1.59a5.5 5.5 0 0 0-4.91 9.276 7.95 7.95 0 0 0-3.297 2.004 4.478 4.478 0 0 0-1.166 2.085C2.969 17.72.161 16.553.007 15.131L0 15.007V3l.006-.112C.163 1.283 3.682 0 8 0z"
          fill="url(#CohortIcon_a)"
          fillRule="nonzero"
          transform="translate(1 1)"
        />
        <g transform="translate(1 1)">
          <use fill="url(#CohortIcon_b)" xlinkHref="#CohortIcon_c" />
          <use
            fill="#000"
            filter="url(#CohortIcon_d)"
            xlinkHref="#CohortIcon_c"
          />
        </g>
      </g>
    </SVGIcon>
  )
}

CohortIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default CohortIcon
