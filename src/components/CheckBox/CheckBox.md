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
        defaultChecked
        onChange={(id, checked) => console.log('CheckBox', id, checked)}
      >
        Checked Default
      </CheckBox>
      <CheckBox
        color="black"
        defaultChecked
        onChange={(id, checked) => console.log('CheckBox', id, checked)}
      >
        Checked Default (Black)
      </CheckBox>
      <CheckBox
        defaultChecked
        mixed={true}
        onChange={(id, checked) => console.log('CheckBox', id, checked)}
      >
        Mixed Default
      </CheckBox>
      <CheckBox
        color="black"
        defaultChecked
        mixed={true}
        onChange={(id, checked) => console.log('CheckBox', id, checked)}
      >
        Mixed Default (Black)
      </CheckBox>
      <CheckBox
        disabled={true}
        onChange={(id, checked) => console.log('CheckBox', id, checked)}
      >
        Unchecked Disabled
      </CheckBox>
      <CheckBox
        defaultChecked
        disabled={true}
        onChange={(id, checked) => console.log('CheckBox', id, checked)}
      >
        Checked Diasabled
      </CheckBox>
      <CheckBox
        color="black"
        defaultChecked
        disabled={true}
        onChange={(id, checked) => console.log('CheckBox', id, checked)}
      >
        Checked Diasabled (Black)
      </CheckBox>
      <CheckBox
        defaultChecked
        disabled={true}
        mixed={true}
        onChange={(id, checked) => console.log('CheckBox', id, checked)}
      >
        Mixed Diasabled
      </CheckBox>
      <CheckBox
        color="black"
        defaultChecked
        disabled={true}
        mixed={true}
        onChange={(id, checked) => console.log('CheckBox', id, checked)}
      >
        Mixed Diasabled (Black)
      </CheckBox>
      <CheckBox
        size="sm"
        onChange={(id, checked) => console.log('CheckBox', id, checked)}
      />
      <CheckBox
        defaultChecked
        size="sm"
        onChange={(id, checked) => console.log('CheckBox', id, checked)}
      />
      <CheckBox
        color="black"
        defaultChecked
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
        checkList={[
          { id: '1', children: 'Test' },
          { id: '2', children: 'Test' },
          { id: '3', children: 'Test' },
        ]}
        onChange={(id, checked) =>
          console.log('CheckBoxkSet Test', id, checked)
        }
      >
        CheckBoxSet Default
      </CheckBoxSet>
      <CheckBoxSet
        checkList={[
          { id: '01', children: 'Test', defaultChecked: true },
          { id: '02', children: 'Test', defaultChecked: true },
          { id: '03', children: 'Test', defaultChecked: true },
        ]}
        onChange={(id, checked) =>
          console.log('CheckBoxkSet Test', id, checked)
        }
      >
        CheckBoxSet Checked
      </CheckBoxSet>
      <CheckBoxSet
        checkList={[
          { id: '001', children: 'Test', defaultChecked: true },
          { id: '002', children: 'Test', defaultChecked: false },
          { id: '003', children: 'Test', defaultChecked: false },
        ]}
        onChange={(id, checked) =>
          console.log('CheckBoxkSet Test', id, checked)
        }
      >
        CheckBoxSet Mixed
      </CheckBoxSet>
      <CheckBoxSet
        color="black"
        checkList={[
          { id: '0001', children: 'Test', defaultChecked: true },
          { id: '0002', children: 'Test', defaultChecked: true },
          { id: '0003', children: 'Test', defaultChecked: true },
        ]}
        onChange={(id, checked) =>
          console.log('CheckBoxkSet Test', id, checked)
        }
      >
        CheckBoxSet checked (Black)
      </CheckBoxSet>
    </div>
  )
}

render()
```
