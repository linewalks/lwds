import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'

const AddCheckUnaddedIcon = (props: SVGIconProps) => {
  return (
    <SVGIcon {...props} color="none">
      <circle cx="12" cy="12" r="9.5" stroke="#CBD0D8" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 6C11.5858 6 11.25 6.33579 11.25 6.75V11.25H6.75C6.33579 11.25 6 11.5858 6 12C6 12.4142 6.33579 12.75 6.75 12.75H11.25V17.25C11.25 17.6642 11.5858 18 12 18C12.4142 18 12.75 17.6642 12.75 17.25V12.75H17.25C17.6642 12.75 18 12.4142 18 12C18 11.5858 17.6642 11.25 17.25 11.25H12.75V6.75C12.75 6.33579 12.4142 6 12 6Z"
        fill="#535E6A"
      />
    </SVGIcon>
  )
}

export default AddCheckUnaddedIcon
