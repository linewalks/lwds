import React from 'react'
import PropTypes from 'prop-types'
import { map, isArray } from 'lodash'
import { Labels, Label, LabelText } from './common.style'

const Legend = React.memo(({ legendOptions }) => {
  return (
    <Labels>
      {isArray(legendOptions) ? (
        map(legendOptions, ({ color, text, id }, index) => (
          <Label key={`Chart__Label__${index}`} color={color}>
            <LabelText>{text}</LabelText>
          </Label>
        ))
      ) : (
        <Label color={legendOptions.color}>
          <LabelText>{legendOptions.text}</LabelText>
        </Label>
      )}
    </Labels>
  )
})

export default Legend
