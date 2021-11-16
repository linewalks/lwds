#### Buttons by variant
- variants: colors and types
- disabled style is same on all variants.


```js
<div style={{ 
  backgroundColor: '#eeeeee',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px'
}}>
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="tertiary">Tertiary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger_primary">Danger</Button>
<Button variant="danger_tertiary">Danger</Button>
</div>
```

#### Buttons by size
```js
<div style={{
  backgroundColor: '#eeeeee',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px'
}}>
  <Button size="sm">sm - Small</Button>
  <Button size="md">md - Normal</Button>
  <Button size="lg">lg - Large</Button>
  <Button size="xlg">xlg - ExtraLarge</Button>
</div>
```
#### Block Buttons
* width: 100%
```js
<div style={{ 
  backgroundColor: '#eeeeee',
  padding: '8px'
}}>
  <Button size="sm" block>sm - Small</Button>
  <Button size="sm" block>sm - Small</Button>
  <Button size="md" block>md - Normal</Button>
  <Button size="md" block>md - Normal</Button>
  <Button size="lg" block>lg - Large</Button>
  <Button size="lg" block>lg - Large</Button>
  <Button size="xlg" block>xlg - ExtraLarge</Button>
  <Button size="xlg" block>xlg - ExtraLarge</Button>
</div>
```

#### Bold text
* Bold font weight is default.
* Set bold as false for normal font weight.

```js
<div style={{
  backgroundColor: '#eeeeee',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px'
}}>
  <Button variant="primary" bold={true}>Bold</Button>
  <Button variant="secondary" bold={false}>Normal</Button>
  <Button variant="tertiary" bold={true}>Bold</Button>
  <Button variant="ghost" bold={false}>Normal</Button>
  <Button variant="danger_primary" bold={true}>Bold</Button>
  <Button variant="danger_tertiary" bold={false}>Normal</Button>
</div>
```

#### With Image

```js
import ChevronIcon from '@components/Icon/ChevronIcon'

const Default = () => (
  <div style={{ 
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px'
  }}>
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

### (테스트) 아이콘 단독 입력 시 버튼
```js
import ChevronIcon from '@components/Icon/ChevronIcon'

const Default = () => (
  <div>
    <Button>
      <ChevronIcon direction="right" />
    </Button>
  </div>
)

Default()
```
