import React from 'react'
import clsx from 'clsx'

import './ProgressBar.scss'
import cls from '@helpers/class'

interface ProgressBarProps {
  progress: number
  size: 'sm' | 'md' | string
  color: 'primary' | string
}

const ProgressBar = (props: ProgressBarProps) => {
  const {
    progress,
    size,
    color
  } = props
  return (
    <div
      className={clsx(
        cls('progressbar'),
        cls('progressbar', size),
        cls('progressbar', color)
      )}
    >
      <div
        className={clsx(
          cls('progressbar', 'filled'),
          cls('progressbar', color, 'filled')
        )}
        style={{
          width: `${progress * 100}%`
        }}
      />
    </div>
  )
}

ProgressBar.defaultProps = {
  size: 'md',
  color: 'primary'
}

export default ProgressBar
