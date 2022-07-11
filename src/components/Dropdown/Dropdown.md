### &lt;Dropdown /&gt;

- 선택 작업을 구성하기 위해 사용합니다.

#### Props

|   Props Name   |           Types           | Default |
| :------------: | :-----------------------: | :-----: |
|  triggerNode   |    React.ReactElement     |         |
|     isOpen     |          boolean          |         |
|      size      |        'md', 'lg'         |  'md'   |
|      icon      |          boolean          |  false  |
|   placement    | 'left', 'center', 'right' | 'left'  |
|   scrollable   |          boolean          |  false  |
|   className    |          string           |         |
|  containerRef  |      React.RefObject      |         |
|    isPortal    |          boolean          |  false  |
| portalQueryStr |          string           |         |
|    onClose     |         Function          |         |
|     style      |          object           |         |

<br />

#### Basic Dropdown

- triggerNode 에 Dropdown 이 구성될 Element 를 전달합니다.
- `<Dropdown.Item/>` 을 통해 선택 메뉴를 구성합니다.

```js
import React from 'react'
import Button from '@components/Button/Button'
import Dropdown from '@components/Dropdown/Dropdown'

const render = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '150px',
        justifyContent: 'space-around',
      }}
    >
      <Dropdown triggerNode={<Button>Dropdown</Button>}>
        <Dropdown.Item label="Edit" id="edit" />
        <Dropdown.Item label="Dupliate" id="duplicate" />
        <Dropdown.Item label="Delete" id="delete" />
      </Dropdown>
    </div>
  )
}

render()
```

#### Custom open Dropdown

- Dropdown 내부에 기본적인 open 제어 로직이 추가되어있습니다.
- `isOpen` props 와 `onClose` props를 통해 Dropdown 제어를 커스텀할 수 있습니다.
- `onClose` 는 Dropdown 메뉴를 선택하거나 Dropdown 외부를 클릭할 때 트리거됩니다.

```js
import React, { useState } from 'react'
import Button from '@components/Button/Button'
import Dropdown from '@components/Dropdown/Dropdown'

const render = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      style={{
        display: 'flex',
        height: '150px',
        justifyContent: 'space-around',
      }}
    >
      <Button onClick={() => setIsOpen(!isOpen)}>Custom Open</Button>
      <Dropdown
        isOpen={isOpen}
        triggerNode={<Button>Dropdown</Button>}
        onClose={() => setIsOpen(false)}
      >
        <Dropdown.Item label="Edit" id="edit" />
        <Dropdown.Item label="Dupliate" id="duplicate" />
        <Dropdown.Item label="Delete" id="delete" />
      </Dropdown>
    </div>
  )
}

render()
```

#### size props

```js
import React from 'react'
import Button from '@components/Button/Button'
import Dropdown from '@components/Dropdown/Dropdown'

const render = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '200px',
        justifyContent: 'space-around',
      }}
    >
      <Dropdown size="md" triggerNode={<Button>md size</Button>}>
        <Dropdown.Item label="Edit" id="edit" />
        <Dropdown.Item label="Dupliate" id="duplicate" />
        <Dropdown.Item label="Delete" id="delete" />
      </Dropdown>

      <Dropdown size="lg" triggerNode={<Button>lg size</Button>}>
        <Dropdown.Item label="Edit" id="edit" />
        <Dropdown.Item label="Dupliate" id="duplicate" />
        <Dropdown.Item label="Delete" id="delete" />
      </Dropdown>
    </div>
  )
}

render()
```

#### placement props

```js
import React from 'react'
import Button from '@components/Button/Button'
import Dropdown from '@components/Dropdown/Dropdown'

const render = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '150px',
        justifyContent: 'space-around',
      }}
    >
      <Dropdown placement="left" triggerNode={<Button>left placement</Button>}>
        <Dropdown.Item label="Edit" id="edit" />
        <Dropdown.Item label="Dupliate" id="duplicate" />
        <Dropdown.Item label="Delete" id="delete" />
      </Dropdown>

      <Dropdown
        placement="center"
        triggerNode={<Button>center placement</Button>}
      >
        <Dropdown.Item label="Edit" id="edit" />
        <Dropdown.Item label="Dupliate" id="duplicate" />
        <Dropdown.Item label="Delete" id="delete" />
      </Dropdown>

      <Dropdown
        placement="right"
        triggerNode={<Button>right placement</Button>}
      >
        <Dropdown.Item label="Edit" id="edit" />
        <Dropdown.Item label="Dupliate" id="duplicate" />
        <Dropdown.Item label="Delete" id="delete" />
      </Dropdown>
    </div>
  )
}

render()
```

#### scrollable props

- `scrollable` props 를 사용하면 6.5개의 기본 메뉴를 노출시킵니다.

