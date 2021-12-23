```js
import Navigation from '@components/Icon/IconSet/Navigation'

const Default = () => {
  return <Navigation />
}
Default()
```

#### Direction

```js
import ChevronIcon from '@components/Icon/Icons/Navigation/ChevronIcon'
import DiagonalArrowIcon from '@components/Icon/Icons/Navigation/DiagonalArrowIcon'

const Default = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '10px',
        }}
      >
        <ChevronIcon direction={'right'} />
        <ChevronIcon direction={'down'} />
        <ChevronIcon direction={'left'} />
        <ChevronIcon direction={'up'} />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        <DiagonalArrowIcon direction={'topRight'} />
        <DiagonalArrowIcon direction={'bottomRight'} />
        <DiagonalArrowIcon direction={'bottomLeft'} />
        <DiagonalArrowIcon direction={'topLeft'} />
      </div>
    </div>
  )
}
Default()
```

##### ⚠ Icons which support direction props

|       Icon        |                        Type                        |  Default   |
| :---------------: | :------------------------------------------------: | :--------: |
|  AngledArrowIcon  |           'right', 'down', 'left', 'up'            |  'right'   |
|     ArrowIcon     |                                                    |            |
| ChevronFilledIcon |                                                    |            |
|    ChevronIcon    |                                                    |            |
|  DoubleArrowIcon  |                                                    |            |
| DiagonalArrowIcon | 'topRight', 'bottomRight', 'bottomLeft', 'topLeft' | 'topRight' |

#### Rotate

```js
import DoubleArrowIcon from '@components/Icon/Icons/Navigation/DoubleArrowIcon'

const Default = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      <DoubleArrowIcon rotate={45} />
      <DoubleArrowIcon rotate={-45} />
    </div>
  )
}
Default()
```

- you can also use direction and rotate props at the same time
- direction props adjust first, and then adjust rotate props

```js
import DoubleArrowIcon from '@components/Icon/Icons/Navigation/DoubleArrowIcon'

const Default = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      <DoubleArrowIcon direction="left" rotate={45} />
      <DoubleArrowIcon direction="left" rotate={-45} />
    </div>
  )
}
Default()
```
