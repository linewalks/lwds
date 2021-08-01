import React, { useState } from 'react'
import _ from 'lodash'
import clsx from 'clsx'

import './SegmentedControl.scss'
import cls from 'helpers/class'

interface ControlProps {
  id?: string
  size: string
  valueList: string[]
  defaultValue: string
}

const SegmentedControl = (props: ControlProps) => {
  const {
    id,
    size,
    valueList,
    defaultValue
  } = props

  const longestValue = _.reduce(valueList, (acc: string, value: string): string => {
    return acc.length > value.length ? acc : value
  })

  const [activeValue, setActiveValue] = useState(defaultValue || valueList[0])

  // hidden_text exists for
  // making button width matches to longest value
  const renderButton = (value: string) => {
    return (
      <button
        className={clsx(
          cls('segmented', 'btn'),
          cls('segmented', 'btn', size),
          value === activeValue ? cls('segmented', 'active') : null
        )}
        onClick={() => setActiveValue(value)}
      >
        <div
          className={cls('segmented', 'btn', 'text')}
        >
          {value}
        </div>
        <div
          className={cls('segmented', 'btn', 'hidden_text')}
        >
         {longestValue}
        </div>
      </button>
    )
  }

  return (
    <div
      id={id}
      className={clsx(
        cls('segmented'),
        cls('segmented', size)
      )}
    >
      {_.map(valueList, renderButton)}
    </div>
  )
}

SegmentedControl.defaultProps = {
  size: 'md',
  valueList: ['A', 'B']
}

export default SegmentedControl
