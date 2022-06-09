### Usage

#### Basic CheckBox

```js
import React, { useState } from 'react'
import CheckBox from '@components/CheckBox/CheckBox'

const render = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '150px',
        justifyContent: 'space-around',
      }}
    >
      <span style={{ position: 'relative' }}>
        <CheckBox
        color = 'primary'
  defaultChecked = {false}
  disabled = {false}
      id = 'ex'
  mixed = {false}
  size = 'sm'
    text = 'Check Box'
  onChange = (e) => {}
  />
      </span>
    </div>
  )
}

render()
```
