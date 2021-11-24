
```js
import ChildMargin from '@components/Layout/ChildMargin'
const Default = () => {
  const handleSubmit = (value) => {
    alert('pressed enter with value : ' + value)
  }

  return (
    <ChildMargin
      orientation="vertical"
      margin={16}
    >
      <SearchBar
        onSubmit={handleSubmit}
        placeholder="with submit event"
      />
      <SearchBar
        disabled
        placeholder="disabled seach bar"
      />
    </ChildMargin>
  )
}
Default()
```