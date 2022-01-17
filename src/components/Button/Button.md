#### Buttons by variant

- variants: colors and types
- disabled style is same on all variants.

```js
<div
  style={{
    backgroundColor: '#eeeeee',
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
```

#### Buttons by size

```js
<div
  style={{
    backgroundColor: '#eeeeee',
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
```

#### Buttons by size(responsive)

```js
<div
  style={{
    backgroundColor: '#eeeeee',
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
```

#### Bold text

- Bold font weight is default.
- Set bold as false for normal font weight.

```js
<div
  style={{
    backgroundColor: '#eeeeee',
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
```

#### With Icon

```js
import ChevronIcon from '@components/Icon/Icons/Navigation/ChevronIcon'

const Default = () => (
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
Default()
```

#### With Icon Size by Button

```js
import ChevronIcon from '@components/Icon/Icons/Navigation/ChevronIcon'

const Default = () => (
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
Default()
```

#### With Icon alone

```js
import styled from 'styled-components'
import AddIcon from '@components/Icon/Icons/Action/AddIcon'
import SearchIcon from '@components/Icon/Icons/Action/SearchIcon'

const WrapButton = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
`

const Default = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
    <WrapButton>
      <Button icon variant="danger_tertiary">
        <AddIcon rotate={20} />
      </Button>
      <span>rotate</span>
    </WrapButton>

    <WrapButton>
      <Button icon variant="tertiary">
        <SearchIcon transform="scale(-1,1)" />
      </Button>
      <span>flip</span>
    </WrapButton>

    <WrapButton>
      <Button icon>
        <SearchIcon width="16px" height="16px" />
      </Button>
      <span>16px 아이콘 삽입</span>
    </WrapButton>
  </div>
)

Default()
```
