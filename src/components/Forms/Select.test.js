import React from 'react'
import each from 'jest-each'
import { mount } from 'enzyme'

import Select from '@components/Forms/Select'
import cls from '@helpers/class'

describe('variant', () => {
  each([
    'outline',
    'outline_round'
  ]).it('%s', (variant) => {
    const wrapper = mount(<Select variant={variant} />)
    expect(wrapper.find(`.${cls('select', variant)}`)).toHaveLength(1)
  })
})

describe('size', () => {
  each([
    'xlg',
    'lg',
    'md',
  ]).it('%s', (size) => {
    const wrapper = mount(<Select size={size} />)
    expect(wrapper.find(`.${cls('select', size)}`)).toHaveLength(1)
  })
})

describe('status', () => {
  it('default', () => {
    const wrapper = mount(<Select />)
    expect(wrapper.find(`.${cls('select')}`)).toHaveLength(1)
  })
  it('disabled', () => {
    const wrapper = mount(<Select disabled />)
    expect(wrapper.find('select').props().disabled).toBeTruthy()
  })
  it('error', () => {
    const wrapper = mount(<Select error />)
    expect(wrapper.childAt(0).props().className).toContain('error')
  })
})

describe('options with labels', () => {
  const options = [
    'label1',
    'label2',
    'label3',
    'label4'
  ]
  it('default', () => {
    const wrapper = mount(<Select options={options} />)
    expect(wrapper.find('option')).toHaveLength(options.length)
  })
  it('placeholder', () => {
    const wrapper = mount(
      <Select
        options={options}
        placeholder="placeholder"
      />
    )
    expect(wrapper.find('option')).toHaveLength(options.length + 1)
  })
  it('value set', () => {
    const value = options[2]
    const wrapper = mount(
      <Select
        options={options}
        value={value}
      />
    )
    expect(wrapper.find('select').props().value).toEqual(value)
  })
  it('default value set', () => {
    const value = options[2]
    const wrapper = mount(
      <Select
        options={options}
        defaultValue={value}
      />
    )
    expect(wrapper.find('select').props().value).toEqual(value)
  })
  it('on change without value', () => {
    const handleChange = jest.fn()
    const wrapper = mount(
      <Select
        options={options}
        onChange={handleChange}
      />
    )
    const newValue = options[2]
    wrapper.find('select').simulate('change', { target: { value: newValue } })
    expect(handleChange).toHaveBeenCalledWith(newValue)
    expect(wrapper.find('select').props().value).toEqual(newValue)
  })
  it('on change with value', () => {
    const handleChange = jest.fn()
    const value = options[2]
    const newValue = options[0]
    const wrapper = mount(
      <Select
        options={options}
        onChange={handleChange}
        value={value}
      />
    )
    wrapper.find('select').simulate('change', { target: { value: newValue } })
    expect(handleChange).toHaveBeenCalledWith(newValue)
    expect(wrapper.find('select').props().value).toEqual(value)
  })
})

describe('options with value & labels', () => {
  const options = [
    { value: 'value1', label: 'label1' },
    { value: 'value2', label: 'label2' },
    { value: 'value3', label: 'label3' },
    { value: 'value4', label: 'label4' }
  ]
  it('default', () => {
    const wrapper = mount(<Select options={options} />)
    expect(wrapper.find('option')).toHaveLength(options.length)
  })
  it('placeholder', () => {
    const wrapper = mount(
      <Select
        options={options}
        placeholder="placeholder"
      />
    )
    expect(wrapper.find('option')).toHaveLength(options.length + 1)
  })
  it('value set', () => {
    const value = options[2].value
    const wrapper = mount(
      <Select
        options={options}
        value={value}
      />
    )
    expect(wrapper.find('select').props().value).toEqual(value)
  })
  it('default value set', () => {
    const value = options[2].value
    const wrapper = mount(
      <Select
        options={options}
        defaultValue={value}
      />
    )
    expect(wrapper.find('select').props().value).toEqual(value)
  })
  it('on change without value', () => {
    const handleChange = jest.fn()
    const wrapper = mount(
      <Select
        options={options}
        onChange={handleChange}
      />
    )
    const newValue = options[2].value
    wrapper.find('select').simulate('change', { target: { value: newValue } })
    expect(handleChange).toHaveBeenCalledWith(newValue)
    expect(wrapper.find('select').props().value).toEqual(newValue)
  })
  it('on change with value', () => {
    const handleChange = jest.fn()
    const value = options[2].value
    const newValue = options[0].value
    const wrapper = mount(
      <Select
        options={options}
        onChange={handleChange}
        value={value}
      />
    )
    wrapper.find('select').simulate('change', { target: { value: newValue } })
    expect(handleChange).toHaveBeenCalledWith(newValue)
    expect(wrapper.find('select').props().value).toEqual(value)
  })
})


