```js
import Action from '@components/Icon/IconSet/Action'

const Default = () => {
  return <Action />
}
Default()
```

#### Rotate

```js
import ResetIcon from '@components/Icon/Icons/Action/ResetIcon'

const Default = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      <ResetIcon />
      <ResetIcon rotate={45} />
      <ResetIcon rotate={-45} />
    </div>
  )
}
Default()
```
