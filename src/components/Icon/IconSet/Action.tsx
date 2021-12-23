import React from 'react'
import styled from 'styled-components'

import IconSet from '@components/Icon/IconSet/IconSet'
import * as ActionIconModules from '@components/Icon/Icons/Action'

const WrapIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
`

const Action = (): JSX.Element => {
  return (
    <WrapIcons>
      <IconSet IconModules={ActionIconModules} />
    </WrapIcons>
  )
}

export default Action
