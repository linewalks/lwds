import React from 'react'
import _ from 'lodash'
import styled from 'styled-components'

import * as NavigationIcons from '@components/Icon/Icons/Navigation'

const WrapIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
`

const WrapIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: #eeeeee;
  border-radius: 10px;
`

const Navigation = (): JSX.Element => {
  const iconNames = _.keys(NavigationIcons)

  return (
    <>
      <WrapIcons>
        {_.map(_.values(NavigationIcons), (Icon, idx) => (
          <WrapIcon>
            <div style={{ margin: '5px 0 10px' }}>
              <Icon />
            </div>
            {iconNames[idx]}
          </WrapIcon>
        ))}
      </WrapIcons>
    </>
  )
}

export default Navigation
