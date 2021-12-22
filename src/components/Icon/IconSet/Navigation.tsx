import React from 'react'
import styled from 'styled-components'

import IconSet from '@components/Icon/IconSet/IconSet'
import * as NavigationIconModules from '@components/Icon/Icons/Navigation'

const WrapIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
`

const Navigation = (): JSX.Element => {
  return (
    <WrapIcons>
      <IconSet IconModules={NavigationIconModules} />
    </WrapIcons>
  )
}

export default Navigation
