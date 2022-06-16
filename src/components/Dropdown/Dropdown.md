### Usage

- Use to start work depending on the selection option

<br />

### &lt;Dropdown /&gt;

- Use to handle dropdown menu open and work

#### Props

| Props Name |           Types           | Default |
| :--------: | :-----------------------: | :-----: |
|   isOpen   |          boolean          |  false  |
|    size    |        'md', 'lg'         |  'md'   |
|    icon    |          boolean          |  false  |
| direction  | 'left', 'center', 'right' | 'left'  |
| scrollable |          boolean          |  false  |
| className  |          string           |         |
|  onClick   |         Function          |         |
|   style    |          object           |         |

<br />

#### Basic Dropdown

```js
import React, { useState } from 'react'
import Button from '@components/Button/Button'
import Dropdown from '@components/Dropdown/Dropdown'

const render = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleButtonClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      style={{
        display: 'flex',
        height: '150px',
        justifyContent: 'space-around',
      }}
    >
      <span style={{ position: 'relative' }}>
        <Button onClick={handleButtonClick}>Dropdown</Button>
        <Dropdown isOpen={isOpen}>
          <Dropdown.Item id="edit" option="Edit" />
          <Dropdown.Item id="duplicate" option="Dupliate" />
          <Dropdown.Item id="delete" option="Delete" />
        </Dropdown>
      </span>
    </div>
  )
}

render()
```

#### size props

```js
import React, { useState } from 'react'
import Button from '@components/Button/Button'
import Dropdown from '@components/Dropdown/Dropdown'

const render = () => {
  const [isOpen, setIsOpen] = useState({
    md: false,
    lg: false,
  })

  const handleButtonClick = (id) => {
    setIsOpen({
      ...isOpen,
      [id]: !isOpen[id],
    })
  }

  return (
    <div
      style={{
        display: 'flex',
        height: '200px',
        justifyContent: 'space-around',
      }}
    >
      <span style={{ position: 'relative' }}>
        <Button onClick={() => handleButtonClick('md')}>md size</Button>
        <Dropdown isOpen={isOpen.md} size="md">
          <Dropdown.Item id="edit" option="Edit" />
          <Dropdown.Item id="duplicate" option="Dupliate" />
          <Dropdown.Item id="delete" option="Delete" />
        </Dropdown>
      </span>

      <span style={{ position: 'relative' }}>
        <Button onClick={() => handleButtonClick('lg')}>lg size</Button>
        <Dropdown isOpen={isOpen.lg} size="lg">
          <Dropdown.Item id="edit" option="Edit" />
          <Dropdown.Item id="duplicate" option="Dupliate" />
          <Dropdown.Item id="delete" option="Delete" />
        </Dropdown>
      </span>
    </div>
  )
}

render()
```

#### direction props

- For proper direction, use direction props with inline parent
- Inline parent must have `position: relative` style

```js
import React, { useState } from 'react'
import Button from '@components/Button/Button'
import Dropdown from '@components/Dropdown/Dropdown'

const render = () => {
  const [isOpen, setIsOpen] = useState({
    left: false,
    center: false,
    right: false,
  })

  const handleButtonClick = (id) => {
    setIsOpen({
      ...isOpen,
      [id]: !isOpen[id],
    })
  }

  return (
    <div
      style={{
        display: 'flex',
        height: '150px',
        justifyContent: 'space-around',
      }}
    >
      <span style={{ position: 'relative' }}>
        <Button onClick={() => handleButtonClick('left')}>
          left direction
        </Button>
        <Dropdown isOpen={isOpen.left} direction="left">
          <Dropdown.Item id="edit" option="Edit" />
          <Dropdown.Item id="duplicate" option="Dupliate" />
          <Dropdown.Item id="delete" option="Delete" />
        </Dropdown>
      </span>

      <span style={{ position: 'relative' }}>
        <Button onClick={() => handleButtonClick('center')}>
          center direction
        </Button>
        <Dropdown isOpen={isOpen.center} direction="center">
          <Dropdown.Item id="edit" option="Edit" />
          <Dropdown.Item id="duplicate" option="Dupliate" />
          <Dropdown.Item id="delete" option="Delete" />
        </Dropdown>
      </span>

      <span style={{ position: 'relative' }}>
        <Button onClick={() => handleButtonClick('right')}>
          right direction
        </Button>
        <Dropdown isOpen={isOpen.right} direction="right">
          <Dropdown.Item id="edit" option="Edit" />
          <Dropdown.Item id="duplicate" option="Dupliate" />
          <Dropdown.Item id="delete" option="Delete" />
        </Dropdown>
      </span>
    </div>
  )
}

render()
```

