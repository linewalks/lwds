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
  <Button variant="primary">primary</Button>
  <Button variant="basic">basic</Button>
  <Button variant="primary_line">primary_line</Button>
  <Button variant="basic_line">basic_line</Button>
  <Button variant="primary_light">primary_light</Button>
  <Button variant="basic_light">basic_light</Button>
  <Button variant="primary" disabled>disabled</Button>
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
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px'
}}>
  <Button size="sm" block>sm - Small</Button>
  <Button size="md" block>md - Normal</Button>
  <Button size="lg" block>lg - Large</Button>
  <Button size="xlg" block>xlg - ExtraLarge</Button>
</div>
<div style={{ 
  backgroundColor: '#eeeeee',
  padding: '8px'
}}>
  <Button size="sm" block style={{marginBottom: '10px'}}>sm - Small</Button>
  <Button size="md" block style={{marginBottom: '10px'}}>md - Normal</Button>
  <Button size="lg" block style={{marginBottom: '10px'}}>lg - Large</Button>
  <Button size="xlg" block style={{marginBottom: '10px'}}>xlg - ExtraLarge</Button>
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
  <Button variant="primary" bold={false}>Normal</Button>
  <Button variant="primary_line" bold={true}>Bold</Button>
  <Button variant="primary_line" bold={false}>Normal</Button>
  <Button variant="primary_light" bold={true}>Bold</Button>
  <Button variant="primary_light" bold={false}>Normal</Button>
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
      endIcon={<ChevronIcon direction="right" />}
    >
      Let's Go!
    </Button>
    <Button
      variant="basic"
      size="md"
      startIcon={<ChevronIcon direction="left" />}
    >
      Create
    </Button>
    <Button
      variant="basic"
      size="md"
      startIcon={<ChevronIcon direction="left" />}
      endIcon={<ChevronIcon direction="right" />}
    >
      Chaos
    </Button>
    <Button
      variant="primary"
      size="lg"
      endIcon={<ChevronIcon direction="right" />}
    >
      Let's Go!
    </Button>
    <Button
      variant="basic"
      size="lg"
      startIcon={<ChevronIcon direction="right" />}
    >
      Create
    </Button>
    <Button
      variant="basic"
      size="lg"
      startIcon={<ChevronIcon direction="right" />}
      endIcon={<ChevronIcon direction="right" />}
    >
      Chaos
    </Button>
  </div>
)
Default()
```
