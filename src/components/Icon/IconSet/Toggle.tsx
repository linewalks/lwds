import React from 'react'
import styled from 'styled-components'

import IconSet from '@components/Icon/IconSet/IconSet'
import * as ToggleIconModules from '@components/Icon/Icons/Toggle'
import { SVGIconProps } from '@components/Icon/Icons/SVGIcon'

const WrapIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`

const Toggle = (props: SVGIconProps): JSX.Element => {
  return (
    <WrapIcons>
      <IconSet IconModules={ToggleIconModules} />
    </WrapIcons>
  )
}

Toggle.defaultProps = {
  color: '#3b424a',
  width: '24px',
  height: '24px',
  responsive: false,
  viewBox: '0 0 24 24',
}

export default Toggle as typeof Toggle
