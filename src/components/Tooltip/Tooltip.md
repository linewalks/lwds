<br />

### Usage

- describe button (including icon-only button)
- Use when defining a term or inline item

<br />

### Props

| Props Name |                                       Types                                       | Default  |
| :--------: | :-------------------------------------------------------------------------------: | :------: |
|   align    | 'top','bottom','left','right','top-left','top-right','bottom-left','bottom-right' | 'bottom' |
|   caret    |                                      boolean                                      |  false   |
|    text    |                                      string                                       |          |
| className  |                                      string                                       |          |

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
    <Tooltip caret align="top-left" text="top-left">
      <Button variant="tertiary" size="md">
        top-left (+caret)
      </Button>
    </Tooltip>

    <Tooltip align="top" text="top">
      <Button variant="tertiary" size="md">
        top
      </Button>
    </Tooltip>
    <Tooltip caret align="top-right" text="top-right">
      <Button variant="tertiary" size="md">
        top-right (+caret)
      </Button>
    </Tooltip>

    <Tooltip caret align="left" text="left">
      <Button variant="tertiary" size="md">
        left (+caret)
      </Button>
    </Tooltip>

    <Tooltip text="basic button">
      <Button variant="primary" size="md">
        default
      </Button>
    </Tooltip>

    <Tooltip caret align="right" text="right">
      <Button variant="tertiary" size="md">
        right (+caret)
      </Button>
    </Tooltip>

    <Tooltip caret align="bottom-left" text="bottom-left">
      <Button variant="tertiary" size="md">
        bottom-left (+caret)
      </Button>
    </Tooltip>

    <Tooltip align="bottom" text="bottom">
      <Button variant="tertiary" size="md">
        bottom
      </Button>
    </Tooltip>

    <Tooltip caret align="bottom-right" text="bottom-right">
      <Button variant="tertiary" size="md">
        bottom-right (+caret)
      </Button>
    </Tooltip>
  </GridBox>
)

render()
```
