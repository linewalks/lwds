### Icon Usage

```js
import ChevronIcon from '@components/Icon/Icons/Navigation/ChevronIcon'

const Default = () => {
  return <ChevronIcon />
}
Default()
```

### Props

|    Name    |                 Type                 |   Default   |             Description              |
| :--------: | :----------------------------------: | :---------: | :----------------------------------: |
|   color    |                string                |  '#3b424a'  |           icon fill color            |
|   width    |   number, string (px, rem, %, ...)   |    24px     |           icon width size            |
|   height   |   number, string (px, rem, %, ...)   |    24px     |           icon height size           |
|  viewBox   |                string                | '0 0 24 24' |           svg icon viewBox           |
|    size    | string: 'xs', 'sm', 'md', 'lg', 'xl' |             |          icon semantic size          |
| responsive |               boolean                |    false    | use rem semantic size for size props |

#### Color

```js
import ChevronIcon from '@components/Icon/Icons/Navigation/ChevronIcon'

const Default = () => {
  return (
    <div style={{ display: 'flex' }}>
      <ChevronIcon color="#f00" />
      <ChevronIcon color="#0f0" />
      <ChevronIcon color="#00f" />
    </div>
  )
}
Default()
```

#### Width, Height

```js
import ChevronIcon from '@components/Icon/Icons/Navigation/ChevronIcon'

const Default = () => {
  return (
    <div style={{ display: 'flex' }}>
      <ChevronIcon width={24} height={24} />
      <ChevronIcon width="48px" height="48px" />
      <ChevronIcon width="10%" height="10%" />
    </div>
  )
}
Default()
```

#### ViewBox

```js
import ChevronIcon from '@components/Icon/Icons/Navigation/ChevronIcon'

const Default = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ border: '1px dotted #3b424a' }}>
        <ChevronIcon width={48} height={48} viewBox="0 0 24 24" />
      </div>
      <div style={{ border: '1px dotted #3b424a' }}>
        <ChevronIcon width={48} height={48} viewBox="0 0 48 48" />
      </div>
      <div style={{ border: '1px dotted #3b424a' }}>
        <ChevronIcon width={48} height={48} viewBox="0 0 72 72" />
      </div>
    </div>
  )
}
Default()
```

#### Size

| Name | Size |
| :--: | :--: |
|  xs  | 16px |
|  sm  | 20px |
|  md  | 24px |
|  lg  | 32px |
|  xl  | 40px |

```js
import ChevronIcon from '@components/Icon/Icons/Navigation/ChevronIcon'

const Default = () => {
  return (
    <div style={{ display: 'flex' }}>
      <ChevronIcon size="xs" />
      <ChevronIcon size="sm" />
      <ChevronIcon size="md" />
      <ChevronIcon size="lg" />
      <ChevronIcon size="xl" />
    </div>
  )
}
Default()
```

- size props priority is higher than width, height props priority

```js
import ChevronIcon from '@components/Icon/Icons/Navigation/ChevronIcon'

const Default = () => {
  return (
    <div style={{ display: 'flex' }}>
      <ChevronIcon width={24} height={24} size="md" />
      <ChevronIcon width={48} height={48} size="md" />
      <ChevronIcon width={48} height={48} size="lg" />
    </div>
  )
}
Default()
```

#### Responsive

| Name |  Size   |
| :--: | :-----: |
|  xs  |  1rem   |
|  sm  | 1.25rem |
|  md  | 1.5rem  |
|  lg  |  2rem   |
|  xl  | 2.5rem  |

- if you change font-size in html, it has difference about 'responsive' props

```js
import ChevronIcon from '@components/Icon/Icons/Navigation/ChevronIcon'

const Default = () => {
  const rootElement = document.documentElement
  rootElement.style.fontSize = `16px`

  return (
    <div style={{ display: 'flex' }}>
      <ChevronIcon size="lg" />
      <ChevronIcon size="lg" responsive />
    </div>
  )
}
Default()
```
