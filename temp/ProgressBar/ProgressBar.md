#### Size

```js
import ChildMargin from '@components/Layout/ChildMargin'
const Default = () => {
  return (
    <ChildMargin orientation="vertical">
      <ChildMargin>
        <ProgressBar progress={0} size="md" />
        <ProgressBar progress={0.25} size="md" />
        <ProgressBar progress={0.5} size="md" />
        <ProgressBar progress={0.75} size="md" />
        <ProgressBar progress={1} size="md" />
      </ChildMargin>
      <ChildMargin>
        <ProgressBar progress={0} size="sm" />
        <ProgressBar progress={0.25} size="sm" />
        <ProgressBar progress={0.5} size="sm" />
        <ProgressBar progress={0.75} size="sm" />
        <ProgressBar progress={1} size="sm" />
      </ChildMargin>
    </ChildMargin>
  )
}
Default()
```