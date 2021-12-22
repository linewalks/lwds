import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const EarthIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        d="M12 2c.119 0 .237.002.355.006L12 2c.134 0 .268.003.401.008H12.414a10.13 10.13 0 0 1 .144.007l.119.008a10.08 10.08 0 0 1 .914.103C18.359 2.889 22 7.019 22 12c0 4.961-3.613 9.079-8.351 9.865l-.058.009-.025.004c-.11.017-.221.033-.333.047l.358-.051a9.883 9.883 0 0 1-.747.09l-.04.004-.026.001-.016.002a10.08 10.08 0 0 1-.204.014l-.108.005-.036.002h-.01A9.59 9.59 0 0 1 12 22h-.003l-.277-.004-.082-.002-.021-.001-.02-.002H11.576a10.109 10.109 0 0 1-.338-.02h-.015a10.068 10.068 0 0 1-.814-.097C5.641 21.111 2 16.981 2 12c0-4.961 3.613-9.079 8.351-9.865l.058-.009.014-.002c.114-.018.23-.035.345-.049l-.359.051a9.949 9.949 0 0 1 .814-.096l-.361.034a10.053 10.053 0 0 1 .727-.056h.009a8.548 8.548 0 0 1 .4-.008H12zm2.42 14H9.58a13.943 13.943 0 0 0 1.919 3.985 8.42 8.42 0 0 0 1.001 0A13.922 13.922 0 0 0 14.42 16zm4.51.001h-2.434a15.89 15.89 0 0 1-1.266 3.32 8.037 8.037 0 0 0 3.7-3.32zm-11.426 0H5.071a8.033 8.033 0 0 0 3.7 3.32 15.856 15.856 0 0 1-1.267-3.32zm-.38-6H4.252A8.015 8.015 0 0 0 4 12c0 .69.088 1.361.252 2l2.872.001a16.158 16.158 0 0 1 0-4zM14.858 10H9.142a14.119 14.119 0 0 0 0 4.001h5.716a14.119 14.119 0 0 0 0-4.001zm4.89 0h-2.872a16.158 16.158 0 0 1 0 4.001h2.872c.164-.64.252-1.31.252-2.001 0-.69-.087-1.36-.252-2zM8.77 4.68l-.045.02A8.033 8.033 0 0 0 5.07 8h2.434A15.89 15.89 0 0 1 8.77 4.68zM12 4c-.168 0-.335.005-.5.015A13.922 13.922 0 0 0 9.58 8h4.84a13.943 13.943 0 0 0-1.919-3.985A8.42 8.42 0 0 0 12 4zm3.23.679.075.147A15.89 15.89 0 0 1 16.495 8h2.435a8.033 8.033 0 0 0-3.7-3.321z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

EarthIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default EarthIcon