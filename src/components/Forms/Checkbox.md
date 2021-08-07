
#### Size
```js
import ChildMargin from '@components/Layout/ChildMargin'

const Default = () => {
  return (
    <ChildMargin
      orientation="vertical"
      margin={16}
    >
      <h5>size md</h5>
      <ChildMargin
        margin={24}
      >
        <Checkbox>Option1</Checkbox>
        <Checkbox>Option2</Checkbox>
        <Checkbox>Option3</Checkbox>
      </ChildMargin>
      <h5>size sm</h5>
      <ChildMargin
        margin={24}
        style={{
          fontSize: '12px'
        }}
      >
        <Checkbox size="sm">Option1</Checkbox>
        <Checkbox size="sm">Option2</Checkbox>
        <Checkbox size="sm">Option3</Checkbox>
      </ChildMargin>
    </ChildMargin>
  )
}
Default()
```

#### Multiple Line Label & Icon Weight

```js
import ChildMargin from '@components/Layout/ChildMargin'

const Default = () => {
  const Child = () => (
    <>
      <div>First Line</div>
      <div>Second Line</div>
      <div>Third Line</div>
    </>
  )

  return (
    <ChildMargin
      orientation="vertical"
      margin={16}
    >
      <ChildMargin margin={24}>
        <Checkbox iconWeight="start">
          <Child />
        </Checkbox>
        <Checkbox iconWeight="center">
          <Child />
        </Checkbox>
        <Checkbox iconWeight="end">
          <Child />
        </Checkbox>
      </ChildMargin>
    </ChildMargin>
  )
}
Default()
```

#### Default Checked and Checked

```js
import { useState } from 'react'
import ChildMargin from '@components/Layout/ChildMargin'
const Default = () => {
  const [checked, setChecked] = useState(false)
  const handleChange = (isChecked) => {
    setChecked(isChecked)
  }
  return (
    <ChildMargin
      orientation="vertical"
      margin={16}
    >
      <ChildMargin margin={24}>
        <Checkbox defaultChecked>Default Checked</Checkbox>
        <Checkbox
          checked={checked}
          onChange={handleChange}
        >
          Checked with State
        </Checkbox>
        <Checkbox
          checked={true}
        >
          Always Checked
        </Checkbox>
      </ChildMargin>
    </ChildMargin>
  )
}
Default()
```
