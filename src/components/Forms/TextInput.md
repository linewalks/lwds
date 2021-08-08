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

#### By Status
```js
import ChildMargin from '@components/Layout/ChildMargin'
const Default = () => {
  return (
    <ChildMargin orientation="vertical">
      <ChildMargin>
        <TextInput size="lg" type="text" placeholder="text" />
        <TextInput size="lg" type="password" placeholder="password" />
        <TextInput size="lg" type="number" placeholder="number" />
        <TextInput size="lg" type="text" placeholder="text" 
        style={{ textAlign: 'right', width: '20px' }}
        />
      </ChildMargin>
    </ChildMargin>
  )
}
Default()
```

#### With Custom Style
```js
import ChildMargin from '@components/Layout/ChildMargin'
const Default = () => {
  return (
    <ChildMargin orientation="vertical">
      <ChildMargin>
        <TextInput 
          placeholder="text" 
          style={{ textAlign: 'right', width: '60px', minWidth: 0 }}
        />
        <TextInput 
          placeholder="text" 
          style={{ textAlign: 'center', width: '120px' }}
        />
        <TextInput 
          placeholder="text" 
          style={{ textAlign: 'center', width: '120px', height: '120px', padding: 0 }}
        />
      </ChildMargin>
    </ChildMargin>
  )
}
Default()
```