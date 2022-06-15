import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import clsx from 'clsx'

import cls from '@helpers/class'

import './ProgressBar.scss'

type InnerNumberType = number | string
type PlacementType = 'top' | 'right' | 'bottom' | 'left'
type SizeType = 'sm' | 'md'

export const validateNumber = (num: any): boolean =>
  !_.isNil(num) &&
  typeof Number(num) === 'number' &&
  !isNaN(num) &&
  Number(num) >= 0

export const getMax = (val: InnerNumberType, max: InnerNumberType): number =>
  validateNumber(max) && val < max ? Number(max) : Number(val)

const calculatePercent = (
  val: InnerNumberType,
  max: InnerNumberType,
): number => {
  const result = _.ceil((Number(val) / Number(max)) * 100)
  return isNaN(result) ? 0 : result
}

interface ProgressBarProps {
  placement?: PlacementType
  value: InnerNumberType
  size?: SizeType
  width?: InnerNumberType
  thickness?: InnerNumberType
  strokeColor?: string
  max?: InnerNumberType
  isInfinite?: boolean
  children?: React.ReactNode
}

const ProgressBar = ({
  placement,
  value,
  size,
  width,
  thickness,
  strokeColor,
  max,
  isInfinite,
  children,
  ...rest
}: ProgressBarProps) => {
  const [percent, setPercent] = useState(null)
  useEffect(() => {
    if (!validateNumber(value)) {
      setPercent(0)
    } else {
      setPercent(calculatePercent(value, getMax(value, max)))
    }
  }, [value, max])

  return (
    <section
      {...rest}
      style={{ minWidth: width, maxWidth: 'fit-content' }}
      className={clsx(cls('progressbar'), cls('progressbar', `${placement}`))}
    >
      <div
        className={clsx(
          cls('progressbar', 'label'),
          cls('progressbar', 'label', `${placement}`),
          cls('progressbar', 'label', `${size}`),
        )}
      >
        <p className={cls('progressbar', 'label', 'text')}>{children}</p>
      </div>

      <div
        className={cls('progressbar', 'state')}
        style={{ minWidth: width, height: thickness }}
      >
        <div
          className={clsx(
            cls('progressbar', 'state', 'current'),
            cls('progressbar', 'state', percent),
            isInfinite && cls('progressbar', 'state', 'infinite'),
          )}
          style={{
            backgroundColor: strokeColor,
            width: isInfinite ? '100%' : `${percent}%`,
          }}
        />
      </div>
    </section>
  )
}

ProgressBar.defaultProps = {
  placement: 'bottom',
  value: 0,
  size: 'sm',
  width: 100,
  thickness: 6,
  isInfinite: false,
}

export default ProgressBar
