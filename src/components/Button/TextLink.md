#### By variant

```js
<div style={{ 
  backgroundColor: '#eeeeee',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px 100px'
}}>
  <TextLink>Primary</TextLink>
  <TextLink variant="basic">Basic</TextLink>
  <TextLink disabled>Disabled</TextLink>
</div>
```

#### Underline

```js
<div style={{ 
  backgroundColor: '#eeeeee',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px 100px'
}}>
  <TextLink underline>Primary</TextLink>
  <TextLink variant="basic" underline>Basic</TextLink>
  <TextLink underline disabled>Disabled</TextLink>
</div>
```

#### With other text
```js
<div style={{ 
  backgroundColor: '#eeeeee',
  padding: '20px 100px',
  fontSize: '20px'
}}>
  I am the <TextLink variant="basic">king</TextLink>. You are the <TextLink underline>prince</TextLink> who has no <TextLink disabled>crown</TextLink>.
</div>
```

#### With Icon

```js
<div style={{ 
  backgroundColor: '#eeeeee',
  padding: '20px 100px',
  fontSize: '20px'
}}>
  <TextLink variant="basic">Let's Go! <img src="/svg/icn_chevron_right_16_black.svg" /></TextLink>
</div>
```
