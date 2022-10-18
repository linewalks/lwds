import React from 'react'
import each from 'jest-each'
import { mount } from 'enzyme'

import Button from '@components/Button/Button'
import ChevronIcon from '@components/Icon/Icons/Navigation/ChevronIcon'
import cls from '@helpers/class'

describe('default', () => {
  const ButtonText = 'Button Text'
  it('text', () => {
    const wrapper = mount(<Button>{ButtonText}</Button>)
    expect(wrapper.text()).toBe(ButtonText)
  })
})

describe('size', () => {
  each(['sm' | 'md' | 'lg' | 'xl']).it('%s', (size) => {
    const wrapper = mount(<Button size={size} />)
    expect(wrapper.find(`.${cls('button', size)}`)).toHaveLength(1)
  })
})

describe('variant', () => {
  each([
    'primary' |
      'secondary' |
      'tertiary' |
      'ghost' |
      'danger_primary' |
      'danger_tertiary',
  ]).it('%s', (variant) => {
    const wrapper = mount(<Button variant={variant} />)
    expect(wrapper.find(`.${cls('button', variant)}`)).toHaveLength(1)
  })
})

describe('with image', () => {
  it('start', () => {
    const wrapper = mount(
      <Button variant="basic" size="lg" leftIcon={<ChevronIcon />} />,
    )
    expect(wrapper.find('svg')).toHaveLength(1)
  })
  it('end', () => {
    const wrapper = mount(
      <Button variant="basic" size="lg" rightIcon={<ChevronIcon />} />,
    )
    expect(wrapper.find('svg')).toHaveLength(1)
  })
  it('both', () => {
    const wrapper = mount(
      <Button
        variant="basic"
        size="lg"
        leftIcon={<ChevronIcon />}
        rightIcon={<ChevronIcon />}
      />,
    )
    expect(wrapper.find('svg')).toHaveLength(2)
  })
})

describe('block', () => {
  it('block', () => {
    const wrapper = mount(<Button variant="basic" size="lg" block />)
    expect(wrapper.props('block')).toBeTruthy()
  })
})

describe('font weight', () => {
  it('font bold', () => {
    const wrapper = mount(<Button variant="basic" size="lg" bold />)
    expect(wrapper.childAt(0).props().style).toHaveProperty('fontWeight', 700)
  })
  it('font normal', () => {
    const wrapper = mount(<Button variant="basic" size="lg" bold={false} />)
    expect(wrapper.childAt(0).props().style).toHaveProperty('fontWeight', 500)
  })
})
