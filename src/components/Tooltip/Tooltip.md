<br />

### Props

|   Props Name    |                                                          Types                                                           | Default |
| :-------------: | :----------------------------------------------------------------------------------------------------------------------: | :-----: |
|    placement    | top, bottom, left, right, top-left, top-right, bottom-left, bottom-right, left-top, left-bottom, right-top, right-bottom | bottom  |
|      text       |                                                   string, ReactElement                                                   |         |
|      align      |                                                    left, center,right                                                    |  left   |
|     variant     |                                                      default, white                                                      | default |
|    hasCaret     |                                                         boolean                                                          |  false  |
|    isAdjust     |                                                         boolean                                                          |  true   |
|   defaultOpen   |                                                         boolean                                                          |  false  |
| parentContainer |                                                         function                                                         |         |
|    className    |                                                          string                                                          |         |
|      style      |                                                          object                                                          |   {}    |

---

<br>
### Usage

#### Placement

- Placement provide 12 directions.

```js
import React from 'react'
import styled from 'styled-components'

import _Button from '@components/Button/Button'
import Tooltip from '@components/Tooltip/Tooltip'

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
`

const render = () => {
  return (
    <div>
      <FlexDiv
        style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap', gap: 4 }}
      >
        <Tooltip placement="top-left" text="top-left">
          <Button variant="tertiary" size="md">
            TOP-LEFT
          </Button>
        </Tooltip>

        <Tooltip placement="top" text="top">
          <Button variant="tertiary" size="md">
            TOP
          </Button>
        </Tooltip>
        <Tooltip placement="top-right" text="top-right">
          <Button variant="tertiary" size="md">
            TOP-RIGHT
          </Button>
        </Tooltip>
      </FlexDiv>

      <FlexDiv
        style={{
          width: buttonWidth,
          float: 'left',
          flexDirection: 'column',
          gap: 4,
        }}
      >
        <Tooltip placement="left-top" text="left-top">
          <Button variant="tertiary" size="md">
            LEFT-TOP
          </Button>
        </Tooltip>
        <Tooltip placement="left" text="left">
          <Button variant="tertiary" size="md">
            LEFT
          </Button>
        </Tooltip>
        <Tooltip placement="left-bottom" text="left">
          <Button variant="tertiary" size="md">
            LEFT-BOTTOM
          </Button>
        </Tooltip>
      </FlexDiv>

      <FlexDiv
        style={{
          flexDirection: 'column',
          gap: 4,
          width: buttonWidth,
          marginLeft: buttonWidth * 4 + gap * 2,
        }}
      >
        <Tooltip placement="right-top" text="right">
          <Button variant="tertiary" size="md">
            RIGHT-TOP
          </Button>
        </Tooltip>
        <Tooltip placement="right" text="right">
          <Button variant="tertiary" size="md">
            RIGHT
          </Button>
        </Tooltip>
        <Tooltip placement="right-bottom" text="right">
          <Button variant="tertiary" size="md">
            RIGHT-BOTTOM
          </Button>
        </Tooltip>
      </FlexDiv>

      <FlexDiv
        style={{
          marginLeft: buttonWidth,
          clear: 'both',
          whiteSpace: 'nowrap',
          gap: 4,
        }}
      >
        <Tooltip placement="bottom-left" text="bottom-left">
          <Button variant="tertiary" size="md">
            BOTTOM-LEFT
          </Button>
        </Tooltip>

        <Tooltip placement="bottom" text="bottom">
          <Button variant="tertiary" size="md">
            BOTTOM
          </Button>
        </Tooltip>

        <Tooltip
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

#### Variant

- Variant provide 2 types. 'default', 'white'

```js
import React from 'react'

import Button from '@components/Button/Button'
import Tooltip from '@components/Tooltip/Tooltip'

const render = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Tooltip placement="left" text="variant default">
        <Button variant="tertiary" size="md">
          DEFAULT
        </Button>
      </Tooltip>
      <Tooltip placement="left" text="variant white" variant="white">
        <Button variant="tertiary" size="md">
          WHITE
        </Button>
      </Tooltip>
    </div>
  )
}
render()
```

#### Align

- Align provide 3 types. 'left', 'center', 'right'

```js
import React from 'react'

import Button from '@components/Button/Button'
import Tooltip from '@components/Tooltip/Tooltip'

const render = () => {
  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <Tooltip placement="bottom" text="align left" style={{ width: 100 }}>
        <Button variant="tertiary" size="md">
          LEFT
        </Button>
      </Tooltip>
      <Tooltip
        placement="bottom"
        text="align center"
        align="center"
        style={{ width: 100 }}
      >
        <Button variant="tertiary" size="md">
          CENTER
        </Button>
      </Tooltip>
      <Tooltip
        placement="bottom"
        text="align right"
        align="right"
        style={{ width: 100 }}
      >
        <Button className="ve" variant="tertiary" size="md">
          RIGHT
        </Button>
      </Tooltip>
      <Tooltip
        placement="bottom"
        text="align right"
        align="right"
        style={{ width: 100 }}
      >
        RRRIGHT
      </Tooltip>
    </div>
  )
}
render()
```

#### Caret

```js
import React from 'react'

import Button from '@components/Button/Button'
import Tooltip from '@components/Tooltip/Tooltip'

const render = () => {
  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <Tooltip placement="bottom" text="DEFAULT CARET" hasCaret>
        <Button variant="tertiary" size="md">
          CARET(DEFAULT)
        </Button>
      </Tooltip>
      <Tooltip placement="bottom" text="WHITE CARET" hasCaret variant="white">
        <Button variant="tertiary" size="md">
          CARET(WHITE)
        </Button>
      </Tooltip>
    </div>
  )
}
render()
```

#### ParentContainer

- You can use React.useRef or document.querySelector

```js
import React from 'react'
import styled from 'styled-components'

import Button from '@components/Button/Button'
import Tooltip from '@components/Tooltip/Tooltip'

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 120px;
  height: 32px;

  border: 2px dashed magenta;
`

const render = () => {
  const elBox = React.useRef(null)

  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <Box ref={elBox}>BOX</Box>
      <Tooltip
        placement="top"
        text="with parent"
        hasCaret
        parentContainer={() => elBox.current}
      >
        <Button variant="tertiary" size="md">
          HAS PARENT REF
        </Button>
      </Tooltip>
      <Box className="parent-tooltip">BOX</Box>
      <Tooltip
        placement="top"
        text="with parent"
        hasCaret
        parentContainer={() => document.querySelector('.parent-tooltip')}
      >
        <Button variant="tertiary" size="md">
          HAS PARENT QUERY
        </Button>
      </Tooltip>
    </div>
  )
}
render()
```

#### Overflow Text And Custom Tooltip

```js
import React from 'react'
import styled from 'styled-components'

import _Button from '@components/Button/Button'
import Tooltip from '@components/Tooltip/Tooltip'

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
  const longText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

  const TestComponent = (
    <div>
      <div style={{ width: 120, fontSize: 23 }}>TITLE</div>
      <div style={{ width: 300, height: 200, marginTop: 24 }}>BODY</div>
    </div>
  )

  return (
    <div>
      <Tooltip isPortal hasCaret placement="top-left" text={longText}>
        <Button variant="tertiary" size="md">
          LONG TEXT
        </Button>
      </Tooltip>
      <Tooltip isPortal hasCaret placement="bottom-left" text={TestComponent}>
        <Button variant="tertiary" size="md">
          COMPONENT
        </Button>
      </Tooltip>
    </div>
  )
}
render()
```

#### Auto Adjust tooltip position

```js
import React from 'react'
import styled from 'styled-components'

import _Button from '@components/Button/Button'
import Tooltip from '@components/Tooltip/Tooltip'

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

const FlexWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 80px;
`

const render = () => {
  const longText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

  const shortText = 'Short~'

  return (
    <FlexWrapper>
      <Tooltip isPortal hasCaret placement="left" text={longText}>
        <Button variant="tertiary" size="md" className="shi">
          ADJUST
        </Button>
      </Tooltip>
      <Tooltip
        isPortal
        hasCaret
        isAdjust={false}
        placement="left"
        text={shortText}
      >
        <Button variant="tertiary" size="md">
          NOT ADJUST
        </Button>
      </Tooltip>
    </FlexWrapper>
  )
}
render()
```
