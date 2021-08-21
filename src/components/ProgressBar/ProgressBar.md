#### Size

```js
import ChildMargin from '@components/Layout/ChildMargin'
const Default = () => {
  return (
    <ChildMargin>
      <ProgressBar progress={0.5} size="md" />
      <ProgressBar progress={0.5} size="sm" />
    </ChildMargin>
  )
}
Default()
```