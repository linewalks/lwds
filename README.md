# LWDS (Linewalks Design System)

#### Description

Linewalks 사내 디자인 시스템을 React 환경에서 사용하기 쉽게 만든 라이브러리

## Getting Started

#### Built With

- Node = 12.x LTS, 14.x LTS
- yarn >= 1.19.x, 1.5.x

#### Prerequisites

1. Install Node.js (14.x LTS)

- [파일다운로드](https://nodejs.org/dist/latest-v14.x/)

2. Install Yarn

- [yarn](https://classic.yarnpkg.com/en/docs/install#debian-stable)

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
import Button from 'lwds/Button'
// import styles from 'lwds/styles'

function App() {
  return <Button variant="contained">Hello World</Button>
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

이종혁 - jh.lee@linewalks.com
