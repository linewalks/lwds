#### Buttons by variant

- variants: colors and types
- disabled style is same on all variants.

```js
<div
  style={{
    backgroundColor: '#eeeeee',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px',
  }}
>
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="tertiary">Tertiary</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="ghost" ghostType="important">
    Ghost Important
  </Button>
  <Button variant="ghost" ghostType="danger">
    Ghost Danger
  </Button>
  <Button variant="danger_primary">Danger</Button>
  <Button variant="danger_tertiary">Danger</Button>
</div>
```

#### Buttons by size

```js
<div
  style={{
    backgroundColor: '#eeeeee',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px',
  }}
>
  <Button size="sm">sm - Small</Button>
  <Button size="md">md - Normal</Button>
  <Button size="lg">lg - Large</Button>
  <Button size="xlg">xlg - ExtraLarge</Button>
</div>
```

#### Buttons by size(responsive)

```js
<div
  style={{
    backgroundColor: '#eeeeee',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px',
  }}
>
  <Button size="sm" isResponsive>
    sm - Small (rem)
  </Button>
  <Button size="md" isResponsive>
    md - Normal (rem)
  </Button>
  <Button size="lg" isResponsive>
    lg - Large (rem)
  </Button>
  <Button size="xlg" isResponsive>
    xlg - ExtraLarge (rem)
  </Button>
</div>
```

#### Block Buttons

```js
<div
  style={{
    backgroundColor: '#eeeeee',
    padding: '8px',
  }}
>
  <Button size="sm" block>
    sm - Small
  </Button>
  <Button size="sm" block>
    sm - Small
  </Button>
  <Button size="md" block>
    md - Normal
  </Button>
  <Button size="md" block>
    md - Normal
  </Button>
  <Button size="lg" block>
    lg - Large
  </Button>
  <Button size="lg" block>
    lg - Large
  </Button>
  <Button size="xlg" block>
    xlg - ExtraLarge
  </Button>
  <Button size="xlg" block>
    xlg - ExtraLarge
  </Button>
</div>
```

#### Bold text

- Bold font weight is default.
- Set bold as false for normal font weight.

```js
<div
  style={{
    backgroundColor: '#eeeeee',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px',
  }}
>
  <Button variant="primary" bold={true}>
    Bold
  </Button>
  <Button variant="secondary" bold={false}>
    Normal
  </Button>
  <Button variant="tertiary" bold={true}>
    Bold
  </Button>
  <Button variant="ghost" bold={false}>
    Normal
  </Button>
  <Button variant="danger_primary" bold={true}>
    Bold
  </Button>
  <Button variant="danger_tertiary" bold={false}>
    Normal
  </Button>
</div>
```

#### With Image

```js
import ChevronIcon from '@components/Icon/ChevronIcon'

const Default = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px',
    }}
  >
    <Button
      variant="primary"
      size="md"
      rightIcon={<ChevronIcon direction="right" />}
    >
      Let's Go!
    </Button>
    <Button
      variant="secondary"
      size="md"
      leftIcon={<ChevronIcon direction="left" />}
    >
      Create
    </Button>
    <Button
      variant="tertiary"
      size="md"
      leftIcon={<ChevronIcon direction="left" />}
      rightIcon={<ChevronIcon direction="right" />}
    >
      Chaos
    </Button>
    <Button
      variant="ghost"
      size="lg"
      rightIcon={<ChevronIcon direction="right" />}
    >
      Let's Go!
    </Button>
    <Button
      variant="danger_primary"
      size="lg"
      leftIcon={<ChevronIcon direction="right" />}
    >
      Create
    </Button>
    <Button
      variant="danger_tertiary"
      size="lg"
      leftIcon={<ChevronIcon direction="right" />}
      rightIcon={<ChevronIcon direction="right" />}
    >
      Chaos
    </Button>
  </div>
)
Default()
```

### (테스트) 아이콘 단독 입력 시 버튼

```js
//svg import 방식 변경
import { ReactComponent as Plus } from '@assets/svg/icn_plus_16.svg'
import { ReactComponent as Search } from '@assets/svg/icn-search-16.svg'

const Default = () => (
  <div>
    rotate
    <Button icon variant="danger_tertiary">
      <Plus transform="rotate(20)" />
    </Button>
    <br />
    flip
    <Button icon variant="tertiary">
      <Search transform="scale(-1,1)" />
    </Button>
    <br />
    16px 기준 svg 아이콘 삽입 시
    <Button icon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="#4D5661"
      >
        <path
          d="M6.5 1C9.538 1 12 3.462 12 6.5c0 1.161-.36 2.238-.974 3.126l3.684 3.684c.387.387.387 1.014 0 1.4-.386.387-1.013.387-1.4 0l-3.684-3.684C8.738 11.64 7.66 12 6.5 12 3.462 12 1 9.538 1 6.5S3.462 1 6.5 1zm-.02 1.98c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5 3.5-1.567 3.5-3.5-1.567-3.5-3.5-3.5z"
          transform="translate(-130 -449) translate(48 315) translate(69 121) translate(13 13)"
        />
      </svg>
    </Button>
  </div>
)

Default()
```
