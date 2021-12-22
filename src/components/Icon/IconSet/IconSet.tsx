import React from 'react'
import _ from 'lodash'
import styled from 'styled-components'

const WrapIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: #f6f7f9;
  border-radius: 10px;
`

const IconSet = ({ IconModules }): JSX.Element => {
  const iconNames = _.keys(IconModules)

  return (
    <>
      {_.map(_.values(IconModules), (Icon, idx) => (
        <WrapIcon key={`icon__${idx}`}>
          <div style={{ margin: '5px 0 10px' }}>
            <Icon />
          </div>
          {iconNames[idx]}
        </WrapIcon>
      ))}
    </>
  )
}

export default IconSet
