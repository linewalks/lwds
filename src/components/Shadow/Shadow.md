```js
import styled from 'styled-components'
import styles from '@assets/styles'

const WrapContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 60px;
`

const WrapBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
`

const render = () => {
  return (
    <WrapContainer>
      <WrapBox style={{ boxShadow: styles.shadow_v1 }}>shadow_v1</WrapBox>
      <WrapBox style={{ boxShadow: styles.shadow_v2 }}>shadow_v2</WrapBox>
      <WrapBox style={{ boxShadow: styles.shadow_v3 }}>shadow_v3</WrapBox>
      <WrapBox style={{ boxShadow: styles.shadow_v4 }}>shadow_v4</WrapBox>
    </WrapContainer>
  )
}
render()
```
