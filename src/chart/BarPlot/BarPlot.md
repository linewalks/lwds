```js
import React from 'react'
import BarPlot from './BarPlot'
import Tooltip from './Tooltip'
import { defaultMock, groupsMock } from './mock'

const render = () => {
  return (
    <div>
      <BarPlot
        // zoom
        width={500}
        height={300}
        data={defaultMock}
        maxValue={30}
        valueAxisLocation="left"
        nameAxisLocation="bottom"
        margin={{ top: 15, left: 40, right: 15, bottom: 30 }}
        // hasTooltip
        scroll={{ x: 400 }}
        // options={{
        //   renderTooltip: ({ targetData }) => (
        //     <Tooltip targetData={targetData} />
        //   ),
        // }}
      />
    </div>
  )
}
render()
```
