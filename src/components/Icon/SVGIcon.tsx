import React from 'react'

export interface IconProps {
  color: string
  width: number
  height: number
  viewBox: string
  children: React.ReactNode
}

const SVGIcon = (props: IconProps) => {
  const {
    color,
    width,
    height,
    viewBox,
    children
  } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      fill={color}  //"#4D5661"
    >
      {children}
    </svg>
  )
}

SVGIcon.defaultProps = {
  color: '#000',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24'
}

export default SVGIcon