```js
import React from 'react'
import BarPlot from './BarPlot'
import Tooltip from './Tooltip'
import { defaultMock, groupsMock } from './mock'

const render = () => {
  return (
    <div>
      <BarPlot
        width={500}
        height={300}
        data={defaultMock}
        maxValue={30}
        valueAxisLocation="left"
        nameAxisLocation="bottom"
        margin={{ top: 15, left: 40, right: 15, bottom: 30 }}
        hasTooltip
        options={{
          renderTooltip: ({ targetData }) => (
            <Tooltip targetData={targetData} />
          ),
        }}
      />
      <BarPlot
        isHorizontal
        width={500}
        height={300}
        data={defaultMock}
        valueAxisLocation="bottom"
        nameAxisLocation="left"
        margin={{ top: 15, left: 40, right: 15, bottom: 30 }}
        hasTooltip
        options={{
          renderTooltip: ({ targetData }) => (
            <Tooltip targetData={targetData} />
          ),
        }}
      />
      <BarPlot
        shape="group"
        width={500}
        height={300}
        data={groupsMock}
        barColor={['red', 'green', 'blue']}
        totalTicks={3}
        margin={{ top: 15, left: 40, right: 15, bottom: 30 }}
      />
      <BarPlot
        shape="group"
        isHorizontal
        width={500}
        height={300}
        data={groupsMock}
        valueAxisLocation="bottom"
        nameAxisLocation="left"
        barColor={['red', 'green', 'blue']}
        totalTicks={3}
        margin={{ top: 15, left: 40, right: 15, bottom: 30 }}
        barPaddingRatio={0.15}
        // groupPadding
        // barPadding
      />
      <BarPlot
        shape="stack"
        width={500}
        height={300}
        data={groupsMock}
        barColor={['red', 'green', 'blue']}
        totalTicks={3}
        valueAxisLocation="left"
        nameAxisLocation="bottom"
        margin={{ top: 15, left: 40, right: 15, bottom: 30 }}
        barPaddingRatio={0.2}
      />
      <BarPlot
        shape="stack"
        isHorizontal
        width={500}
        height={300}
        data={groupsMock}
        valueAxisLocation="bottom"
        nameAxisLocation="left"
        barColor={['red', 'green', 'blue']}
        totalTicks={3}
        margin={{ top: 15, left: 40, right: 15, bottom: 30 }}
        barPaddingRatio={0.3}
      />
    </div>
  )
}
render()
```
