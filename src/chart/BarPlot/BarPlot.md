```js
import React from 'react'
import BarPlot from './BarPlot'
import Tooltip from './Tooltip'
import { defaultMock, groupsMock } from './mock'

const render = () => {
  return (
    <div>
      <BarPlot
        zoom
        isHorizontal
        height={300}
        data={defaultMock}
        maxValue={30}
        valueAxisLocation="bottom"
        nameAxisLocation="left"
        margin={{ top: 15, left: 50, right: 0, bottom: 30 }}
        options={{
          legend: { color: 'skyblue', text: '전체' },
          axisUnit: {
            x: 'xAxis',
            y: 'yAxis',
          },
        }}
      />
      <BarPlot
        zoom
        type="group"
        isHorizontal
        height={300}
        data={groupsMock}
        valueAxisLocation="bottom"
        nameAxisLocation="left"
        barColor={['red', 'green', 'blue']}
        totalTicks={3}
        margin={{ top: 15, left: 40, right: 15, bottom: 30 }}
        barPaddingRatio={0.15}
        outerPaddingRatio={0.5}
        hasTooltip
        options={{
          legend: { color: 'skyblue', text: '전체' },
          axisUnit: {
            x: 'xAxis',
            y: 'yAxis',
          },
        }}
      />
      <BarPlot
        // zoom
        type="stack"
        height={300}
        data={groupsMock}
        valueAxisLocation="left"
        nameAxisLocation="bottom"
        barColor={['red', 'green', 'blue']}
        totalTicks={3}
        margin={{ top: 15, left: 40, right: 15, bottom: 30 }}
        barPaddingRatio={0.15}
        outerPaddingRatio={0.5}
        hasTooltip
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
