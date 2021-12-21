import React from 'react'

import cls from '@helpers/class'

export interface IconProps {
  color?: string
  width: number
  height: number
  viewBox: string
  size?: string | 'icon-xs' | 'icon-sm' | 'icon-md' | 'icon-lg' | 'icon-xl'
  responsive: boolean
  children: React.ReactNode
}

const SVGIcon = (props: IconProps) => {
  const { color, width, height, viewBox, size, responsive, children, ...rest } =
    props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      fill={color}
      className={
        size && responsive
          ? cls('icon', 'responsive', size.split('-')[1])
          : size
      }
      {...rest}
    >
      {children}
    </svg>
  )
}

SVGIcon.defaultProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  responsive: false,
}

export default SVGIcon
