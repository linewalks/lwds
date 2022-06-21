<br />

#### Props

##### Tabs

|  Props Name   |          Types           | Default |
| :-----------: | :----------------------: | :-----: |
| selectedIndex |          number          |    0    |
|     size      |          md, lg          |   md    |
|    variant    | primary, danger, default | primary |
|   tickSpeed   |          number          |    3    |
|  noIndicator  |         boolean          |  false  |
|   className   |          string          |         |
|   onChange    |         Function         |         |

<br />

##### TabList

| Props Name |  Types  | Default |
| :--------: | :-----: | :-----: |
|  noBorder  | boolean |  false  |
| className  | string  |         |

<br />

##### Tab

| Props Name |  Types  | Default |
| :--------: | :-----: | :-----: |
|  disabled  | boolean |  false  |
| className  | string  |         |

<br />

##### Usage

- Tabs 내부에 TabList와 TabPanels 를 활용하여 구조를 정의할 수 있습니다.
- TabList 는 Tab 로 구조화할 수 있습니다. 마찬가지로 TabPanels 는 TabPanel 을 활용하여 구조화할 수 있습니다.
- 모든 값은 optional 하며 아래와 같이 활용할 수 있습니다.

```js
import React, { useState } from 'react'
import Tabs, { TabList, Tab, TabPanels, TabPanel } from '@components/Tabs/Tabs'

const show = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Girls' Generation</Tab>
        <Tab>T-ara</Tab>
      </TabList>
      <TabPanels style={{ marginTop: 20 }}>
        <TabPanel>Tab1 Content</TabPanel>
        <TabPanel>Tab2 Content</TabPanel>
      </TabPanels>
    </Tabs>
  )
}

show()
```

##### Usage

- 또한 TabPanels 를 구현하지 않고 Tabs 의 형태만으로도 사용할 수 있습니다.

```js
import React, { useState } from 'react'
import Tabs, { TabList, Tab } from '@components/Tabs/Tabs'

const show = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Girls' Generation</Tab>
        <Tab>T-ara</Tab>
      </TabList>
    </Tabs>
  )
}

show()
```

##### Usage

- Tab 컴포넌트는 내부를 커스텀 할 수 있으므로, 다양한 형태의 탭으로 변경 가능합니다
- noIndicator 를 전달하여 Tab 하단의 Indicator 를 표시하지 않을 수 있다
- TabList는 noBorder 속성을 전달하여 하단의 border-bottom 을 표시하지 않을 수 있다

```js
import React, { useState } from 'react'
import Tabs, { TabList, Tab, TabPanels, TabPanel } from '@components/Tabs/Tabs'

const show = () => {
  return (
    <Tabs noIndicator>
      <TabList noBorder>
        <Tab>
          <div style={{ color: 'red' }}>Girls' Generation</div>
        </Tab>
        <Tab>T-ara</Tab>
      </TabList>
      <TabPanels style={{ marginTop: 20 }}>
        <TabPanel>Tab1 Content</TabPanel>
        <TabPanel>Tab2 Content</TabPanel>
      </TabPanels>
    </Tabs>
  )
}

show()
```

##### Usage

- 특정한 Tab 이 초기에 활성화 되어야 하는 경우는 selectedIndex 를 활용할 수 있습니다.
- Tab은 각각 별개로 disabled 속성을 통하여 선택 불가능하도록 만들 수 있습니다.

