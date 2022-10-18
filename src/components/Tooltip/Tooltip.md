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
|     align      | 'top','bottom','left','right','top-left','top-right','bottom-left','bottom-right' | 'bottom'  |
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
import styled from 'styled-components'

import Button from '@components/Button/Button'
import Tooltip from '@components/Tooltip/Tooltip'

const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 5px;
  width: 400px;
`

const render = () => (
  <GridBox>
    <Tooltip isPortal hasCaret align="top-left" text="top-left">
      <Button variant="tertiary" size="md">
        top-left (+ hasCaret)
      </Button>
    </Tooltip>

    <Tooltip isPortal align="top" text="top" variant="white">
      <Button variant="tertiary" size="md">
        top
      </Button>
    </Tooltip>
    <Tooltip isPortal hasCaret align="top-right" text="top-right">
      <Button variant="tertiary" size="md">
        top-right (+ hasCaret)
      </Button>
    </Tooltip>

    <Tooltip isPortal hasCaret align="left" text="left" variant="white">
      <Button variant="tertiary" size="md">
        left (+ hasCaret)
      </Button>
    </Tooltip>

    <Tooltip isPortal text="basic button">
      <Button variant="primary" size="md">
        default
      </Button>
    </Tooltip>

    <Tooltip isPortal hasCaret align="right" text="right" variant="white">
      <Button variant="tertiary" size="md">
        right (+ hasCaret)
      </Button>
    </Tooltip>

    <Tooltip isPortal hasCaret align="bottom-left" text="bottom-left">
      <Button variant="tertiary" size="md">
        bottom-left (+ hasCaret)
      </Button>
    </Tooltip>

    <Tooltip isPortal align="bottom" text="bottom" variant="white">
      <Button variant="tertiary" size="md">
        bottom
      </Button>
    </Tooltip>

    <Tooltip
      isPortal
      hasCaret
      align="bottom-right"
      text={
        <>
          bottom
          <br />
          right
        </>
      }
    >
      <Button variant="tertiary" size="md">
        bottom-right (+ hasCaret) (+ new line)
      </Button>
    </Tooltip>
  </GridBox>
)

render()
```
