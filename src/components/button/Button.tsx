import React from 'react'
import clsx from 'clsx'

import './Button.scss'
import cls from 'helpers/class'
import DynamicTag from 'components/common/DynamicTag'

interface ButtonProps {
  as: React.ElementType
  id?: string
  disabled: boolean
  size:
    | 'xlg'
    | 'lg'
    | 'md'
  variant:
    | 'primary'
    | 'primary_line'
    | 'basic'
    | 'basic_line'
    | 'primary_light'
    | 'basic_light'
  style?: object
  bold: boolean
  block: boolean
  startImgSrc?: string
  endImgSrc?: string
  children: React.ReactNode
  onClick?: () => void
}

const Button = (props: ButtonProps) => {
  const {
    as: propsAs,
    id,
    disabled,
    size,
    variant,
    style,
    bold,
    block,
    startImgSrc,
    endImgSrc,
    children,
    onClick
  } = props

  const renderStartImg = (): React.ReactNode => {
    return (
      <img
        className={cls('button__startimg')}
        src={startImgSrc}
      />
    )
  }

  const renderEndImg = (): React.ReactNode => {
    return (
      <img
        className={cls('button__endimg')}
        src={endImgSrc}
      />
    )
  }

  return (
    <DynamicTag
      as={propsAs}
      id={id}
      disabled={disabled}
      className={clsx(
        cls('button'),
        cls(`button__${size}`),
        cls(`button__${variant}`),
        block && cls('button__block')
      )}
      style={{
        ...style,
        fontWeight: bold ? 'bold' : 'normal'
      }}
      onClick={onClick}
    >
      {startImgSrc && renderStartImg()}
      {children}
      {endImgSrc && renderEndImg()}
    </DynamicTag>
  )
}

Button.defaultProps = {
  as: 'button',
  disabled: false,
  size: 'md',
  variant: 'primary',
  bold: true,
  block: false
}

export default Button
