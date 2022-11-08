import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const BoxFilledIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M21.2524 7.57431C21.5797 7.38397 21.9996 7.56035 22 7.93973V16.168C21.9995 16.664 21.8689 17.1511 21.6214 17.5805C21.3739 18.0099 21.0181 18.3664 20.5897 18.6144L20.5868 18.6161L13.4103 22.7282L13.4087 22.7291C13.1063 22.9039 12.7692 22.6521 12.7692 22.3021V13.0635C12.7692 12.7196 12.9518 12.4018 13.2485 12.2293L21.2524 7.57431Z"
        transform={svgRotate(rotate, viewBox)}
      />
      <path
        d="M2.74758 7.57431C2.4203 7.38397 2.00039 7.56035 2 7.93973V16.168C2.00051 16.664 2.13107 17.1511 2.3786 17.5805C2.62613 18.0099 2.98191 18.3664 3.41026 18.6144L3.41323 18.6161L10.5897 22.7282L10.5913 22.7291C10.8937 22.9039 11.2308 22.6521 11.2308 22.3021V13.0635C11.2308 12.7196 11.0482 12.4018 10.7515 12.2293L2.74758 7.57431Z"
        transform={svgRotate(rotate, viewBox)}
      />
      <path
        d="M12 1V11H11.9281C11.7704 10.9926 11.6139 10.9478 11.4724 10.8655L3.45075 6.20028C3.17299 6.03874 3.13173 5.65365 3.40982 5.49266L3.41278 5.49095L10.5909 1.37798C11.0193 1.13036 11.5055 1 12 1C12.0002 1 11.9999 1 12 1Z"
        transform={svgRotate(rotate, viewBox)}
      />
      <path
        d="M12 1V11H12.0719C12.2297 10.9926 12.3861 10.9478 12.5276 10.8655L20.5493 6.20028C20.8271 6.03874 20.8683 5.65365 20.5902 5.49266L20.5873 5.49095L13.4091 1.37798C12.9808 1.13036 12.4945 1 12 1C12.0002 1 11.9999 1 12 1Z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

BoxFilledIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default BoxFilledIcon
