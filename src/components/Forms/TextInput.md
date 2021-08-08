#### By variant and Size

```js
import ChildMargin from '@components/Layout/ChildMargin'
const Default = () => {
  return (
    <ChildMargin orientation="vertical">
      <ChildMargin>
        <TextInput variant="outline" size="xlg" placeholder="outline xlg" />
        <TextInput variant="outline" size="lg" placeholder="outline lg" />
        <TextInput variant="outline" size="md" placeholder="outline md" />
      </ChildMargin>
      <ChildMargin>
        <TextInput variant="outline_round" size="xlg" placeholder="outline_round xlg" />
        <TextInput variant="outline_round" size="lg" placeholder="outline_round lg" />
        <TextInput variant="outline_round" size="md" placeholder="outline_round md" />
      </ChildMargin>
    </ChildMargin>
  )
}
Default()
```

#### By Status
```js
import ChildMargin from '@components/Layout/ChildMargin'
const Default = () => {
  return (
    <ChildMargin orientation="vertical">
      <ChildMargin>
        <TextInput variant="outline" size="lg" placeholder="normal" />
        <TextInput variant="outline" size="lg" placeholder="disabled" disabled />
        <TextInput variant="outline" size="lg" placeholder="error" error />
      </ChildMargin>
    </ChildMargin>
  )
}
Default()
```