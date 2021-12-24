import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'

const ProjectSelectedIcon = (props: SVGIconProps) => {
  return (
    <SVGIcon {...props}>
      <defs>
        <linearGradient
          x1="125.248%"
          y1="90.518%"
          x2="-27.059%"
          y2="8.506%"
          id="ProjectSelectedIcon_a"
        >
          <stop stopColor="#001C53" offset="0%" />
          <stop stopColor="#0E96FD" offset="63.025%" />
          <stop stopColor="#FFF5DB" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="-48.049%"
          y1="102.796%"
          x2="149.165%"
          y2="-3.397%"
          id="ProjectSelectedIcon_b"
        >
          <stop stopColor="#001C53" offset="0%" />
          <stop stopColor="#0E96FD" offset="56.94%" />
          <stop stopColor="#FFF5DB" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          d="M1.25 1.25c1.889-1.889 5.495-1.566 9.218.489l.589.338c1.473.883 2.95 2.031 4.335 3.416 1.385 1.384 2.533 2.862 3.415 4.335l.339.589c2.054 3.723 2.377 7.329.489 9.218-1.889 1.888-5.495 1.565-9.218-.489l-.59-.339c-1.472-.882-2.95-2.03-4.334-3.415-1.385-1.385-2.533-2.862-3.416-4.335l-.338-.589C-.316 6.745-.64 3.138 1.249 1.25z"
          fill="url(#ProjectSelectedIcon_a)"
          transform="translate(1.558 1.558)"
        />
        <path
          d="M19.635 1.25c1.888 1.889 1.565 5.495-.489 9.218l-.339.589c-.882 1.473-2.03 2.95-3.415 4.335-1.385 1.385-2.862 2.533-4.335 3.415l-.589.339c-3.723 2.054-7.33 2.377-9.218.489-1.889-1.889-1.566-5.495.489-9.218l.338-.59c.883-1.472 2.031-2.95 3.416-4.334C6.877 4.108 8.355 2.96 9.828 2.077l.589-.338c3.723-2.055 7.329-2.378 9.218-.49z"
          fill="url(#ProjectSelectedIcon_b)"
          opacity=".8"
          transform="translate(1.558 1.558)"
        />
        <path
          d="M12 10.5a1.5 1.5 0 0 1 1.323.792l.038.076a1.494 1.494 0 0 1 0 1.264l-.038.076a1.5 1.5 0 0 1-2.646 0l-.038-.076a1.494 1.494 0 0 1 0-1.264l.038-.076A1.5 1.5 0 0 1 12 10.5z"
          fill="#FFF"
        />
      </g>
    </SVGIcon>
  )
}

export default ProjectSelectedIcon