#### scrollable props

- If adjust scrollable props, render 6.5 default Dropdown.Item height

```js
import React, { useState } from 'react'
import Button from '@components/Button/Button'
import Dropdown from '@components/Dropdown/Dropdown'

const dropDownData = [
  { id: 1, option: 'option1' },
  { id: 2, option: 'option2' },
  { id: 3, option: 'option3' },
  { id: 4, option: 'option4' },
  { id: 5, option: 'option5' },
  { id: 6, option: 'option6' },
  { id: 7, option: 'option7' },
]

const render = () => {
  const [isOpen, setIsOpen] = useState({
    default: false,
    scroll: false,
  })

  const handleButtonClick = (id) => {
    setIsOpen({
      ...isOpen,
      [id]: !isOpen[id],
    })
  }

  return (
    <div
      style={{
        display: 'flex',
        height: '300px',
        justifyContent: 'space-around',
      }}
    >
      <span style={{ position: 'relative' }}>
        <Button onClick={() => handleButtonClick('default')}>Default</Button>
        <Dropdown isOpen={isOpen.default}>
          {dropDownData.map(({ id, option }) => (
            <Dropdown.Item key={`Dropdown__item__${id}`} option={option} />
          ))}
        </Dropdown>
      </span>

      <span style={{ position: 'relative' }}>
        <Button onClick={() => handleButtonClick('scroll')}>
          With scrollable
        </Button>
        <Dropdown isOpen={isOpen.scroll} scrollable>
          {dropDownData.map(({ id, option }) => (
            <Dropdown.Item key={`Dropdown__item__${id}`} option={option} />
          ))}
        </Dropdown>
      </span>
    </div>
  )
}

render()
```

#### Click event

- Pass item id to click event handler function

```js
import React, { useState } from 'react'
import Button from '@components/Button/Button'
import Dropdown from '@components/Dropdown/Dropdown'

const render = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleButtonClick = () => {
    setIsOpen(!isOpen)
  }

  const handleClick = (id) => {
    alert(id)
  }

  return (
    <div
      style={{
        display: 'flex',
        height: '150px',
        justifyContent: 'space-around',
      }}
    >
      <span style={{ position: 'relative' }}>
        <Button onClick={handleButtonClick}>Dropdown with click event</Button>
        <Dropdown isOpen={isOpen} onClick={handleClick}>
          <Dropdown.Item id="edit" option="Edit" />
          <Dropdown.Item id="duplicate" option="Dupliate" />
          <Dropdown.Item id="delete" option="Delete" />
        </Dropdown>
      </span>
    </div>
  )
}

render()
```

### &lt;Dropdown.Item /&gt;

- Use to render each dropdown menu

#### Props

| Props Name |       Types        | Default |  Option  |
| :--------: | :----------------: | :-----: | :------: |
|     id     |   string, number   |         | required |
|   option   |       string       |         | required |
|    desc    |       string       |         |          |
|    type    |      'danger'      |         |          |
|    icon    | React.ReactElement |         |          |
|  disabled  |      boolean       |         |          |
| className  |       string       |         |          |
|   style    |       object       |         |          |

<br />

#### desc props

```js
import React, { useState } from 'react'
import Button from '@components/Button/Button'
import Dropdown from '@components/Dropdown/Dropdown'

const render = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleButtonClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      style={{
        display: 'flex',
        height: '200px',
        justifyContent: 'space-around',
      }}
    >
      <span style={{ position: 'relative' }}>
        <Button onClick={handleButtonClick}>With description</Button>

        <Dropdown isOpen={isOpen}>
          <Dropdown.Item id="edit" option="Edit" desc="edit" />
          <Dropdown.Item id="duplicate" option="Dupliate" desc="duplicate" />
          <Dropdown.Item id="delete" option="Delete" desc="delete" />
        </Dropdown>
      </span>
    </div>
  )
}

render()
```

