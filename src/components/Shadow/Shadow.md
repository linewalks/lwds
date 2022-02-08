```js
import styled from 'styled-components'
import {
  shadow_1,
  shadow_2,
  shadow_3,
  shadow_4,
} from '@assets/styles/shadow/semantics'

const WrapContainer = styled.section`
  display: flex;
  flex-gap: 10px;
`

const WrapBox = styled.div`
  width: 100px;
  height: 100px;
`

const render = () => {
  return (
    <WrapContainer>
      <WrapBox style={{ boxShadow: shadow_1 }} />
      <WrapBox style={{ boxShadow: shadow_2 }} />
      <WrapBox style={{ boxShadow: shadow_3 }} />
      <WrapBox style={{ boxShadow: shadow_4 }} />
    </WrapContainer>
  )
}
render()
```
