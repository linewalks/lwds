import React from 'react'
import _ from 'lodash'
import clsx from 'clsx'
import styled, { keyframes } from 'styled-components'

import cls from '@helpers/class'

import ChevronIcon from '@components/Icon/Icons/Navigation/ChevronIcon'
import FailCircleIcon from '@assets/svg/icn_specific_alert_exclamation_circle_filled.svg'
import FailCloseIcon from '@assets/svg/icn_navigation_close_fail.svg'
import SuccessCircleIcon from '@assets/svg/icn_specific_alert_done_circle_filled_success.svg'
import SuccessCloseIcon from '@assets/svg/icn_navigation_close_success.svg'

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
  toastId,
  callbackMessage,
  duration,
  message,
  type,
  style,
  onRemove,
  callback,
}: IToast) => {
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
        <button className={cls('toast', 'button', 'action')} onClick={callback}>
          <div>{callbackMessage}</div>
          <ChevronIcon width={12} height={12} />
        </button>
      )}
      <button
        className={clsx(cls('toast', 'button', 'close'))}
        onClick={() => onRemove(toastId)}
      >
        <img src={Icon[type].close} width={9} height={9} alt="close icon" />
      </button>
    </ToastBox>
  )
}

Toast.defaultProps = {
  callbackMessage: '바로가기',
  duration: 4000,
  type: 'success',
}

export default Toast
