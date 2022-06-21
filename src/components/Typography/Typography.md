#### Typeface

- LWDS 는 'Spoqa Han Sans Neo' 에 최적화되어있습니다.[Spoqa Han Sans Neo](https://github.com/spoqa/spoqa-han-sans)
  <br />

폰트 기본 설정

```html
<link
  href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
  rel="stylesheet"
  type="text/css"
/>
```

<br />

```css
* {
  font-family: 'Spoqa Han Sans Neo', sans-serif;
}
```

<br />

#### Type Scale

<br />

폰트 사이즈 및 유형을 텍스트 위계 질서에 맞게 사용합니다.

- font-weight : regular(400) : 본문 기본 굵기 입니다.
- font-weight : medium(500) : 본문의 가독성을 높여야 할 경우 사용합니다.
- font-weight : bold(700) : 페이지타이틀, 보조 타이틀, 버튼 텍스트에 사용합니다.

#### Description

##### heading

|   Semantic, Value   | font-size | font-weight | letter-spacing | line-height |
| :-----------------: | :-------: | :---------: | :------------: | :---------: |
|    `heading_04`     |   32px    |     700     |     -0.5px     |    47px     |
|    `heading_03`     |   28px    |     700     |     -0.5px     |    40px     |
|    `heading_02`     |   22px    |     700     |     -0.5px     |    32px     |
| `heading_02_multi`  |   22px    |     700     |     -0.5px     |    35px     |
|    `heading_01`     |   18px    |     700     |     -0.5px     |    25px     |
| `heading_01_multi`  |   18px    |     700     |     -0.5px     |    28px     |
|    `subtitle_02`    |   16px    |     700     |     -0.5px     |    23px     |
| `subtitle_02_multi` |   16px    |     700     |     -0.5px     |    26px     |
|    `subtitle_01`    |   14px    |     700     |     -0.3px     |    20px     |
| `subtitle_01_multi` |   14px    |     700     |     -0.3px     |    22px     |

##### body

|  Semantic, Value  | font-size | font-weight | letter-spacing | line-height |
| :---------------: | :-------: | :---------: | :------------: | :---------: |
|    `body_06_r`    |   22px    |     400     |     -0.5px     |    27px     |
| `body_06_r_multi` |   22px    |     400     |     -0.5px     |    33px     |
|    `body_05_r`    |   18px    |     400     |     -0.5px     |    22px     |
| `body_05_r_multi` |   18px    |     400     |     -0.5px     |    27px     |
|    `body_04_r`    |   16px    |     400     |     -0.5px     |    21px     |
| `body_04_r_multi` |   16px    |     400     |     -0.5px     |    25px     |
|    `body_03_r`    |   15px    |     400     |     -0.4px     |    19px     |
| `body_03_r_multi` |   15px    |     400     |     -0.4px     |    22px     |
|    `body_03_m`    |   15px    |     500     |     -0.4px     |    22px     |
| `body_03_m_multi` |   15px    |     500     |     -0.4px     |    24px     |
|    `body_02_r`    |   14px    |     400     |     -0.3px     |    18px     |
| `body_02_r_multi` |   14px    |     400     |     -0.3px     |    21px     |
|    `body_02_m`    |   14px    |     500     |     -0.3px     |    20px     |
| `body_02_m_multi` |   14px    |     500     |     -0.3px     |    22px     |
|    `body_01_m`    |   13px    |     500     |     -0.3px     |    19px     |
| `body_01_m_multi` |   13px    |     500     |     -0.3px     |    20px     |

##### caption

| Semantic, Value | font-size | font-weight | letter-spacing | line-height |
| :-------------: | :-------: | :---------: | :------------: | :---------: |
|   `caption_b`   |   12px    |     700     |     -0.2px     |    18px     |
|   `caption_m`   |   12px    |     500     |     -0.2px     |    18px     |
|   `caption_r`   |   12px    |     400     |     -0.2px     |    18px     |

<br />
#### Basic usage

```js
import '../../assets/styles/typography/typography.scss'

const render = () => {
  return (
    <section>
      <section>
        <div className="heading_04">Heading 04</div>
        <div className="heading_03">Heading 03</div>
        <div className="heading_02">Heading 02</div>
        <div className="heading_02_multi" style={{ whiteSpace: 'pre-wrap' }}>
          Heading 02 <br /> Multiline
        </div>
        <div className="heading_01">Heading 01</div>
        <div className="heading_01_multi" style={{ whiteSpace: 'pre-wrap' }}>
          Heading 01 <br /> Multiline
        </div>
      </section>

      <section style={{ marginTop: 20 }}>
        <div className="subtitle_02">Subtitle 02</div>
        <div className="subtitle_02_multi" style={{ whiteSpace: 'pre-wrap' }}>
          Subtitle 02 <br /> Multiline
        </div>
        <div className="subtitle_01">Subtitle 01</div>
        <div className="subtitle_01_multi" style={{ whiteSpace: 'pre-wrap' }}>
          Subtitle 01 <br /> Multiline
        </div>
      </section>

      <section style={{ marginTop: 20 }}>
        <div className="body_06_r">Body 06 Regular</div>
        <div className="body_06_r_multi" style={{ whiteSpace: 'pre-wrap' }}>
          Body 06 Regular
          <br /> Multiline
        </div>
        <div className="body_05_r">Body 05 Regular</div>
        <div className="body_05_r_multi" style={{ whiteSpace: 'pre-wrap' }}>
          Body 05 Regular
          <br /> Multiline
        </div>
        <div className="body_04_r">Body 04 Regular</div>
        <div className="body_04_r_multi" style={{ whiteSpace: 'pre-wrap' }}>
          Body 04 Regular
          <br /> Multiline
        </div>
        <div className="body_03_r">Body 03 Regular</div>
        <div className="body_03_r_multi" style={{ whiteSpace: 'pre-wrap' }}>
          Body 03 Regular
          <br /> Multiline
        </div>
        <div className="body_02_r">Body 02 Regular</div>
        <div className="body_02_r_multi" style={{ whiteSpace: 'pre-wrap' }}>
          Body 02 Regular
          <br /> Multiline
        </div>
        <div className="body_01_r">Body 01 Regular</div>
        <div className="body_01_r_multi" style={{ whiteSpace: 'pre-wrap' }}>
          Body 01 Regular
          <br /> Multiline
        </div>
      </section>

      <section style={{ marginTop: 20 }}>
        <div className="body_03_m">Body 03 Medium</div>
        <div className="body_03_m_multi" style={{ whiteSpace: 'pre-wrap' }}>
          Body 03 Medium
          <br /> Multiline
        </div>
        <div className="body_02_m">Body 02 Medium</div>
        <div className="body_02_m_multi" style={{ whiteSpace: 'pre-wrap' }}>
          Body 02 Medium
          <br /> Multiline
        </div>
        <div className="body_01_m">Body 01 Medium</div>
        <div className="body_01_m_multi" style={{ whiteSpace: 'pre-wrap' }}>
          Body 01 Medium
          <br /> Multiline
        </div>
      </section>

      <section style={{ marginTop: 20 }}>
        <div className="caption_r">Caption Regular </div>
        <div className="caption_m">Caption Medium </div>
        <div className="caption_b">Caption Bold </div>
      </section>
    </section>
  )
}
render()
```

- In LWDS, the use of Typography can be used through the class of css.
- Due to "Spoca Han San Neo", each scale uses a different line-height. In the case of multi-lines, it is different from line-height of a single line.
