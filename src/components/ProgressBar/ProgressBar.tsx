import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import './ProgressBar.scss'
import clsx from 'clsx'

import cls from '@helpers/class'

interface ProgressBarProps {
  placement?: 'top' | 'right' | 'bottom' | 'left'
  size?: 'sm' | 'md'
  value: string | number
  width?: string | number
  thickness?: string | number
  isInfinite?: boolean
  isNotExistLabel?: boolean
  customLabel?: React.ReactNode | string
  strokeColor?: string
  prefix?: string
  suffix?: string
}

const ProgressBar = ({
  placement,
  size,
  value,
  width,
  thickness,
  isInfinite,
  isNotExistLabel,
  customLabel,
  strokeColor,
  prefix,
  suffix,
  ...rest
}: ProgressBarProps) => {
  const percent = _.floor(Number(value) * 100)
  const [label, setLabel] = useState(null)

  useEffect(() => {
    if (isNaN(Number(value))) {
      throw new Error(
        'Value do not pass validtion. Value must pass "isNaN(Number(value))"',
      )
    }
  }, [value])

  useEffect(() => {
    if (customLabel) {
      setLabel(
        typeof customLabel === 'function' ? customLabel(value) : customLabel,
      )
    } else {
      setLabel(percent)
    }
  }, [size, prefix, suffix, value, customLabel])

  return (
    <section
      {...rest}
      style={{ minWidth: width, maxWidth: 'fit-content' }}
      className={clsx(cls('progressbar'), cls(`progressbar-${placement}`))}
    >
      {isNotExistLabel ? (
        <div>{/* prevent miss render */}</div>
      ) : (
        <div
          className={clsx(
            cls('progressbar__label'),
            cls(`progressbar__label-${placement}`),
            cls(`progressbar__label-${size}`),
          )}
        >
          <p className={clsx(cls('progressbar__label-text'))}>
            {prefix && (
              <span className={cls('progressbar__label-prefix')}>{prefix}</span>
            )}

            <span>{label}</span>

            {suffix && (
              <span className={cls('progressbar__label-suffix')}>{suffix}</span>
            )}
          </p>
        </div>
      )}

      <div
        className={cls('progressbar__state')}
        style={{ minWidth: width, height: thickness }}
      >
        <div
          className={clsx(
            cls('progressbar__state-current'),
            cls(`progressbar__state-${percent}`),
            isInfinite && cls('progressbar__state-infinite'),
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
  placement: 'left',
  size: 'sm',
  value: 0,
  width: 100,
  thickness: 6,
  isInfinite: false,
  isNotExistLabel: false,
  customLabel: null,
  strokeColor: null,
}

export default ProgressBar
