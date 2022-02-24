```js
import Domain from '@components/Icon/IconSet/Domain'

const Default = () => {
  return <Domain />
}
Default()
```

#### Rotate

```js
import ConditionIcon from '@components/Icon/Icons/Domain/ConditionIcon'

const Default = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      <ConditionIcon />
      <ConditionIcon rotate={45} />
      <ConditionIcon rotate={-45} />
    </div>
  )
}
Default()
```
