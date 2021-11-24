#### By variant and Size
```js
import ChildMargin from '@components/Layout/ChildMargin'
const Default = () => {
  const options = [
    'this is option',
    'this is option 2 with long value',
    'short',
    '1'
  ]
  return (
    <ChildMargin orientation="vertical">
      <ChildMargin>
        <Select
          variant="outline"
          size="xlg"
          placeholder="outline xlg" 
          options={options}
        />
        <Select
          variant="outline"
          size="lg"
          placeholder="outline lg"
          options={options}
        />
        <Select
          variant="outline"
          size="md"
          placeholder="outline md"
          options={options}
        />
      </ChildMargin>
      <ChildMargin>
        <Select
          variant="outline_round"
          size="xlg"
          placeholder="outline_round xlg"
          options={options}
        />
        <Select
          variant="outline_round"
          size="lg"
          placeholder="outline_round lg"
          options={options}
        />
        <Select
          variant="outline_round"
          size="md"
          placeholder="outline_round md"
          options={options}
        />
      </ChildMargin>
    </ChildMargin>
  )
}
Default()
```

#### By Status
```js
import ChildMargin from '@components/Layout/ChildMargin'
const Default = () => {
  const options = [
    'this is option',
    'this is option 2 with long value',
    'short',
    '1'
  ]
  return (
    <ChildMargin orientation="vertical">
      <h5>With Placeholder</h5>
      <ChildMargin>
        <Select
          size="lg"
          placeholder="normal" 
          options={options}
        />
        <Select
          size="lg"
          placeholder="disabled"
          options={options}
          disabled
        />
        <Select
          size="lg"
          placeholder="error"
          options={options}
          error
        />
      </ChildMargin>
      <h5>Without Placeholder</h5>
      <ChildMargin>
        <Select
          size="lg"
          options={options}
        />      
      </ChildMargin>
    </ChildMargin>
  )
}
Default()
```

#### With Value and Default Value
```js
import { useState } from 'react'
import ChildMargin from '@components/Layout/ChildMargin'
const Default = () => {
  const options = [
    'this is option',
    'this is option 2 with long value',
    'short',
    '1'
  ]
  const [value, setValue] = useState(options[2])
  const handleChange = (value) => {
    setValue(value)
  }
  return (
    <ChildMargin orientation="vertical">
      <h5>With Value Set</h5>
      <Select
        value={options[1]}
        options={options}
      />
      <h5>With Value contrlled with onChange</h5>
      <Select
        value={value}
        options={options}
        onChange={handleChange}
      />
      <h5>With DefaultValue without onChange</h5>
      <Select
        options={options}
        defaultValue={options[3]}
      />
    </ChildMargin>
  )
}
Default()
```

#### Setting Options
```js
import { useState } from 'react'
import ChildMargin from '@components/Layout/ChildMargin'
const Default = () => {
  const onlyLabels = [
    'this is option',
    'this is option 2 with long value',
    'short',
    '1',
  ]
  const valueAndLabels = [
    {value: 'option1', label: 'labelforvalue1'},
    {value: 'option2', label: 'labelforvalue2'},
    {value: 'option3', label: 'labelforvalue3'},
    {value: 'option4', label: 'labelforvalue4'},
  ]
  return (
    <ChildMargin orientation="vertical">
      <h5>With Label List</h5>
      <Select
        options={onlyLabels}
      />
      <h5>With Value and Label Object List</h5>
      <Select
        options={valueAndLabels}
      />
    </ChildMargin>
  )
}
Default()
```