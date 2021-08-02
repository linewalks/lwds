import React from 'react'
import each from 'jest-each'
import { mount } from 'enzyme'

import Button from 'components/Button/Button'
import cls from 'helpers/class'

describe('default', () => {
  const ButtonText = 'Button Text'
  it('text', () => {
    const wrapper = mount(<Button>{ButtonText}</Button>)
    expect(wrapper.text()).toBe(ButtonText)
  })
})

describe('Button size', () => {
  each([
    'lg',
    'md',
    'sm'
  ]).it('%s', (size) => {
    const wrapper = mount(<Button size={size} />)
    expect(wrapper.find(`.${cls('button', size)}`)).toHaveLength(2)
  })
})

describe('Button variant', () => {
  each([
    'primary',
    'basic',
    'primary_line',
    'basic_line',
    'primary_light',
    'basic_light'
  ]).it('%s', (variant) => {
    const wrapper = mount(<Button variant={variant} />)
    expect(wrapper.find(`.${cls('button', variant)}`)).toHaveLength(2)
  })
})

describe('Button with icon', () => {
  it('start', () => {
    const wrapper = mount(
      <Button
        variant="basic"
        size="lg"
        startImgSrc="/svg/icn_plus_16.svg"
      />
    )
    expect(wrapper.find('img')).toHaveLength(1)
  })
  it('end', () => {
    const wrapper = mount(
      <Button
        variant="basic"
        size="lg"
        endImgSrc="/svg/icn_plus_16.svg"
      />
    )
    expect(wrapper.find('img')).toHaveLength(1)
  })
  it('both', () => {
    const wrapper = mount(
      <Button
        variant="basic"
        size="lg"
        startImgSrc="/svg/icn_plus_16.svg"
        endImgSrc="/svg/icn_plus_16.svg"
      />
    )
    expect(wrapper.find('img')).toHaveLength(2)
  })
})

describe('Button block', () => {
  it('block', () => {
    const wrapper = mount(
      <Button
        variant="basic"
        size="lg"
        block
      />
    )
    expect(wrapper.find(`.${cls('button', 'block')}`)).toHaveLength(2)
  })
})

describe('Button font normal', () => {
  it('font normal', () => {
    const wrapper = mount(
      <Button
        variant="basic"
        size="lg"
        bold={false}
      />
    )
    expect(wrapper.childAt(0).props().style).toHaveProperty('fontWeight', 'normal')
  })
})
