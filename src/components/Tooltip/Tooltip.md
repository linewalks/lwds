#### With Icon alone

```js
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import Button from '@components/Button/Button'
import Tooltip from '@components/Tooltip/Tooltip'

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
        <Tooltip caret text="icon">
          <Button variant="primary" size="sm" icon>
            <AddIcon />
          </Button>
        </Tooltip>
      </WrapButton>

      <WrapButton>
        <Tooltip caret text="basic button">
          <Button variant="primary" size="sm">
            basic button (bottom)
          </Button>
        </Tooltip>
      </WrapButton>

      <WrapButton>
        <Tooltip caret align="right" text="right">
          <Button variant="tertiary" size="md">
            right
          </Button>
        </Tooltip>
      </WrapButton>

      <WrapButton>
        <Tooltip caret align="left" text="left">
          <Button variant="primary" size="sm" icon>
            left
          </Button>
        </Tooltip>
      </WrapButton>

      <WrapButton>
        <Tooltip caret align="top" text="top">
          <Button variant="tertiary" size="lg">
            <AddIcon />
            top
          </Button>
        </Tooltip>
      </WrapButton>

      <WrapButton>
        <Tooltip caret align="top-left" text="top-left">
          <Button variant="primary" size="sm">
            top-left
          </Button>
        </Tooltip>
      </WrapButton>

      <WrapButton>
        <Tooltip caret align="top-right" text="top-right">
          <Button variant="tertiary" size="md">
            <AddIcon />
            top-right
          </Button>
        </Tooltip>
      </WrapButton>

      <WrapButton>
        <Tooltip caret align="bottom-left" text="bottom-left">
          <Button variant="primary" size="sm">
            bottom-left
          </Button>
        </Tooltip>
      </WrapButton>

      <WrapButton>
        <Tooltip caret align="bottom-right" text="bottom-right">
          <Button variant="tertiary" size="md">
            bottom-right
          </Button>
        </Tooltip>
      </WrapButton>
    </div>
  )
}
render()
```
