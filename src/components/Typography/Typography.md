### Typeface

- LWDS is optimized for 'Spoqa Han Sans Neo' typeface.
- [Spoqa Han Sans Neo](https://github.com/spoqa/spoqa-han-sans)

The font settings are as follows.

```html
<link
  href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
  rel="stylesheet"
  type="text/css"
/>
```

```css
* {
  font-family: 'Spoqa Han Sans Neo', sans-serif;
}
```

Font-weight uses 400 (regular), 500 (medium), and 700 (bold).

### Type Scale

LWDS Typography supports various types of scales.

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
