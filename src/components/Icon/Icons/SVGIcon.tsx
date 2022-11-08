import React from 'react'

import { $color_icon_02 } from '@assets/styles/color/semantics'
import { icon } from '@assets/styles/size/semantics'

import cls from '@helpers/class'
import '@components/Icon/Icons/Icon.scss'

export interface SVGIconProps {
  color?: string
  width?: number
  height?: number
  viewBox?: string
  size?: string | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  responsive?: boolean
  flip?: 'x' | 'y'
  children?: React.ReactNode
}

const SVGIcon = (props: SVGIconProps) => {
  const {
    color,
    width,
    height,
    viewBox,
    size,
    responsive,
    flip,
    children,
    ...rest
  } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      fill={color}
      className={
        size &&
        (responsive ? cls('icon', 'responsive', size) : cls('icon', size))
      }
      transform={
        flip ? (flip === 'x' ? 'scale(1, -1)' : 'scale(-1, 1)') : 'scale(1,1)'
      }
      {...rest}
    >
      {children}
    </svg>
  )
}

SVGIcon.defaultProps = {
  color: $color_icon_02,
  width: icon.$icon_md,
  height: icon.$icon_md,
  viewBox: `0 0 24 24`,
  responsive: false,
}

export default SVGIcon
