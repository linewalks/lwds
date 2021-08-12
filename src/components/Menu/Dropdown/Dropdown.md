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
      <DropdownItem
        bold
        startImgSrc="/svg/icn_plus_16.svg"
      >
        Menu 1
      </DropdownItem>
      <DropdownItem
        isButton
        endImgSrc="/svg/icn_plus_16.svg"
      >
        Menu 2
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem bold>Menu 3</DropdownItem>
      <DropdownItem isButton>Menu 4</DropdownItem>
      <DropdownItem
        isButton
        startImgSrc="/svg/icn_plus_16.svg"
        endImgSrc="/svg/icn_plus_16.svg"
      >
        Menu 5
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem isButton onClick={handleClick}>Menu 6</DropdownItem>
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
