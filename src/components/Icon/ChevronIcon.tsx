import React from 'react'

import SVGIcon from '@components/Icon/SVGIcon'

interface ChevronProps {
  color?: string
  width?: number
  height?: number
  direction: 'down' | 'up'
}

const ChevronIcon = (props: ChevronProps) => {
  const {
    direction
  } = props
  const viewBoxSize = 16
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
        d="M 4.708 5.882
           L 8 9.171 l3.293-3.289c.36-.36.928-.387
           1.32-.083l.095.084c.361.36.39.927.084
           1.32l-.083.093-3.293 3.29-1.416
           1.415-1.415-1.414v-.002
           L3.293 7.296c-.361-.36-.39-.927-.084-1.319l.083-.094h.001c.391-.39 1.024-.39 1.415 0z
           "
        transform={rotationStr}
      />
    </SVGIcon>
  )
}

ChevronIcon.defaultProps = {
  direction: 'down'
}

export default ChevronIcon