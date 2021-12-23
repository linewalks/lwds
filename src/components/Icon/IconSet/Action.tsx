import React from 'react'
import styled from 'styled-components'

import IconSet from '@components/Icon/IconSet/IconSet'
import * as ActionIconModules from '@components/Icon/Icons/Action'
// Warning: import { SVGIconProps } from '@components/Icon/Icons/SVGIcon' 으로 import 시 propsType 이 정상적으로 반영되지 않는 오류 존재
import { SVGIconProps } from '../Icons/SVGIcon'

const WrapIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
`

interface ActionIconProps extends SVGIconProps {
  rotate?: number
}

const Action = (props: ActionIconProps): JSX.Element => {
  return (
    <WrapIcons>
      <IconSet IconModules={ActionIconModules} />
    </WrapIcons>
  )
}

Action.defaultProps = {
  color: '#3b424a',
  width: '24px',
  height: '24px',
  responsive: false,
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default Action as typeof Action
