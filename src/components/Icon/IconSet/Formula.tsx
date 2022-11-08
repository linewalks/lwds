import React from 'react'
import styled from 'styled-components'

import IconSet from '@components/Icon/IconSet/IconSet'
import * as FormulaIconModules from '@components/Icon/Icons/Formula'
import { SVGIconProps } from '@components/Icon/Icons/SVGIcon'

const WrapIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`

const Formula = (props: SVGIconProps): JSX.Element => {
  return (
    <WrapIcons>
      <IconSet IconModules={FormulaIconModules} />
    </WrapIcons>
  )
}

Formula.defaultProps = {
  color: '#3b424a',
  width: '24px',
  height: '24px',
  responsive: false,
  viewBox: '0 0 24 24',
}

export default Formula as typeof Formula
