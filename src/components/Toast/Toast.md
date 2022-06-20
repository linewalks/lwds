### Usage

- 프로젝트 root component를 ToastProvider로 감싸줍니다.
- Toast를 사용하는 곳에서 useToast를 import한 후, useToast를 실행하여 add, remove, removeAll 함수를 변수에 할당하여 사용합니다.
- Toast를 추가할 때, add함수에 이하 양식의 Toast(add)를 인자로 넣어 호출합니다.
- 특정 Toast 삭제가 필요한 경우, add 시 전달한 toastId와 동일하게 id를 인자로 remove를 호출합니다.
- Toast 전체 초기화가 필요할 경우, removeAll 함수를 호출합니다.
- message는 커스텀이 가능하며, callback 함수를 활용하여 '바로가기' 버튼을 활성화 할 수 있습니다.

---

### Toast Props

<br />

##### ToastProvider

| Props Name | Types  | Default |
| :--------: | :----: | :-----: |
| className  | string |         |
|   style    | object |         |

<br />

##### Toast(add) Parameters

| Parameters Name |       Types        |  Default   |
| :-------------: | :----------------: | :--------: |
|    className    |       string       |            |
|     toastId     |       string       |            |
| callbackMessage | string, React.Node | '바로가기' |
|    duration     |       number       |    4000    |
|     message     | string, React.Node |            |
|      type       | 'success', 'fail'  | 'success'  |
|      style      |       object       |            |
|    callback     |      function      |            |

<br />

##### Toast(remove) Parameter

| Parameters Name | Types  | Default |
| :-------------: | :----: | :-----: | --- |
|     toastId     | string |         | 　  |

<br />

### Basic Toast

```js
import Button from '@components/Button/Button'
import * as Toast from '@components/Toast'

const render = () => {
  const CustomMsg = () => (
    <div>
      <p style={{ color: 'grey' }}>This is Custom Message</p>
      <p style={{ color: 'blue' }}>This is Custom Message</p>
    </div>
  )

  const ToastUseComponent = () => {
    const { add, remove, removeAll } = Toast.useToast()

    return (
      <>
        <div
          style={{
            display: 'flex',
            margin: 10,
          }}
        >
          <Button
            onClick={() =>
              add({
                toastId: 'test',
                message: <span>this is test toast message </span>,
              })
            }
          >
            Add Success Toast
          </Button>
          <Button variant="danger_primary" onClick={() => remove('test')}>
            Remove Success Toast
          </Button>
        </div>

        <div
          style={{
            display: 'flex',
            margin: 10,
          }}
        >
          <Button
            onClick={() =>
              add({
                toastId: 'test2',
                type: 'fail',
                message: <span>this is test toast message </span>,
              })
            }
          >
            Add Fail Toast
          </Button>
          <Button variant="danger_primary" onClick={() => remove('test2')}>
            Remove Fail Toast
          </Button>
        </div>

        <div
          style={{
            display: 'flex',
            margin: 10,
          }}
        >
          <Button
            onClick={() =>
              add({
                toastId: 'test3',
                message: CustomMsg(),
              })
            }
          >
            Add CustomMsg Toast
          </Button>
          <Button variant="danger_primary" onClick={() => remove('test3')}>
            Remove CustomMsg Toast
          </Button>
        </div>

        <div
          style={{
            display: 'flex',
            margin: 10,
          }}
        >
          <Button
            onClick={() =>
              add({
                toastId: 'test4',
                message: <span>this is test toast message </span>,
                callback: () => console.log('Test Toast Callback'),
              })
            }
          >
            Add Callback Toast
          </Button>
          <Button variant="danger_primary" onClick={() => remove('test4')}>
            Remove Callback Toast
          </Button>
        </div>

        <div
          style={{
            display: 'flex',
            margin: 10,
          }}
        >
          <Button variant="danger_primary" onClick={() => removeAll()}>
            Remove All Toast
          </Button>
        </div>
      </>
    )
  }

  return (
    <Toast.ToastProvider>
      <div>
        <ToastUseComponent />
      </div>
    </Toast.ToastProvider>
  )
}

render()
```
