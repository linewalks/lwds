Button example:

```js

const ButtonExample = () => {
  return (
    <section style={{ backgroundColor: '#f8f9fa' }}>
      <h3>default (size md)</h3>
      <div style={{ marginBottom: 10 }}>
        <Button variant="primary">primary</Button>
        <Button variant="basic">basic</Button>
        <Button variant="primary_line">primary_line</Button>
        <Button variant="basic_line">basic_line</Button>
        <Button variant="primary_light">primary_light</Button>
        <Button variant="basic_light">basic_light</Button>
      </div>
      <h3>disabled</h3>
      <div style={{ marginBottom: 10 }}>
        <Button variant="primary" disabled>primary</Button>
        <Button variant="basic" disabled>basic</Button>
        <Button variant="primary_line" disabled>primary_line</Button>
        <Button variant="basic_line" disabled>basic_line</Button>
        <Button variant="primary_light" disabled>primary_light</Button>
        <Button variant="basic_light" disabled>basic_light</Button>
      </div>

      <h3>as a tag</h3>
      <div style={{ marginBottom: 10 }}>
        <Button variant="primary" as="a">primary</Button>
        <Button variant="primary_line" as="a">primary_line</Button>
        <Button variant="basic" as="a">basic</Button>
        <Button variant="basic_line" as="a">basic_line</Button>
        <Button variant="primary_light" as="a">primary_light</Button>
        <Button variant="basic_light" as="a">basic_light</Button>
      </div>

      <h3>size lg</h3>
      <div style={{ marginBottom: 10 }}>
        <Button variant="primary" size="lg">primary</Button>
        <Button variant="primary_line" size="lg">primary_line</Button>
        <Button variant="basic" size="lg">basic</Button>
        <Button variant="basic_line" size="lg">basic_line</Button>
        <Button variant="primary_light" size="lg">primary_light</Button>
        <Button variant="basic_light" size="lg">basic_light</Button>
      </div>

      <h3>size xlg</h3>
      <div style={{ marginBottom: 10 }}>
        <Button variant="primary" size="xlg">primary</Button>
        <Button variant="primary_line" size="xlg">primary_line</Button>
        <Button variant="basic" size="xlg">basic</Button>
        <Button variant="basic_line" size="xlg">basic_line</Button>
        <Button variant="primary_light" size="xlg">primary_light</Button>
        <Button variant="basic_light" size="xlg">basic_light</Button>
      </div>
      <h3>size xlg with block</h3>
      <div style={{ marginBottom: 10 }}>
        <Button variant="primary" size="xlg" block>primary</Button>
        <Button variant="primary_line" size="xlg" block>primary_line</Button>
      </div>
      <h3>without bold</h3>
      <div style={{ marginBottom: 10 }}>
        <Button variant="primary" bold={false}>primary</Button>
        <Button variant="primary_line" bold={false}>primary_line</Button>
      </div>
      <h3>with icon</h3>
      <div style={{ marginBottom: 10 }}>
        <Button
          variant="primary"
          size="md"
          startImgSrc="/svg/icn_chevron_filled_right_16.svg"
        >
          Primary
        </Button>
        <Button
          variant="primary"
          size="md"
          endImgSrc="/svg/icn_chevron_filled_right_16.svg"
        >
          Primary
        </Button>
        <Button
          variant="primary"
          size="lg"
          startImgSrc="/svg/icn_chevron_filled_right_16.svg"
        >
          Primary
        </Button>
        <Button
          variant="primary"
          size="lg"
          endImgSrc="/svg/icn_chevron_filled_right_16.svg"
        >
          Primary
        </Button>
        <Button
          variant="primary"
          size="xlg"
          startImgSrc="/svg/icn_chevron_filled_right_16.svg"
        >
          Primary
        </Button>
        <Button
          variant="primary"
          size="xlg"
          endImgSrc="/svg/icn_chevron_filled_right_16.svg"
        >
          Primary
        </Button>
      </div>
    </section>
  )
}

ButtonExample()
```