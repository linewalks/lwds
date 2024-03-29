# LWDS (Linewalks Design System)

#### Description

Linewalks 사내 디자인 시스템을 React 환경에서 사용하기 쉽게 만든 라이브러리

## Getting Started

#### Built With

- Node = 16.x LTS (16.20.2 권장)
- yarn >= 1.22.19

#### Prerequisites

1. Install Node.js (14.x LTS) [파일다운로드](https://nodejs.org/dist/latest-v16.x/)
2. Install Yarn [yarn](https://classic.yarnpkg.com/en/docs/install#debian-stable)

#### Installation

1. Clone the repo
2. Install packages

```sh
> yarn
```

## Usage

### Build from source

```sh
> yarn build
```

### Run docs

```sh
> yarn styleguide
```

### Run component definition docs

```sh
> yarn docstart
```

### Quick Start (example)

- Get started with React and LWDS in no time.

```sh
> yarn add @LWDS
```

```js
import * as React from 'react'
import ReactDOM from 'react-dom'

import { Button } from 'lwds'
import styles from 'lwds/styles'

function App() {
  return (
    <>
      <div
        className={styles.heading_04}
        style={{ color: styles.color_text_03 }}
      >
        Title
      </div>
      <Button variant="contained">Hello World</Button>
    </>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

## Test

### Run Local Test

```sh
> yarn test
```

## Links

[LWDS Guide Page](https://linewalks.github.io/lwds/)

## Contact

- sector.rest - sector.rest@kakaohealthcare.com
- rapha.el - rapha.el@kakaohealthcare.com
- lana.good - lana.good@kakaohealthcare.com
- edit.re - edit.re@kakaohealthcare.com
