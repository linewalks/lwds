import React from 'react'
import clsx from 'clsx'
import styled from 'styled-components'

import './Button.scss'
import DynamicTag from '@components/common/DynamicTag'
import cls from '@helpers/class'

const WrapInside = styled.span`
  height: 100%;
  display: inline-flex;
  align-items: center;
`

interface ButtonProps {
  as: React.ElementType
  id?: string
  disabled: boolean
  size: string | 'sm' | 'md' | 'lg' | 'xlg'
  // TODO variant => variant와 color로 나누기
  variant: (
    string | 'primary' | 'primary_line' | 'basic' |
    'basic_line' | 'primary_light' | 'basic_light'
  )
  style?: object
  bold: boolean
  block: boolean
  startIcon?: React.ReactElement
  endIcon?: React.ReactElement
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLElement>
}

const Button = React.forwardRef((props: ButtonProps, ref: React.RefObject<any>) => {
  const {
    as: propsAs,
    id,
    disabled,
    size,
    variant,
    style,
    bold,
    block,
    startIcon,
    endIcon,
    children,
    onClick,
    ...rest
  } = props

  const createIconNode = (icon: React.ReactElement, className: string) => {
    return icon && React.cloneElement(icon, {
      className: cls('button', className),
      width: '1em',
      height: '1em'
    })
  }

  const startIconNode = createIconNode(startIcon, 'starticon')
  const endIconNode = createIconNode(endIcon, 'endicon')

  return (
    <DynamicTag
      {...rest}
      as={propsAs}
      id={id}
      disabled={disabled}
      className={clsx(
        cls('button'),
        cls('button', 'size', size),
        cls('button', 'variant', variant),
        block && cls('button', 'block')
      )}
      style={{
        ...style,
        fontWeight: bold ? 'bold' : 'normal'
      }}
      onClick={onClick}
      ref={ref}
    >
      <WrapInside>
        {startIconNode}
        {children}
        {endIconNode}
      </WrapInside>
    </DynamicTag>
  )
})

Button.defaultProps = {
  as: 'button',
  disabled: false,
  size: 'md',
  variant: 'primary',
  bold: true,
  block: false
}

export default Button
