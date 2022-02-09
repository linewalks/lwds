```js
import styled from 'styled-components'
import { shadow_v1, shadow_v2, shadow_v3, shadow_v4 } from '@assets/styles'

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
      <WrapBox style={{ boxShadow: shadow_v1 }}>shadow_v1</WrapBox>
      <WrapBox style={{ boxShadow: shadow_v2 }}>shadow_v2</WrapBox>
      <WrapBox style={{ boxShadow: shadow_v3 }}>shadow_v3</WrapBox>
      <WrapBox style={{ boxShadow: shadow_v4 }}>shadow_v4</WrapBox>
    </WrapContainer>
  )
}
render()
```
