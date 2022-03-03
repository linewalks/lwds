import React from 'react'
import styled from 'styled-components'

import IconSet from '@components/Icon/IconSet/IconSet'
import * as DomainIconModules from '@components/Icon/Icons/Domain'
import { SVGIconProps } from '@components/Icon/Icons/SVGIcon'

const WrapIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
`

interface DomainIconProps extends SVGIconProps {
  rotate?: number
}

const Domain = (props: DomainIconProps): JSX.Element => {
  return (
    <WrapIcons>
      <IconSet IconModules={DomainIconModules} />
    </WrapIcons>
  )
}

Domain.defaultProps = {
  color: '#3b424a',
  width: '24px',
  height: '24px',
  responsive: false,
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default Domain as typeof Domain
