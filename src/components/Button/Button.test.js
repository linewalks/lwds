import React from 'react'
import each from 'jest-each'
import { mount } from 'enzyme'

import Button from '@components/Button/Button'
import ChevronIcon from '@components/Icon/ChevronIcon'
import cls from '@helpers/class'

describe('default', () => {
  const ButtonText = 'Button Text'
  it('text', () => {
    const wrapper = mount(<Button>{ButtonText}</Button>)
    expect(wrapper.text()).toBe(ButtonText)
  })
})

describe('size', () => {
  each([
    'lg',
    'md',
    'sm'
  ]).it('%s', (size) => {
    const wrapper = mount(<Button size={size} />)
    expect(wrapper.find(`.${cls('button', 'size', size)}`)).toHaveLength(2)
  })
})

describe('variant', () => {
  each([
    'primary',
    'basic',
    'primary_line',
    'basic_line',
    'primary_light',
    'basic_light'
  ]).it('%s', (variant) => {
    const wrapper = mount(<Button variant={variant} />)
    expect(wrapper.find(`.${cls('button', 'variant', variant)}`)).toHaveLength(2)
  })
})

describe('with image', () => {
  it('start', () => {
    const wrapper = mount(
      <Button
        variant="basic"
        size="lg"
        startIcon={<ChevronIcon />}
      />
    )
    expect(wrapper.find('svg')).toHaveLength(1)
  })
  it('end', () => {
    const wrapper = mount(
      <Button
        variant="basic"
        size="lg"
        endIcon={<ChevronIcon />}
      />
    )
    expect(wrapper.find('svg')).toHaveLength(1)
  })
  it('both', () => {
    const wrapper = mount(
      <Button
        variant="basic"
        size="lg"
        startIcon={<ChevronIcon />}
        endIcon={<ChevronIcon />}
      />
    )
    expect(wrapper.find('svg')).toHaveLength(2)
  })
})

describe('block', () => {
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

describe('font weight', () => {
  it('font bold', () => {
    const wrapper = mount(
      <Button
        variant="basic"
        size="lg"
        bold
      />
    )
    expect(wrapper.childAt(0).props().style).toHaveProperty('fontWeight', 'bold')
  })
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
