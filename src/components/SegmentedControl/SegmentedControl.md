#### By size

```js
<div style={{
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px 100px'
}}>
  <SegmentedControl
    size="md"
    valueList={['md 1', 'md 2']}
  />
  <SegmentedControl
    size="lg"
    valueList={['lg 1', 'lg 2']}
  />
</div>
<div style={{padding: '8px'}}>
  <SegmentedControl
    size="md"
    valueList={['Longest width applies to all buttons, Can you believe it? This is real!!', 'Wow']}
  />
</div>
<div style={{padding: '8px'}}>
  <SegmentedControl
    size="lg"
    valueList={['lllllllllllllllll', '가나다라마바사아자차카타파하']}
  />
</div>
```

#### Set Default Value

```js
const UseDefaultValue = () => {
  const handleChange = (value) => {
    alert(`Changed to value '${value}'`)
  }
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px 100px'
    }}>
      <SegmentedControl
        size="md"
        valueList={['md 1', 'md 2']}
        defaultValue={'md 1'}
        onChange={handleChange}
      />
      <SegmentedControl
        size="md"
        valueList={['md 1', 'md 2']}
        defaultValue={'md 2'}
      />
    </div>
  )
}
UseDefaultValue()
```

#### Use Value

```js
import { useState } from 'react'
const UseValue = () => {
  const valueList = ['md 1', 'md 2']
  const [value, setValue] = useState(valueList[0])
  const [value2, setValue2] = useState(valueList[0])
  
  const handleChange = (value) => {
    setValue(value)
  }

  return (
    <div>
      <h3>Set Value With onChange</h3>
      <SegmentedControl
        size="md"
        valueList={['md 1', 'md 2']}
        value={value}
        onChange={handleChange}
      />
      <h3>Set Value Without onChange</h3>
      <SegmentedControl
        size="md"
        valueList={['md 1', 'md 2']}
        value={value2}
      />
    </div>
  )

}
UseValue()
```
