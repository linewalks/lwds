ProgressBar example

```js
import ProgressBar from '@components/ProgressBar/ProgressBar'

const show = () => {
  return (
    <section>
      <div>
        <ProgressBar placement="top" value={0} />
      </div>
      <br />
      <div>
        <ProgressBar width={175} placement="right" value={0.5} />
      </div>
      <br />
      <div>
        <ProgressBar
          placement="left"
          value={0.75}
          size="md"
          strokeColor="red"
        />
      </div>
      <br />
      <div>
        <ProgressBar placement="bottom" prefix="₩" suffix="원" value={1} />
      </div>
      <br />
      <div>
        <ProgressBar isInfinite placement="bottom" customLabel="진행중" />
      </div>
      <br />
      <div>
        <ProgressBar isInfinite placement="bottom" value="123" />
      </div>
      <br />
      <div>
        <ProgressBar width={200} isNotExistLabel />
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
  const [random, setRandom] = useState(0.54)

  const handleButtonClick = () => {
    const newRandom = Math.random()
    setRandom(newRandom)
  }

  return (
    <div style={{ width: 159 }}>
      <Button onClick={handleButtonClick}>New State</Button>
      <div style={{ marginTop: 16 }}>
        <ProgressBar placement="right" value={random} size="md" />
      </div>
    </div>
  )
}

ShowProgressBar()
```
