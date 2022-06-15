### Usage

#### Props

|    Props Name    |       Types        |         Default         |
| :--------------: | :----------------: | :---------------------: |
|      color       | 'primary', 'black' |       'primary',        |
|    className     |       string       |                         |
| containerChecked |      boolean       |                         |
|  defaultChecked  |      boolean       |          false          |
|     disabled     |      boolean       |          false          |
|        id        |       string       | \_.uniqueId('checkBox') |
|      mixed       |      boolean       |          false          |
|      number      |       number       |                         |
|       size       |    'sm' , 'md'     |          'md'           |
|      style       |       object       |                         |
|       text       |       string       |                         |
|     onChange     |      function      |                         |

#### Basic CheckBox

```js
import React, { useState } from 'react'
import CheckBox from '@components/CheckBox/CheckBox'

const render = () => {
  return (
    <div>
      <CheckBox
        number={30}
        text="Uncheck Default"
        onChange={(id, checked) => console.log('CheckBox', id, checked)}
      />

      <CheckBox
        defaultChecked={true}
        number={30}
        text="Checked Default"
        onChange={(id, checked) => console.log('CheckBox', id, checked)}
      />

      <CheckBox
        color="black"
        defaultChecked={true}
        number={30}
        text="Checked Default (Black)"
        onChange={(id, checked) => console.log('CheckBox', id, checked)}
      />

      <CheckBox
        defaultChecked={true}
        mixed={true}
        number={30}
        text="Mixed Default"
        onChange={(id, checked) => console.log('CheckBox', id, checked)}
      />
      <CheckBox
        color="black"
        defaultChecked={true}
        mixed={true}
        number={30}
        text="Mixed Default (Black)"
        onChange={(id, checked) => console.log('CheckBox', id, checked)}
      />

      <CheckBox
        disabled={true}
        number={30}
        text="Unchecked Disabled"
        onChange={(id, checked) => console.log('CheckBox', id, checked)}
      />

      <CheckBox
        defaultChecked={true}
        disabled={true}
        number={30}
        text="Checked Diasabled"
        onChange={(id, checked) => console.log('CheckBox', id, checked)}
      />
      <CheckBox
        color="black"
        defaultChecked={true}
        disabled={true}
        number={30}
        text="Checked Diasabled (Black)"
        onChange={(id, checked) => console.log('CheckBox', id, checked)}
      />

      <CheckBox
        defaultChecked={true}
        disabled={true}
        mixed={true}
        number={30}
        text="Mixed Diasabled"
        onChange={(id, checked) => console.log('CheckBox', id, checked)}
      />
      <CheckBox
        color="black"
        defaultChecked={true}
        disabled={true}
        mixed={true}
        number={30}
        text="Mixed Diasabled (Black)"
        onChange={(id, checked) => console.log('CheckBox', id, checked)}
      />

      <CheckBox
        number={30}
        size="sm"
        onChange={(id, checked) => console.log('CheckBox', id, checked)}
      />

      <CheckBox
        defaultChecked={true}
        number={30}
        size="sm"
        onChange={(id, checked) => console.log('CheckBox', id, checked)}
      />
    </div>
  )
}

render()
```

#### Basic CheckBoxSet

```js
import React, { useState } from 'react'
import CheckBoxSet from '@components/CheckBox/CheckBoxSet'

const render = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '150px',
        justifyContent: 'space-around',
      }}
    >
      <CheckBoxSet
        itemList={[
          { id: 'test1', text: 'test', defaultChecked: false },
          { id: 'test2', text: 'test', defaultChecked: false },
          { id: 'test3', text: 'test', defaultChecked: false },
        ]}
        text="CheckBoxSet Default"
        onChange={(id, checked) => console.log('CheckBox', id, checked)}
      />
      <CheckBoxSet
        itemList={[
          { id: 'test01', text: 'test', defaultChecked: true },
          { id: 'test02', text: 'test', defaultChecked: true },
          { id: 'test03', text: 'test', defaultChecked: true },
        ]}
        text="CheckBoxSet checked"
        onChange={(id, checked) => console.log('CheckBox', id, checked)}
      />
      <CheckBoxSet
        color="black"
        itemList={[
          { id: 'test001', text: 'test', defaultChecked: true },
          { id: 'test002', text: 'test', defaultChecked: true },
          { id: 'test003', text: 'test', defaultChecked: true },
        ]}
        text="CheckBoxSet checked (Black)"
        onChange={(id, checked) => console.log('CheckBox', id, checked)}
      />
      <CheckBoxSet
        itemList={[
          { id: 'test0001', text: 'test', defaultChecked: true },
          { id: 'test0002', text: 'test', defaultChecked: true },
          { id: 'test0003', text: 'test', defaultChecked: false },
        ]}
        text="CheckBoxSet Mixed"
        onChange={(id, checked) => console.log('CheckBox', id, checked)}
      />
    </div>
  )
}

render()
```
