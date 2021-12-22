import React from 'react'
import styled from 'styled-components'

import IconSet from '@components/Icon/IconSet/IconSet'
import * as SpecificIconModules from '@components/Icon/Icons/Specific'

const WrapIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`

const Specific = (): JSX.Element => {
  return (
    <WrapIcons>
      <IconSet IconModules={SpecificIconModules} />
    </WrapIcons>
  )
}

export default Specific
