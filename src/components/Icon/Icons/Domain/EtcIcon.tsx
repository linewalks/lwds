import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const EtcIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M8.5 7.61H6.085l-.171.006-.175.017a2.58 2.58 0 0 0-2.233 2.555v1.203l-.005.006v1.208l.005 1.209.006.17a2.58 2.58 0 0 0 2.573 2.408H8.5l.16-.161v-1.209l-.16-.16H6.084l-.123-.008-.118-.02a1.048 1.048 0 0 1-.807-1.02v-1.048h3.46l.16-.16v-1.21l-.16-.16h-3.46v-1.048l.007-.123c.057-.52.505-.924 1.04-.924h2.418l.16-.161V7.77l-.16-.161zm6.038 0H9.704l-.161.161V8.98l.16.16h1.649v7.09l.162.162h1.208l.162-.161-.003-7.09h1.657l.161-.161V7.77l-.161-.161zm5.8 0h-2.416l-.171.006a2.58 2.58 0 0 0-2.407 2.572v3.626l.005.17a2.58 2.58 0 0 0 2.573 2.408h2.417l.161-.161v-1.209l-.161-.16h-2.417l-.123-.008a1.046 1.046 0 0 1-.925-1.04v-3.626l.007-.123c.057-.52.505-.924 1.04-.924h2.418l.161-.161V7.77l-.161-.161z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

EtcIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default EtcIcon