```js
import React from 'react'
import Button from '@components/Button/Button'
import Dropdown from '@components/Dropdown/Dropdown'

const dropDownData = [
  { label: 'option1', id: 1 },
  { label: 'option2', id: 2 },
  { label: 'option3', id: 3 },
  { label: 'option4', id: 4 },
  { label: 'option5', id: 5 },
  { label: 'option6', id: 6 },
  { label: 'option7', id: 7 },
]

const render = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '300px',
        justifyContent: 'space-around',
      }}
    >
      <Dropdown triggerNode={<Button>Default</Button>}>
        {dropDownData.map(({ label, id }, idx) => (
          <Dropdown.Item key={`Dropdown__item__${idx}`} label={label} id={id} />
        ))}
      </Dropdown>

      <Dropdown scrollable triggerNode={<Button>Default</Button>}>
        {dropDownData.map(({ label, id }, idx) => (
          <Dropdown.Item key={`Dropdown__item__${idx}`} label={label} id={id} />
        ))}
      </Dropdown>
    </div>
  )
}

render()
```

#### portal props

- `isPortal` props 를 통해 Dropdown 을 전역적으로 배치할 수 있습니다.
- `portalQueryStr` props 를 통해 Portal 위치를 지정할 수 있습니다.
  - Portal 위치를 지정할 Element 의 쿼리 스트링을 입력합니다.
  - `portalQueryStr` 을 지정하지 않거나, 해당 쿼리 스트링으로 Element을 찾을 수 없는 경우 Portal 이 적용되는 위치는 document.body 로 자동 지정됩니다.

```js
import React from 'react'
import Button from '@components/Button/Button'
import Dropdown from '@components/Dropdown/Dropdown'

const render = () => {
  return (
    <div style={{ height: '80px', overflow: 'scroll' }}>
      <div
        style={{
          display: 'flex',
          height: '100px',
          justifyContent: 'space-around',
        }}
      >
        <Dropdown triggerNode={<Button>Dropdown Default</Button>}>
          <Dropdown.Item label="Edit" id="edit" />
          <Dropdown.Item label="Dupliate" id="duplicate" />
          <Dropdown.Item label="Delete" id="delete" />
        </Dropdown>
        <Dropdown isPortal triggerNode={<Button>Dropdown Portal</Button>}>
          <Dropdown.Item label="Edit" id="edit" />
          <Dropdown.Item label="Dupliate" id="duplicate" />
          <Dropdown.Item label="Delete" id="delete" />
        </Dropdown>
      </div>
    </div>
  )
}

render()
```

#### Click event

- 이벤트 버블링을 통해 클릭 이벤트 핸들러에 `Dropdown.Item`의 id 를 전달합니다.

```js
import React from 'react'
import Button from '@components/Button/Button'
import Dropdown from '@components/Dropdown/Dropdown'
import {
  PencilIcon,
  DuplicateIcon,
  TrashIcon,
} from '@components/Icon/Icons/Action'

const render = () => {
  const handleClick = (id) => {
    alert(id)
  }

  return (
    <div
      style={{
        display: 'flex',
        height: '200px',
        justifyContent: 'space-around',
      }}
    >
      <Dropdown
        icon
        triggerNode={<Button>With click event</Button>}
        onClick={handleClick}
      >
        <Dropdown.Item
          disabled
          label="Edit"
          id="edit"
          desc="edit"
          icon={<PencilIcon />}
        />
        <Dropdown.Item
          label="Dupliate"
          id="duplicate"
          desc="duplicate"
          icon={<DuplicateIcon />}
        />
        <Dropdown.Item
          label="Delete"
          id="delete"
          desc="delete"
          type="danger"
          icon={<TrashIcon />}
        />
      </Dropdown>
    </div>
  )
}

render()
```

### &lt;Dropdown.Item /&gt;

- 각 Dropdown 메뉴를 구성하기 위해 사용합니다.

#### Props

| Props Name |               Types                | Default | Option |
| :--------: | :--------------------------------: | :-----: | :----: |
|   label    | string, number, React.ReactElement |         |        |
|     id     |           string, number           |         |        |
|    desc    |               string               |         |        |
|    type    |              'danger'              |         |        |
|    icon    |         React.ReactElement         |         |        |
|  disabled  |              boolean               |         |        |
| className  |               string               |         |        |
|  itemRef   |          React.RefObject           |         |        |
|  onClick   |              Function              |         |        |
|   style    |               object               |         |        |

<br />

#### desc props

- Dropdown 메뉴의 설명을 추가합니다.

```js
import React from 'react'
import Button from '@components/Button/Button'
import Dropdown from '@components/Dropdown/Dropdown'

const render = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '200px',
        justifyContent: 'space-around',
      }}
    >
      <Dropdown triggerNode={<Button>With description</Button>}>
        <Dropdown.Item label="Edit" id="edit" desc="edit" />
        <Dropdown.Item label="Dupliate" id="duplicate" desc="duplicate" />
        <Dropdown.Item label="Delete" id="delete" desc="delete" />
      </Dropdown>
    </div>
  )
}

render()
```

#### type props

