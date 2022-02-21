#### Buttons by variant

- variants: colors and types
- disabled style is same on all variants.

```js
import Button from '@components/Button/Button'

const render = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px',
    }}
  >
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="tertiary">Tertiary</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="ghost" ghostType="important">
      Ghost Important
    </Button>
    <Button variant="ghost" ghostType="danger">
      Ghost Danger
    </Button>
    <Button variant="danger_primary">Danger</Button>
    <Button variant="danger_tertiary">Danger</Button>
  </div>
)
render()
```

#### Buttons by size

```js
import Button from '@components/Button/Button'

const render = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px',
    }}
  >
    <Button size="sm">sm - Small</Button>
    <Button size="md">md - Normal</Button>
    <Button size="lg">lg - Large</Button>
    <Button size="xl">xl - ExtraLarge</Button>
  </div>
)
render()
```

#### Buttons by size(responsive)

```js
import Button from '@components/Button/Button'

const render = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px',
    }}
  >
    <Button size="sm" responsiveHeight>
      sm - Small (rem)
    </Button>
    <Button size="md" responsiveHeight>
      md - Normal (rem)
    </Button>
    <Button size="lg" responsiveHeight>
      lg - Large (rem)
    </Button>
    <Button size="xl" responsiveHeight>
      xl - ExtraLarge (rem)
    </Button>
  </div>
)
render()
```

#### Bold text

- Bold font weight is default.
- Set bold as false for normal font weight.

```js
import Button from '@components/Button/Button'

const render = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px',
    }}
  >
    <Button variant="primary" bold={true}>
      Bold
    </Button>
    <Button variant="secondary" bold={false}>
      Normal
    </Button>
    <Button variant="tertiary" bold={true}>
      Bold
    </Button>
    <Button variant="ghost" bold={false}>
      Normal
    </Button>
    <Button variant="danger_primary" bold={true}>
      Bold
    </Button>
    <Button variant="danger_tertiary" bold={false}>
      Normal
    </Button>
  </div>
)
render()
```

#### With Icon

```js
import Button from '@components/Button/Button'
import ChevronIcon from '@components/Icon/Icons/Navigation/ChevronIcon'

const render = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px',
    }}
  >
    <Button
      variant="primary"
      size="md"
      rightIcon={<ChevronIcon direction="right" />}
    >
      Let's Go!
    </Button>
    <Button
      variant="secondary"
      size="md"
      leftIcon={<ChevronIcon direction="left" />}
    >
      Create
    </Button>
    <Button
      variant="tertiary"
      size="md"
      leftIcon={<ChevronIcon direction="left" />}
      rightIcon={<ChevronIcon direction="right" />}
    >
      Chaos
    </Button>
    <Button
      variant="ghost"
      size="lg"
      rightIcon={<ChevronIcon direction="right" />}
    >
      Let's Go!
    </Button>
    <Button
      variant="danger_primary"
      size="lg"
      leftIcon={<ChevronIcon direction="right" />}
    >
      Create
    </Button>
    <Button
      variant="danger_tertiary"
      size="lg"
      leftIcon={<ChevronIcon direction="right" />}
      rightIcon={<ChevronIcon direction="right" />}
    >
      Chaos
    </Button>
  </div>
)
render()
```

#### With Icon Size by Button

```js
import Button from '@components/Button/Button'
import ChevronIcon from '@components/Icon/Icons/Navigation/ChevronIcon'

const render = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px',
    }}
  >
    <Button
      variant="primary"
      size="sm"
      leftIcon={<ChevronIcon direction="left" />}
      rightIcon={<ChevronIcon direction="right" />}
    >
      sm (icon 16px)
    </Button>
    <Button
      variant="primary"
      size="md"
      leftIcon={<ChevronIcon direction="left" />}
      rightIcon={<ChevronIcon direction="right" />}
    >
      md (icon 20px)
    </Button>
    <Button
      variant="primary"
      size="lg"
      leftIcon={<ChevronIcon direction="left" />}
      rightIcon={<ChevronIcon direction="right" />}
    >
      lg (icon 24px)
    </Button>
    <Button
      variant="primary"
      size="xl"
      leftIcon={<ChevronIcon direction="left" />}
      rightIcon={<ChevronIcon direction="right" />}
    >
      xl (icon 24px)
    </Button>
  </div>
)
render()
```

#### With Icon alone

```js
import styled from 'styled-components'

import Button from '@components/Button/Button'
import AddIcon from '@components/Icon/Icons/Action/AddIcon'
import CloseIcon from '@components/Icon/Icons/Navigation/CloseIcon'

const WrapButton = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
`

const render = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
    <WrapButton>
      <span>sm - icon(xs)</span>
      <Button variant="primary" size="sm" icon>
        <AddIcon />
      </Button>
    </WrapButton>

    <WrapButton>
      <span>md - icon(sm)</span>
      <Button variant="tertiary" size="md" icon>
        <AddIcon />
      </Button>
    </WrapButton>

    <WrapButton>
      <span>lg - icon(md)</span>
      <Button variant="danger_primary" size="lg" icon>
        <CloseIcon />
      </Button>
    </WrapButton>

    <WrapButton>
      <span>xl - icon(md)</span>
      <Button variant="danger_tertiary" size="xl" icon>
        <CloseIcon />
      </Button>
    </WrapButton>
  </div>
)
render()
```

#### Loading indicator

- by variants

```js
import Button from '@components/Button/Button'

const render = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px',
    }}
  >
    <Button loading variant="primary">
      Primary
    </Button>
    <Button loading variant="secondary">
      Secondary
    </Button>
    <Button loading variant="tertiary">
      Tertiary
    </Button>
    <Button loading variant="ghost">
      Ghost
    </Button>
    <Button loading variant="danger_primary">
      Danger
    </Button>
    <Button loading variant="danger_tertiary">
      Danger
    </Button>
  </div>
)
render()
```

- by sizes

```js
import Button from '@components/Button/Button'

const render = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px',
    }}
  >
    <Button loading size="sm">
      sm - Small
    </Button>
    <Button loading size="md">
      md - Normal
    </Button>
    <Button loading size="lg">
      lg - Large
    </Button>
    <Button loading size="xl">
      xl - ExtraLarge
    </Button>
  </div>
)
render()
```
