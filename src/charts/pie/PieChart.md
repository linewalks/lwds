### Usage

#### Props

| Props Name | Types | Default |
| :--------: | :---: | :-----: |

#### Basic PieChart

```js
import React, { useState } from 'react'
import PieChart from './PieChart'

const render = () => {
  return (
    <div style={{ width: 350, height: 350 }}>
      <PieChart
        data={[
          { key: 'Male', value: 230 },
          { key: 'Female', value: 450 },
        ]}
        colors={['#5A88D8', ' #ee807c']}
      />
    </div>
  )
}

render()
```
