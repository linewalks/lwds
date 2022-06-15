#### With Icon alone

```js
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import Button from '@components/Button/Button'
import Popover from '@components/Popover/Popover'

import AddIcon from '@components/Icon/Icons/Action/AddIcon'
import CloseIcon from '@components/Icon/Icons/Navigation/CloseIcon'

const WrapButton = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
`

const render = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
      <WrapButton>
        <Popover caret text="hello">
          <Button variant="primary" size="sm" icon>
            <AddIcon />
          </Button>
        </Popover>
      </WrapButton>

      <WrapButton>
        <Popover caret align="right" text="hello">
          <Button variant="tertiary" size="md" icon>
            <AddIcon />
          </Button>
        </Popover>
      </WrapButton>

      <WrapButton>
        <Popover caret align="left" text="hiasdfwer">
          <Button variant="primary" size="sm" icon>
            <AddIcon />
          </Button>
        </Popover>
      </WrapButton>

      <WrapButton>
        <Popover caret align="top" text="hiasdfwer">
          <Button variant="tertiary" size="lg">
            <AddIcon />
            asdlfkqlwkmelr
          </Button>
        </Popover>
      </WrapButton>

      <WrapButton>
        <Popover caret align="top-left" text="helloqwerwerw">
          <Button variant="primary" size="sm">
            <AddIcon />
            asdfwerwer
          </Button>
        </Popover>
      </WrapButton>

      <WrapButton>
        <Popover caret align="top-right" text="hello">
          <Button variant="tertiary" size="md">
            <AddIcon />
            sdfwer
          </Button>
        </Popover>
      </WrapButton>

      <WrapButton>
        <Popover caret align="bottom-left" text="hiasdfwer">
          <Button variant="primary" size="sm">
            <AddIcon />
            asdfasdfwer
          </Button>
        </Popover>
      </WrapButton>

      <WrapButton>
        <Popover caret align="bottom-right" text="hiasdfwer">
          <Button variant="tertiary" size="md">
            <AddIcon />
            asdfwerwer
          </Button>
        </Popover>
      </WrapButton>
    </div>
  )
}
render()
```
