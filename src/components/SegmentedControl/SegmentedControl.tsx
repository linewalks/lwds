import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import clsx from 'clsx'

import './SegmentedControl.scss'
import cls from 'helpers/class'

interface ControlProps {
  id?: string
  size: string
  valueList: string[]
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
}

const SegmentedControl = (props: ControlProps) => {
  const {
    id,
    size,
    valueList,
    value: propsValue,
    defaultValue,
    onChange
  } = props

  const longestValue = _.reduce(valueList, (acc: string, value: string): string => {
    return acc.length > value.length ? acc : value
  })

  const [activeValue, setActiveValue] = useState(defaultValue || propsValue || valueList[0])

  const handleChange = (value: string) => {
    propsValue || setActiveValue(value)
    onChange && onChange(value)
  }

  useEffect(() => {
    setActiveValue(propsValue)
  }, [propsValue])

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
        onClick={() => handleChange(value)}
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
