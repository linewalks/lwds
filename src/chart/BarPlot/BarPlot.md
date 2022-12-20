```js
import React from 'react'
import BarPlot from './BarPlot'
import Tooltip from './Tooltip'
import { defaultMock, groupsMock } from './mock'

const render = () => {
  return (
    <div>
      <BarPlot
        height={200}
        data={defaultMock}
        maxValue={30}
        valueAxisLocation="left"
        nameAxisLocation="bottom"
        margin={{ top: 15, left: 50, right: 0, bottom: 30 }}
        options={{
          legend: { color: 'skyblue', text: '전체' },
          axisUnit: {
            x: 'xAxis',
            y: 'yAxis',
          },
        }}
      />
    </div>
  )
}
render()
```
