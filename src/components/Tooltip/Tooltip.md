<br />

### Usage

- describe button (including icon-only button)
- Use when defining a term or inline item

<br />

### Props

| Props Name |                                       Types                                       | Default  |
| :--------: | :-------------------------------------------------------------------------------: | :------: |
|   align    | 'top','bottom','left','right','top-left','top-right','bottom-left','bottom-right' | 'bottom' |
|  hasCaret  |                                      boolean                                      |  false   |
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
    <Tooltip hasCaret align="top-left" text="top-left">
      <Button variant="tertiary" size="md">
        top-left (+ hasCaret)
      </Button>
    </Tooltip>

    <Tooltip align="top" text="top">
      <Button variant="tertiary" size="md">
        top
      </Button>
    </Tooltip>
    <Tooltip hasCaret align="top-right" text="top-right">
      <Button variant="tertiary" size="md">
        top-right (+ hasCaret)
      </Button>
    </Tooltip>

    <Tooltip hasCaret align="left" text="left">
      <Button variant="tertiary" size="md">
        left (+ hasCaret)
      </Button>
    </Tooltip>

    <Tooltip text="basic button">
      <Button variant="primary" size="md">
        default
      </Button>
    </Tooltip>

    <Tooltip hasCaret align="right" text="right">
      <Button variant="tertiary" size="md">
        right (+ hasCaret)
      </Button>
    </Tooltip>

    <Tooltip hasCaret align="bottom-left" text="bottom-left">
      <Button variant="tertiary" size="md">
        bottom-left (+ hasCaret)
      </Button>
    </Tooltip>

    <Tooltip align="bottom" text="bottom">
      <Button variant="tertiary" size="md">
        bottom
      </Button>
    </Tooltip>

    <Tooltip hasCaret align="bottom-right" text="bottom-right">
      <Button variant="tertiary" size="md">
        bottom-right (+ hasCaret)
      </Button>
    </Tooltip>
  </GridBox>
)

render()
```
