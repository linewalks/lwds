import React from 'react'
import _ from 'lodash'
import styled from 'styled-components'

const WrapLegendBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 8px;
`

const WrapLegendItem = styled.div`
  display: flex;

  & + & {
    margin-top: 4px;
  }
`

const WrapKey = styled.div.attrs({
  className: 'body_02_m',
})`
  display: flex;
  align-items: center;
  width: 5rem;
  color: #6c7a89;

  &::before {
    content: '';
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    margin-right: 6px;
    border-radius: 50%;
    background-color: ${({ color }) => color};
  }
`

const WrapValue = styled.span.attrs({
  className: 'subtitle_01',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  color: #3b424a;
`

const Index = ({ data, colors }) => {
  const totalCount = _.reduce(data, (acc, cur) => (acc += cur.value), 0)

  return (
    <WrapLegendBox id="WrapLegendBox">
      {_.map(data, ({ key, value }, idx) => (
        <WrapLegendItem key={`WrapLegendItem__${key}`}>
          <WrapKey color={colors[idx]}>{key}</WrapKey>
          <WrapValue>{value || 0}</WrapValue>
          <WrapValue>{((value * 100) / totalCount).toFixed(2)}%</WrapValue>
        </WrapLegendItem>
      ))}
    </WrapLegendBox>
  )
}

export default Index
