ProgressBar example

```js
import ProgressBar from '@components/ProgressBar/ProgressBar'

const show = () => {
  const _value = 40
  return (
    <section>
      <div>
        <ProgressBar placement="top" value={0}>
          0 %
        </ProgressBar>
      </div>
      <br />
      <div>
        <ProgressBar placement="right" value={20} max={123}>
          20 / 123
        </ProgressBar>
      </div>
      <br />
      <div>
        <ProgressBar placement="left" value="123" strokeColor="red">
          warning
        </ProgressBar>
      </div>
      <br />
      <div>
        <ProgressBar placement="bottom" max={100} value={10} />
      </div>
      <br />
      <div>
        <ProgressBar placement="bottom" max={-6} value={-3}>
          -3
        </ProgressBar>
      </div>
      <br />
      <div>
        <ProgressBar isInfinite placement="bottom">
          진행중
        </ProgressBar>
      </div>
      <br />
      <div>
        <ProgressBar placement="bottom" value={_value} max={100} thickness={10}>
          {`${_value} %`}
        </ProgressBar>
      </div>
      <br />
      <div>
        <ProgressBar placement="bottom" value="123" />
      </div>
      <br />
      <div>
        <ProgressBar width={200} />
      </div>
    </section>
  )
}
show()
```

```js
import { useState } from 'react'
import Button from '@components/Button/Button'
import ProgressBar from '@components/ProgressBar/ProgressBar'

const ShowProgressBar = () => {
  const [random, setRandom] = useState(7842)

  const handleButtonClick = () => {
    const newRandom = Math.ceil(Math.random() * 10000)
    setRandom(newRandom)
  }

  return (
    <div>
      <Button onClick={handleButtonClick}>New State</Button>
      <div style={{ marginTop: 16 }}>
        <ProgressBar placement="bottom" value={random} max={10000}>
          {random} / {10000}
        </ProgressBar>
      </div>
    </div>
  )
}

ShowProgressBar()
```
