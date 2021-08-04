#### Defualt

```js

import Tab from './Tab'

const TabsDefault = () => (
  <div style={{ display: 'flex' }}>
    <div style={{ flex: 1, padding: 10 }}>
      <h4>Single Tab</h4>
      <Tabs>
        <Tab>abcd</Tab>
      </Tabs>
    </div>
    <div style={{ flex: 1, padding: 10 }}>
      <h4>Multiple Tab</h4>
      <Tabs>
        <Tab>abcd</Tab>
        <Tab>1234</Tab>
      </Tabs>
    </div>
  </div>
)

TabsDefault()
```