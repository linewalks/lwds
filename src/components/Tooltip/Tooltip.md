#### Default

```js
import ChildMargin from '@components/Layout/ChildMargin'
import TextLink from '@components/Button/TextLink'
const Default = () => {
  const renderTooltip = () => {
    return (
      <ChildMargin orientation="vertical">
        <div>
          <img src="/svg/icn_plus_16.svg" />
          Plus
        </div>
        <div>
          <img src="/svg/icn-close-16.svg" />
          Multiply
        </div>
      </ChildMargin>
    )
  }
  return (
    <ChildMargin margin={64}>
      <Tooltip
        content={'this is tooltip of a text link'}
        offsetTop={30}
        offsetLeft={-30}
      >
        <TextLink>Hover Here!</TextLink>
      </Tooltip>
      <Tooltip
        content={renderTooltip()}
      >
        <img
          src="/svg/icn-search-16.svg"
        />
        Complex
      </Tooltip>
    </ChildMargin>
  )
}
Default()
```