```js
import React from 'react'
import Button from '@components/Button/Button'
import Dropdown from '@components/Dropdown/Dropdown'

const render = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '200px',
        justifyContent: 'space-around',
      }}
    >
      <Dropdown triggerNode={<Button>With type</Button>}>
        <Dropdown.Item label="Edit" id="edit" desc="edit" />
        <Dropdown.Item label="Dupliate" id="duplicate" desc="duplicate" />
        <Dropdown.Item label="Delete" id="delete" desc="delete" type="danger" />
      </Dropdown>
    </div>
  )
}

render()
```

#### icon props

- 아이콘을 사용하기 위해 `<Dropdown />` 컴포넌트에 icon props를 전달합니다.
- `<Dropdown.Item />` icon props 에 아이콘을 전달합니다.

```js
import React from 'react'
import Button from '@components/Button/Button'
import Dropdown from '@components/Dropdown/Dropdown'
import {
  PencilIcon,
  DuplicateIcon,
  TrashIcon,
} from '@components/Icon/Icons/Action'

const render = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '200px',
        justifyContent: 'space-around',
      }}
    >
      <Dropdown icon triggerNode={<Button>With icon</Button>}>
        <Dropdown.Item
          label="Edit"
          id="edit"
          desc="edit"
          icon={<PencilIcon />}
        />
        <Dropdown.Item
          label="Dupliate"
          id="duplicate"
          desc="duplicate"
          icon={<DuplicateIcon />}
        />
        <Dropdown.Item
          label="Delete"
          id="delete"
          desc="delete"
          type="danger"
          icon={<TrashIcon />}
        />
      </Dropdown>
    </div>
  )
}

render()
```

#### disabled props

```js
import React from 'react'
import Button from '@components/Button/Button'
import Dropdown from '@components/Dropdown/Dropdown'
import {
  PencilIcon,
  DuplicateIcon,
  TrashIcon,
} from '@components/Icon/Icons/Action'

const render = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '200px',
        justifyContent: 'space-around',
      }}
    >
      <Dropdown icon triggerNode={<Button>With disabled</Button>}>
        <Dropdown.Item
          disabled
          label="Edit"
          id="edit"
          desc="edit"
          icon={<PencilIcon />}
        />
        <Dropdown.Item
          label="Dupliate"
          id="duplicate"
          desc="duplicate"
          icon={<DuplicateIcon />}
        />
        <Dropdown.Item
          label="Delete"
          id="delete"
          desc="delete"
          type="danger"
          icon={<TrashIcon />}
        />
      </Dropdown>
    </div>
  )
}

render()
```

#### Click event

- 클릭 이벤트 핸들러에 `Dropdown.Item`의 id 를 전달합니다.

```js
import React from 'react'
import Button from '@components/Button/Button'
import Dropdown from '@components/Dropdown/Dropdown'
import {
  PencilIcon,
  DuplicateIcon,
  TrashIcon,
} from '@components/Icon/Icons/Action'

const render = () => {
  const handleClick = (id) => {
    alert(id)
  }

  return (
    <div
      style={{
        display: 'flex',
        height: '200px',
        justifyContent: 'space-around',
      }}
    >
      <Dropdown icon triggerNode={<Button>With click event</Button>}>
        <Dropdown.Item
          disabled
          label="Edit"
          id="edit"
          desc="edit"
          icon={<PencilIcon />}
          onClick={handleClick}
        />
        <Dropdown.Item
          label="Dupliate"
          id="duplicate"
          desc="duplicate"
          icon={<DuplicateIcon />}
          onClick={handleClick}
        />
        <Dropdown.Item
          label="Delete"
          id="delete"
          desc="delete"
          type="danger"
          icon={<TrashIcon />}
          onClick={handleClick}
        />
      </Dropdown>
    </div>
  )
}

render()
```

### &lt;Dropdown.Divider /&gt;

- Dropdown 메뉴를 구분하기 위해 사용합니다.

```js
import React from 'react'
import Button from '@components/Button/Button'
import Dropdown from '@components/Dropdown/Dropdown'
import {
  PencilIcon,
  DuplicateIcon,
  TrashIcon,
} from '@components/Icon/Icons/Action'

const render = () => {
  const handleClick = (id) => {
    alert(id)
  }

  return (
    <div
      style={{
        display: 'flex',
        height: '250px',
        justifyContent: 'space-around',
      }}
    >
      <Dropdown icon triggerNode={<Button>With divider</Button>}>
        <Dropdown.Item
          disabled
          label="Edit"
          id="edit"
          desc="edit"
          icon={<PencilIcon />}
          onClick={handleClick}
        />
        <Dropdown.Item
          label="Dupliate"
          id="duplicate"
          desc="duplicate"
          icon={<DuplicateIcon />}
          onClick={handleClick}
        />
        <Dropdown.Divider />
        <Dropdown.Item
          label="Delete"
          id="delete"
          desc="delete"
          type="danger"
          icon={<TrashIcon />}
          onClick={handleClick}
        />
      </Dropdown>
    </div>
  )
}

render()
```
