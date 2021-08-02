import React from 'react'
import clsx from 'clsx'

import './Button.scss'
import DynamicTag from 'components/common/DynamicTag'
import cls from 'helpers/class'

interface ButtonProps {
  as: React.ElementType
  id?: string
  disabled: boolean
  size: string
  variant: string
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
        className={cls('button-startimg')}
        src={startImgSrc}
      />
    )
  }

  const renderEndImg = (): React.ReactNode => {
    return (
      <img
        className={cls('button-endimg')}
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
        cls('button', size),
        cls('button', variant),
        block && cls('button', 'block')
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
