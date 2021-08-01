import React from 'react'
import styled from 'styled-components'

const WrapLayout = styled.div`
  display: flex;
  ${({ orientation, margin }: {orientation: string, margin: number}) => {
    return orientation === 'vertical' ?
      `flex-direction: column;
      & > * {
        margin-bottom: ${margin}px;
      }
      & > *:last-child {
        margin-bottom: 0;
      }` :
      `flex-direction: row;
      & > * {
        margin-right: ${margin}px;
      }
      & > *:last-child {
        margin-right: 0;
      }`
  }}
`

interface ChildMarginProps {
  orientation: 'horizontal' | 'vertical'
  margin: number
  style?: object
  children: React.ReactNode
}

const ChildMargin = (props: ChildMarginProps) => {
  const {
    orientation,
    margin,
    style,
    children
  } = props

  return (
    <WrapLayout
      orientation={orientation}
      margin={margin}
      style={style}
    >
      {children}
    </WrapLayout>
  )
}

ChildMargin.defaultProps = {
  orientation: 'horizontal',
  margin: 8
}

export default ChildMargin
