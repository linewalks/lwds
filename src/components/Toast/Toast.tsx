import React from 'react'
import _ from 'lodash'
import clsx from 'clsx'
import styled, { keyframes } from 'styled-components'

import cls from '@helpers/class'

import {
  $color_icon_danger,
  $color_icon_safe,
} from '@assets/styles/color/semantics'

import ChevronIcon from '@components/Icon/Icons/Navigation/ChevronIcon'
import CloseIcon from '@components/Icon/Icons/Navigation/CloseIcon'
import ExclamationCircleFilledIcon from '@components/Icon/Icons/Specific/legacy/ExclamationCircleFilledIcon'
import SuccessCircleFilledIcon from '@components/Icon/Icons/Specific/legacy/SuccessCircleFilledIcon'

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
        {type === 'success' ? (
          <SuccessCircleFilledIcon width={16} height={16} />
        ) : (
          <ExclamationCircleFilledIcon width={16} height={16} />
        )}
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
        <CloseIcon
          width={9}
          height={9}
          color={type === 'success' ? $color_icon_safe : $color_icon_danger}
        />
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
