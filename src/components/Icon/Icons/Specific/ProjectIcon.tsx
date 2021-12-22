import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const ProjectIcon = (props: IconProps) => {
  return (
    <SVGIcon {...props}>
      <defs>
        <linearGradient x1="50%" y1="118.671%" x2="50%" y2="-28.29%" id="a">
          <stop stopColor="#4D5660" offset="0%" />
          <stop stopColor="#B4BBC2" offset="61.885%" />
          <stop stopColor="#FFF5DB" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="107.95%" x2="50%" y2="-25.263%" id="b">
          <stop stopColor="#4E5762" offset="0%" />
          <stop stopColor="#B4BBC2" offset="50.636%" />
          <stop stopColor="#FFF5DB" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          d="M14.142 1.142c2.671 0 4.993 2.778 6.173 6.864l.177.656c.417 1.665.65 3.522.65 5.48 0 1.958-.233 3.815-.65 5.48l-.177.656c-1.18 4.086-3.502 6.864-6.173 6.864-2.67 0-4.993-2.778-6.173-6.864l-.176-.655c-.418-1.666-.65-3.523-.65-5.48 0-1.959.232-3.816.65-5.481l.176-.656c1.18-4.086 3.502-6.864 6.173-6.864z"
          fill="url(#a)"
          transform="rotate(-45 10.485 15.657)"
        />
        <path
          d="M14.142 1.142c2.671 0 4.993 2.778 6.173 6.864l.177.656c.417 1.665.65 3.522.65 5.48 0 1.958-.233 3.815-.65 5.48l-.177.656c-1.18 4.086-3.502 6.864-6.173 6.864-2.67 0-4.993-2.778-6.173-6.864l-.176-.655c-.418-1.666-.65-3.523-.65-5.48 0-1.959.232-3.816.65-5.481l.176-.656c1.18-4.086 3.502-6.864 6.173-6.864z"
          fill="url(#b)"
          opacity=".8"
          transform="rotate(45 15.657 10.485)"
        />
        <path
          d="M12 10.5a1.5 1.5 0 0 1 1.323.792l.038.076a1.494 1.494 0 0 1 0 1.264l-.038.076a1.5 1.5 0 0 1-2.646 0l-.038-.076a1.494 1.494 0 0 1 0-1.264l.038-.076A1.5 1.5 0 0 1 12 10.5z"
          fill="#FFF"
        />
      </g>
    </SVGIcon>
  )
}

ProjectIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default ProjectIcon
