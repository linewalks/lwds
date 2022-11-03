<br />

### Usage

- describe button (including icon-only button)
- Use when defining a term or inline item
- When applying multiline,
  <br />
  please wrap text prop with React element then place `<br />` HTML Element where you want to force a line break.

<br />

### Props

|   Props Name   |                                       Types                                       |  Default  |
| :------------: | :-------------------------------------------------------------------------------: | :-------: |
|   placement    | 'top','bottom','left','right','top-left','top-right','bottom-left','bottom-right' | 'bottom'  |
|      text      |                                      string                                       |           |
|    variant     |                                'default', 'white'                                 | 'default' |
|    hasCaret    |                                      boolean                                      |   false   |
|    isPortal    |                                      boolean                                      |   false   |
| portalQueryStr |                                      string                                       |   null    |
|   className    |                                      string                                       |           |
|     style      |                                      object                                       |    {}     |

<br />

### Example Code

```js
import React from 'react'
import styled from 'styled-components'

import _Button from '@components/Button/Button'
import Tooltip from '@components/Tooltip/NewTooltip'

const buttonWidth = 140
const buttonHeight = 50
const gap = 4

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`

const Button = styled(_Button)`
  width: ${buttonWidth}px;
  height: ${buttonHeight}px !important;
  margin: ${gap}px;
`

const render = () => {
  const pRef = React.useRef(null)

  return (
    <div className="pRef">
      <FlexDiv style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
        <Tooltip
          isPortal
          hasCaret
          placement="top-left"
          text="top-left"
          parentContainer={() => document.querySelector('.pRef')}
        >
          <Button variant="tertiary" size="md">
            TOP-LEFT(C)
          </Button>
        </Tooltip>

        <Tooltip isPortal hasCaret placement="top" text="top" variant="white">
          <Button variant="tertiary" size="md">
            TOP
          </Button>
        </Tooltip>
        <Tooltip isPortal hasCaret placement="top-right" text="top-right">
          <Button variant="tertiary" size="md">
            TOP-RIGHT(C)
          </Button>
        </Tooltip>
      </FlexDiv>

      <div style={{ width: buttonWidth, float: 'left' }}>
        <Tooltip
          isPortal
          hasCaret
          placement="left-top"
          text="left"
          variant="white"
        >
          <Button variant="tertiary" size="md">
            LEFT-TOP(C)
          </Button>
        </Tooltip>
        <Tooltip isPortal hasCaret placement="left" text="left" variant="white">
          <Button variant="tertiary" size="md">
            LEFT(C)
          </Button>
        </Tooltip>
        <Tooltip
          isPortal
          hasCaret
          placement="left-bottom"
          text="left"
          variant="white"
        >
          <Button variant="tertiary" size="md">
            LEFT-BOTTOM(C)
          </Button>
        </Tooltip>
      </div>

      <div
        style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + gap * 4 }}
      >
        <Tooltip isPortal placement="right-top" text="right" variant="white">
          <Button variant="tertiary" size="md">
            RIGHT-TOP
          </Button>
        </Tooltip>
        <Tooltip isPortal placement="right" text="right" variant="white">
          <Button variant="tertiary" size="md">
            RIGHT
          </Button>
        </Tooltip>
        <Tooltip
          isPortal
          hasCaret
          placement="right-bottom"
          text="right"
          variant="white"
        >
          <Button variant="tertiary" size="md">
            RIGHT-BOTTOM(C)
          </Button>
        </Tooltip>
      </div>

      <FlexDiv
        style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}
      >
        <Tooltip isPortal hasCaret placement="bottom-left" text="bottom-left">
          <Button variant="tertiary" size="md">
            BOTTOM-LEFT(C)
          </Button>
        </Tooltip>

        <Tooltip isPortal placement="bottom" text="bottom" variant="white">
          <Button variant="tertiary" size="md">
            BOTTOM
          </Button>
        </Tooltip>

        <Tooltip
          isPortal
          placement="bottom-right"
          text={
            <>
              bottom
              <br />
              right
            </>
          }
        >
          <Button variant="tertiary" size="md">
            BOTTOM-RIGHT
          </Button>
        </Tooltip>
      </FlexDiv>
    </div>
  )
}
render()
```

```js
import React from 'react'
import styled from 'styled-components'

import _Button from '@components/Button/Button'
import Tooltip from '@components/Tooltip/NewTooltip'

const buttonWidth = 140
const buttonHeight = 50
const gap = 4

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`

const Button = styled(_Button)`
  width: ${buttonWidth}px;
  height: ${buttonHeight}px !important;
  margin: ${gap}px;
`

const render = () => {
  const pRef = React.useRef(null)
  const longText =
    "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

  return (
    <div>
      <Tooltip isPortal hasCaret placement="top-left" text={longText}>
        <Button variant="tertiary" size="md">
          LONG TEXT
        </Button>
      </Tooltip>
    </div>
  )
}
render()
```
