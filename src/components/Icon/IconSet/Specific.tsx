import React from 'react'
import styled from 'styled-components'

import IconSet from '@components/Icon/IconSet/IconSet'
import * as SpecificIconModules from '@components/Icon/Icons/Specific'
// Warning: import { SVGIconProps } from '@components/Icon/Icons/SVGIcon' 으로 import 시 propsType 이 정상적으로 반영되지 않는 오류 존재
import { SVGIconProps } from '../Icons/SVGIcon'

const WrapIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`

const Specific = (props: SVGIconProps): JSX.Element => {
  return (
    <WrapIcons>
      <IconSet IconModules={SpecificIconModules} />
    </WrapIcons>
  )
}

Specific.defaultProps = {
  color: '#3b424a',
  width: '24px',
  height: '24px',
  responsive: false,
  viewBox: '0 0 24 24',
}

export default Specific as typeof Specific