#### type props

```js
import React, { useState } from 'react'
import Button from '@components/Button/Button'
import Dropdown from '@components/Dropdown/Dropdown'

const render = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleButtonClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      style={{
        display: 'flex',
        height: '200px',
        justifyContent: 'space-around',
      }}
    >
      <span style={{ position: 'relative' }}>
        <Button onClick={handleButtonClick}>With type</Button>

        <Dropdown isOpen={isOpen}>
          <Dropdown.Item id="edit" option="Edit" desc="edit" />
          <Dropdown.Item id="duplicate" option="Dupliate" desc="duplicate" />
          <Dropdown.Item
            id="delete"
            option="Delete"
            desc="delete"
            type="danger"
          />
        </Dropdown>
      </span>
    </div>
  )
}

render()
```

#### icon props

- Include `icon` props in `<Dropdown />` component
- Include svg icon in `<Dropdown.Item />` icon props

```js
import React, { useState } from 'react'
import Button from '@components/Button/Button'
import Dropdown from '@components/Dropdown/Dropdown'
import {
  PencilIcon,
  DuplicateIcon,
  TrashIcon,
} from '@components/Icon/Icons/Action'

const render = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleButtonClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      style={{
        display: 'flex',
        height: '200px',
        justifyContent: 'space-around',
      }}
    >
      <span style={{ position: 'relative' }}>
        <Button onClick={handleButtonClick}>With icon</Button>

        <Dropdown icon isOpen={isOpen}>
          <Dropdown.Item
            id="edit"
            option="Edit"
            desc="edit"
            icon={<PencilIcon />}
          />
          <Dropdown.Item
            id="duplicate"
            option="Dupliate"
            desc="duplicate"
            icon={<DuplicateIcon />}
          />
          <Dropdown.Item
            id="delete"
            option="Delete"
            desc="delete"
            type="danger"
            icon={<TrashIcon />}
          />
        </Dropdown>
      </span>
    </div>
  )
}

render()
```

#### disabled props

```js
import React, { useState } from 'react'
import Button from '@components/Button/Button'
import Dropdown from '@components/Dropdown/Dropdown'
import {
  PencilIcon,
  DuplicateIcon,
  TrashIcon,
} from '@components/Icon/Icons/Action'

const render = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleButtonClick = () => {
    setIsOpen(!isOpen)
  }

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
      <span style={{ position: 'relative' }}>
        <Button onClick={handleButtonClick}>With disabled</Button>

        <Dropdown icon isOpen={isOpen} onClick={handleClick}>
          <Dropdown.Item
            id="edit"
            option="Edit"
            desc="edit"
            icon={<PencilIcon />}
          />
          <Dropdown.Item
            id="duplicate"
            option="Dupliate"
            desc="duplicate"
            icon={<DuplicateIcon />}
          />
          <Dropdown.Item
            disabled
            id="delete"
            option="Delete"
            desc="delete"
            type="danger"
            icon={<TrashIcon />}
          />
        </Dropdown>
      </span>
    </div>
  )
}

render()
```

### &lt;Dropdown.Divider /&gt;

- Use to divide dropdown menu

```js
import React, { useState } from 'react'
import Button from '@components/Button/Button'
import Dropdown from '@components/Dropdown/Dropdown'

const render = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (e) => {
    alert(e)
  }

  const handleButtonClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      style={{
        display: 'flex',
        height: '150px',
        justifyContent: 'space-around',
      }}
    >
      <span style={{ position: 'relative' }}>
        <Button onClick={handleButtonClick}>With Divider</Button>
        <Dropdown size="md" isOpen={isOpen} onClick={handleClick}>
          <Dropdown.Item id="edit" option="Edit" />
          <Dropdown.Item id="duplicate" option="Dupliate" />
          <Dropdown.Divider />
          <Dropdown.Item id="delete" option="Delete" type="danger" />
        </Dropdown>
      </span>
    </div>
  )
}

render()
```
