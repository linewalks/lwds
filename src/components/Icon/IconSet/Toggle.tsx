import React from 'react'
import styled from 'styled-components'

import IconSet from '@components/Icon/IconSet/IconSet'
import * as ToggleIconModules from '@components/Icon/Icons/Toggle'

const WrapIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`

const Toggle = (): JSX.Element => {
  return (
    <WrapIcons>
      <IconSet IconModules={ToggleIconModules} />
    </WrapIcons>
  )
}

export default Toggle
