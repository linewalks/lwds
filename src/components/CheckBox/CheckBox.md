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
        text="CheckBox test code"
        onChange={(id, checked) => console.log('CheckBox', id, checked)}
      />
      <CheckBox
        color="black"
        number={30}
        text="CheckBox test code"
        onChange={(id, checked) => console.log('CheckBox', id, checked)}
      />

      <CheckBox
        defaultChecked={true}
        number={30}
        text="CheckBox test code"
        onChange={(id, checked) => console.log('CheckBox', id, checked)}
      />
      <CheckBox
        color="black"
        defaultChecked={true}
        number={30}
        text="CheckBox test code"
        onChange={(id, checked) => console.log('CheckBox', id, checked)}
      />

      <CheckBox
        defaultChecked={true}
        mixed={true}
        number={30}
        text="CheckBox test code"
        onChange={(id, checked) => console.log('CheckBox', id, checked)}
      />
      <CheckBox
        color="black"
        defaultChecked={true}
        mixed={true}
        number={30}
        text="CheckBox test code"
        onChange={(id, checked) => console.log('CheckBox', id, checked)}
      />

      <CheckBox
        disabled={true}
        number={30}
        text="CheckBox test code"
        onChange={(id, checked) => console.log('CheckBox', id, checked)}
      />
      <CheckBox
        color="black"
        disabled={true}
        number={30}
        text="CheckBox test code"
        onChange={(id, checked) => console.log('CheckBox', id, checked)}
      />

      <CheckBox
        defaultChecked={true}
        disabled={true}
        number={30}
        text="CheckBox test code"
        onChange={(id, checked) => console.log('CheckBox', id, checked)}
      />
      <CheckBox
        color="black"
        defaultChecked={true}
        disabled={true}
        number={30}
        text="CheckBox test code"
        onChange={(id, checked) => console.log('CheckBox', id, checked)}
      />

      <CheckBox
        defaultChecked={true}
        disabled={true}
        mixed={true}
        number={30}
        text="CheckBox test code"
        onChange={(id, checked) => console.log('CheckBox', id, checked)}
      />
      <CheckBox
        color="black"
        defaultChecked={true}
        disabled={true}
        mixed={true}
        number={30}
        text="CheckBox test code"
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
    <div>
      <CheckBoxSet
        itemList={[
          { id: 'test1', text: 'test', defaultChecked: true },
          { id: 'test2', text: 'test', defaultChecked: true },
          { id: 'test3', text: 'test', defaultChecked: true },
        ]}
        text="CheckBox test code"
        onChange={(id, checked) => console.log('CheckBox', id, checked)}
      />
      <CheckBoxSet
        color="black"
        itemList={[
          { id: 'test01', text: 'test', defaultChecked: true },
          { id: 'test02', text: 'test', defaultChecked: true },
          { id: 'test03', text: 'test', defaultChecked: true },
        ]}
        text="CheckBox test code"
        onChange={(id, checked) => console.log('CheckBox', id, checked)}
      />
    </div>
  )
}

render()
```
