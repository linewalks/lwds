import React from 'react'
import each from 'jest-each'
import { mount } from 'enzyme'

import TextInput from '@components/Forms/TextINput'
import cls from '@helpers/class'

describe('variant', () => {
  each([
    'outline',
    'outline_round'
  ]).it('%s', (variant) => {
    const wrapper = mount(<TextInput variant={variant} />)
    expect(wrapper.find(`.${cls('text', variant)}`)).toHaveLength(1)
  })
})

describe('status', () => {
  it('default', () => {
    const wrapper = mount(<TextInput />)
    expect(wrapper.find(`.${cls('text')}`)).toHaveLength(1)
  })
  it('disabled', () => {
    const wrapper = mount(<TextInput disabled />)
    expect(wrapper.find('input').props().disabled).toBeTruthy()
  })
  it('error', () => {
    const wrapper = mount(<TextInput error />)
    expect(wrapper.childAt(0).props().className).toContain('error')
  })
})

describe('with value set', () => {
  it('value', () => {
    const value = 'test'
    const wrapper = mount(<TextInput value={value} />)
    expect(wrapper.find('input').props().value).toEqual(value)
  })
  it('default value', () => {
    const value = 'test'
    const wrapper = mount(<TextInput defaultValue={value} />)
    expect(wrapper.find('input').props().value).toEqual(value)
  })
})

describe('on change', () => {
  it('with value', () => {
    const handleChange = jest.fn()
    const initialValue = "init value"
    const wrapper = mount(
      <TextInput
        value={initialValue}
        onChange={handleChange}
      />
    )
    const newValue = 'new value'
    wrapper.find('input').simulate('change', { target: { value: newValue } })
    expect(handleChange).toHaveBeenCalledWith(newValue)
    expect(wrapper.find('input').props().value).toBe(initialValue)
  })
  it('without value', () => {
    const handleChange = jest.fn()
    const wrapper = mount(
      <TextInput
        onChange={handleChange}
      />
    )
    const newValue = 'new value'
    wrapper.find('input').simulate('change', { target: { value: newValue } })
    expect(handleChange).toHaveBeenCalledWith(newValue)
    expect(wrapper.find('input').props().value).toBe(newValue)
  })
})
