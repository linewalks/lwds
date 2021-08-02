import React from 'react'
import clsx from 'clsx'

import './TextLink.scss'
import DynamicTag from 'components/common/DynamicTag'
import cls from 'helpers/class'

interface TextLinkProps {
  as: React.ElementType
  id?: string
  disabled: boolean
  variant: string
  style?: object
  underline: boolean
  bold: boolean
  children: React.ReactNode
  onClick?: () => void
}

const TextLink = (props: TextLinkProps) => {
  const {
    as: propsAs,
    id,
    disabled,
    variant,
    style,
    underline,
    bold,
    children,
    onClick
  } = props
  return (
    <DynamicTag
      as={propsAs}
      id={id}
      disabled={disabled}
      className={clsx(
        cls('textlink'),
        cls('textlink', variant),
        underline && cls('textlink', 'underline'),
        disabled && cls('textlink', 'disabled')
      )}
      style={{
        ...style,
        fontWeight: bold ? 'bold': 'normal'
      }}
      onClick={onClick}
    >
      {children}
    </DynamicTag>
  )
}

TextLink.defaultProps = {
  as: 'span',
  disabled: false,
  variant: 'primary',
  bold: true,
  underline: false
}

export default TextLink
