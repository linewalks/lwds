import React from 'react'
import styled from 'styled-components'

import IconSet from '@components/Icon/IconSet/IconSet'
import * as NavigationIconModules from '@components/Icon/Icons/Navigation'
// Warning: import { SVGIconProps } from '@components/Icon/Icons/SVGIcon' 으로 import 시 propsType 이 정상적으로 반영되지 않는 오류 존재
import { SVGIconProps } from '../Icons/SVGIcon'

const WrapIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
`

interface NavigationIconProps extends SVGIconProps {
  direction?: string
  rotate?: number
}

const Navigation = (props: NavigationIconProps): JSX.Element => {
  return (
    <WrapIcons>
      <IconSet IconModules={NavigationIconModules} />
    </WrapIcons>
  )
}

Navigation.defaultProps = {
  color: '#3b424a',
  width: '24px',
  height: '24px',
  responsive: false,
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default Navigation as typeof Navigation
