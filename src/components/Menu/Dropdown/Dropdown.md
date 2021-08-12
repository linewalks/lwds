#### Dropdown
```js
import ChildMargin from '@components/Layout/ChildMargin'
import DropdownItem from '@components/Menu/Dropdown/Item'
import DropdownDivider from '@components/Menu/Dropdown/Divider'

const Default = () => {
  const handleClick = () => {
    alert('clicked menu 5')
  }
  const renderChildren = () => (
    <>
      <DropdownItem bold>Menu 1</DropdownItem>
      <DropdownItem isButton>Menu 2</DropdownItem>
      <DropdownDivider />
      <DropdownItem bold>Menu 3</DropdownItem>
      <DropdownItem isButton>Menu 4</DropdownItem>
      <DropdownDivider />
      <DropdownItem isButton onClick={handleClick}>Menu 5</DropdownItem>
    </>
  )
  return (
    <ChildMargin>
      <Dropdown
        size="md"
      >
        {renderChildren()}
      </Dropdown>
      <Dropdown
        size="lg"
      >
        {renderChildren()}
      </Dropdown>
    </ChildMargin>
  )
}
Default()
```
