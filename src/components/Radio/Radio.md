### Usage

- RadioGrop component로 Radio component를 자식으로 품어서 사용합니다.
- RadioGroup의 name을 기준으로 Radio들의 name이 선언 및 RadioButton set으로 묶입니다.
- 필요에 따라 Radio component를 독립적으로 활용할 수 있습니다.
- label은 자유롭게 커스터마이징 하여 활용할 수 있습니다.

#### RadioGroup Props

|   Props Name   |  Types   | Default |
| :------------: | :------: | :-----: |
| defaultChecked | boolean  |  false  |
|      name      |  string  |         |
|     value      |  string  |         |
|    onChange    | function |         |

#### Radio Props

| Props Name |    Types    |     Default     |
| :--------: | :---------: | :-------------: |
|     id     |   string    |      value      |
| className  |   string    |                 |
|  checked   |   boolean   |                 |
|  disabled  |   boolean   |      false      |
|    name    |   string    | RadioGroup.name |
|    size    | 'sm' , 'md' |      'md'       |
|   style    |   object    |                 |
|   value    |   string    |                 |
|  onChange  |  function   |                 |

#### Basic RadioButton

```js
import react, { useState } from 'react'
import Radio from '@components/Radio/Radio'
import RadioGroup from '@components/Radio/RadioGroup'

const render = () => {
  const [value, setValue] = useState('text1')
  const handleChange = (value, name) => {
    console.log('Test RadioButton', value, name)
    setValue(value)
  }

  return (
    <RadioGroup name="test" value={value} onChange={handleChange}>
      <Radio size="sm" value="text1">
        Test1
      </Radio>
      <Radio size="sm" value="test2">
        Test2
      </Radio>
      <Radio size="sm" value="test3" disabled>
        Test3
      </Radio>
      <div style={{ margin: 20 }}>EdgeCase</div>
      <Radio value="test4">Test4</Radio>
      <Radio value="test5">
        <div style={{ color: 'blue' }}>Custom Test</div>
      </Radio>
      <Radio value="test6" disabled>
        Test6
      </Radio>
    </RadioGroup>
  )
}
render()
```
