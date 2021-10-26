import React from 'react'

import SVGIcon from '@components/Icon/SVGIcon'

interface ChevronProps {
  color?: string
  width?: number
  height?: number
  direction: 'down' | 'up' | 'left' | 'right'
}

const ChevronIcon = (props: ChevronProps) => {
  const {
    direction
  } = props
  const viewBoxSize = 24

  const angle = {
    down: 0,
    up: 180,
    left: 90,
    right: -90
  }[direction]

  const rotationStr = `rotate(${angle}, ${viewBoxSize / 2}, ${viewBoxSize / 2})`

  return (
    <SVGIcon {...props} viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}>
      <path
        d="M5.707 8.883L12 15.174l6.292-6.291c.39-.39 1.024-.39 1.414 0 .39.39.39 1.024 0 1.414l-7.707 7.708-.707-.708-.016-.017-6.982-6.983c-.39-.39-.39-1.024 0-1.414.39-.39 1.024-.39 1.414 0z"
        transform={rotationStr}
      />
    </SVGIcon>
  )
}

ChevronIcon.defaultProps = {
  direction: 'down'
}

export default ChevronIcon
