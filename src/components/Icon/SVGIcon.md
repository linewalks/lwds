#### Icon

```js
import ChildMargin from '@components/Layout/ChildMargin'
import ChevronIcon from '@components/Icon/ChevronIcon'

const Default = () => {
  return (
    <ChildMargin orientation="vertical">
      <h5>Chevron Color</h5>
      <ChildMargin>
        <ChevronIcon color="#000" />
        <ChevronIcon color="#f00" />
        <ChevronIcon color="#0f0" />
        <ChevronIcon color="#00f" />
      </ChildMargin>
      <h5>Chevron Direction</h5>
      <ChildMargin>
        <ChevronIcon direction="down" />
        <ChevronIcon direction="up" />
        <ChevronIcon direction="left" />
        <ChevronIcon direction="right" />
      </ChildMargin>
      <h5>Chevron Size</h5>
      <ChildMargin>
        <ChevronIcon width="24" height="24" />
        <ChevronIcon width="16" height="16" />
        <ChevronIcon width="48" height="48" />
        <ChevronIcon width="102" height="24" />
      </ChildMargin>
    </ChildMargin>
  )
}
Default()
```