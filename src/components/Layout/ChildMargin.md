#### Horizontal

```js
import Button from 'components/Button/Button'
const Horizontal = () => {
  return (
    <>
      <h5>Margin 8 (default)</h5>
      <ChildMargin>
        <Button variant="primary">primary</Button>
        <Button variant="primary">primary</Button>
        <Button variant="primary">primary</Button>
        <Button variant="primary">primary</Button>
        <Button variant="primary">primary</Button>
      </ChildMargin>
      <h5>Margin 16 (default)</h5>
      <ChildMargin margin={16}>
        <Button variant="primary">primary</Button>
        <Button variant="primary">primary</Button>
        <Button variant="primary">primary</Button>
        <Button variant="primary">primary</Button>
        <Button variant="primary">primary</Button>
      </ChildMargin>
    </>
  )
}
Horizontal()
```

#### Vertical

```js
import Button from 'components/Button/Button'
const Vertical = () => {
  return (
    <>
      <h5>Margin 8 (default)</h5>
      <ChildMargin orientation="vertical">
        <Button variant="primary">primary</Button>
        <Button variant="primary">primary</Button>
        <Button variant="primary">primary</Button>
        <Button variant="primary">primary</Button>
        <Button variant="primary">primary</Button>
      </ChildMargin>
      <h5>Margin 16 (default)</h5>
      <ChildMargin orientation="vertical" margin={16}>
        <Button variant="primary">primary</Button>
        <Button variant="primary">primary</Button>
        <Button variant="primary">primary</Button>
        <Button variant="primary">primary</Button>
        <Button variant="primary">primary</Button>
      </ChildMargin>
    </>
  )
}
Vertical()
```