```js
import React, { useState } from 'react'
import Tabs, { TabList, Tab, TabPanels, TabPanel } from '@components/Tabs/Tabs'

const show = () => {
  const [index, setIndex] = useState(1)
  const changeTab = (index) => {
    console.log('Selected Tab Index', index)
  }

  return (
    <Tabs selectedIndex={index} style={{ width: 400 }} onChange={changeTab}>
      <TabList>
        <Tab>Girls' Generation</Tab>
        <Tab>T-ara</Tab>
        <Tab>Kara</Tab>
        <Tab disabled>Rainbow</Tab>
        <Tab>Kep1er</Tab>
        <Tab>Rocket Punch</Tab>
      </TabList>
      <TabPanels style={{ marginTop: 20 }}>
        <TabPanel>Tab1 Content</TabPanel>
        <TabPanel>Tab2 Content</TabPanel>
        <TabPanel>Tab3 Content</TabPanel>
        <TabPanel>Tab4 Content</TabPanel>
        <TabPanel>Tab5 Content</TabPanel>
        <TabPanel>Tab6 Content</TabPanel>
      </TabPanels>
    </Tabs>
  )
}

show()
```

##### Usage

- variant 를 활용하여 default, primary, danger 의 세 가지 테마를 활용할 수 있습니다.
- tickSpeed 는 숫자를 입력받습니다.
  - 초기값은 3, 값의 의미는 스크롤 영역을 몇의 클릭으로 끝까지 이동할 수 있는가?
  - 1 -> 1/1(한번에 끝까지 이동), 2 -> 1/2 (두번만에 끝까지 이동)

```js
import React, { useState } from 'react'
import Tabs, { TabList, Tab, TabPanels, TabPanel } from '@components/Tabs/Tabs'
import Button from '@components/Button/Button'

const VARIANT_TYPES = {
  PRIMARY: 'primary',
  DEFAULT: 'default',
  DANGER: 'danger',
}
const show = () => {
  const [index, setIndex] = useState(0)
  const [variant, setVariant] = useState(VARIANT_TYPES.PRIMARY)
  const [speed, setSpeed] = useState(1)

  const handleClick = () => {
    setIndex((prev) => (prev + 1) % 10)
  }

  const handleVariant = () => {
    const newIndex = _.floor(Math.random() * 3)
    const variant = Object.keys(VARIANT_TYPES).at(newIndex)
    setVariant(VARIANT_TYPES[variant])
  }

  const handleSpeed = () => {
    const newSpeed = _.floor(Math.random() * 10)
    setSpeed(newSpeed)
  }

  return (
    <section>
      <div style={{ display: 'flex', gap: 5 }}>
        <Button onClick={handleClick}>Change Tab</Button>
        <Button onClick={handleVariant}>Change Variant</Button>
        <Button onClick={handleSpeed}>Change TickSpeed</Button>
      </div>
      <div style={{ marginTop: 10 }}>현재 tick Speed: {speed}</div>
      <div style={{ marginTop: 10 }}>현재 variant: {variant}</div>
      <Tabs
        selectedIndex={index}
        variant={variant}
        tickSpeed={speed}
        style={{ width: 600 }}
      >
        <TabList>
          <Tab>IZ*ONE</Tab>
          <Tab>Girls' Generation</Tab>
          <Tab>T-ara</Tab>
          <Tab>Kara</Tab>
          <Tab disabled>Rainbow</Tab>
          <Tab>Kep1er</Tab>
          <Tab>Rocket Punch</Tab>
          <Tab>Yena</Tab>
          <Tab>LE SSERAFIM</Tab>
          <Tab>IVE</Tab>
        </TabList>
        <TabPanels style={{ marginTop: 20 }}>
          <TabPanel>Tab1 Content</TabPanel>
          <TabPanel>Tab2 Content</TabPanel>
          <TabPanel>Tab3 Content</TabPanel>
          <TabPanel>Tab4 Content</TabPanel>
          <TabPanel>Tab5 Content</TabPanel>
          <TabPanel>Tab6 Content</TabPanel>
          <TabPanel>Tab6 Content</TabPanel>
          <TabPanel>Tab6 Content</TabPanel>
          <TabPanel>Tab6 Content</TabPanel>
          <TabPanel>Tab6 Content</TabPanel>
        </TabPanels>
      </Tabs>
    </section>
  )
}

show()
```
