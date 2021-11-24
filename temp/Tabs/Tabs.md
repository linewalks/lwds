#### Defualt

```js
import React, { useState } from 'react'
import Tab from './Tab'
import TabPanel from './TabPanel'
import TabPanels from './TabPanels'
const TabsDefault = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const handleChange = (index) => {
    setActiveIndex(index)
  }
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, padding: 10 }}>
        <h4>Single Tab</h4>
        <Tabs>
          <Tab>abcd</Tab>
        </Tabs>
        <TabPanels>
          <TabPanel>
            Item ABCD
          </TabPanel>
        </TabPanels>
      </div>
      <div style={{ flex: 1, padding: 10 }}>
        <h4>Multiple Tab</h4>
        <Tabs
          activeIndex={activeIndex}
          onChange={handleChange}
        >
          <Tab>abcd</Tab>
          <Tab>1234</Tab>
        </Tabs>
        <TabPanels
          activeIndex={activeIndex}
        >
          <TabPanel>
            Item ABCD
          </TabPanel>
          <TabPanel>
            Item 1234
          </TabPanel>
        </TabPanels>
      </div>
    </div>
  )
}

TabsDefault()
```

#### Tab Panel
* panel can be anywhere

```js
import React, { useState } from 'react'
import Tab from './Tab'
import TabPanel from './TabPanel'
import TabPanels from './TabPanels'
const TabsDefault = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const handleChange = (index) => {
    setActiveIndex(index)
  }

  const renderTabs = () => (
    <Tabs
      activeIndex={activeIndex}
      onChange={handleChange}
    >
      <Tab>abcd</Tab>
      <Tab>1234</Tab>
    </Tabs>
  )
  const renderTabPanels= () => (
    <TabPanels
      activeIndex={activeIndex}
    >
      <TabPanel>Item ABCD</TabPanel>
      <TabPanel>Item 1234</TabPanel>
    </TabPanels>
  )

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, padding: 10 }}>
        <h4>Bottom Panel</h4>
        {renderTabs()}
        {renderTabPanels()}
      </div>
      <div style={{ flex: 1, padding: 10 }}>
        <h4>Top Panel</h4>
        {renderTabPanels()}
        {renderTabs()}
      </div>
      <div style={{ flex: 1, padding: 10 }}>
        <h4>Something's Between</h4>
        {renderTabs()}
        <marquee>Something Between Tabs and Panels</marquee>
        {renderTabPanels()}
      </div>
    </div>
  )
}

TabsDefault()
```