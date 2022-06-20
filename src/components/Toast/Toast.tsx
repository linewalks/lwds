import React, { useEffect } from 'react'
import _ from 'lodash'
import clsx from 'clsx'
import styled, { keyframes } from 'styled-components'

import cls from '@helpers/class'
import Chevron from '@assets/svg/icn_navigation_chevron_bold.svg'
import FailCircleIcon from '@assets/svg/icn_specific_alert_exclamation_circle_filled.svg'
import FailCloseIcon from '@assets/svg/icn_navigation_close_fail.svg'
import SuccessCircleIcon from '@assets/svg/icn_specific_alert_done_circle_filled_success.svg'
import SuccessCloseIcon from '@assets/svg/icn_navigation_close_success.svg'

import { useToast } from '@components/Toast/ToastProvider'
import { IToast, IToastBox } from '@components/Toast/Type'

const animationDuration = 0.2
const getAnimationDelayTime = (duration) => duration / 1000 - animationDuration

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`

const ToastBox = styled.div<IToastBox>`
  animation: ${fadeOut} ${animationDuration}s linear
    ${({ duration }) => getAnimationDelayTime(duration)}s 1 forwards;
`

const Icon = {
  success: {
    circle: SuccessCircleIcon,
    close: SuccessCloseIcon,
  },
  fail: {
    circle: FailCircleIcon,
    close: FailCloseIcon,
  },
}

const Toast = ({
  className,
  toastId = _.uniqueId('toast'),
  duration,
  message,
  type,
  style,
  callback,
}: IToast) => {
  const { remove } = useToast()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      remove(toastId)
    }, duration)

    return () => clearTimeout(timeoutId)
  }, [toastId, duration, remove])

  return (
    <ToastBox
      className={clsx(cls('toast'), cls('toast', type), className)}
      duration={duration}
      style={style}
    >
      <div className={clsx(cls('toast', 'message'))}>
        <img src={Icon[type].circle} width={15} height={15} alt="circle icon" />
        <div>{message}</div>
      </div>
      {callback && (
        <button
          className={clsx(cls('toast', 'button', 'action'))}
          onClick={callback}
        >
          <div>바로가기</div>
          <img src={Chevron} width={5} height={7} alt="callback icon" />
        </button>
      )}
      <button
        className={clsx(cls('toast', 'button', 'close'))}
        onClick={() => remove(toastId)}
      >
        <img src={Icon[type].close} width={9} height={9} alt="close icon" />
      </button>
    </ToastBox>
  )
}

Toast.defaultProps = {
  type: 'success',
  duration: 4000,
}

export default Toast