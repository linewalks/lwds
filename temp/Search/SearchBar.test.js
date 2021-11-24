import React from 'react'
import { mount } from 'enzyme'

import SearchBar from '@components/Search/SearchBar'

describe('icon', () => {
  const wrapper = mount(<SearchBar />)
  it('have input and search icon', () => {
    expect(wrapper.find('input')).toHaveLength(1)
    expect(wrapper.find('img')).toHaveLength(1)
  })
  it('input something and erase icon appear', () => {
    const newValue = 'new value'
    wrapper.find('input').simulate('change', { target: { value: newValue } })
    expect(wrapper.find('img')).toHaveLength(2)
  })
  it('erase input and erase icon disappear', () => {
    const newValue = ''
    wrapper.find('input').simulate('change', { target: { value: newValue } })
    expect(wrapper.find('img')).toHaveLength(1)
  })
  it('click erase icon and value erased', () => {
    const newValue = 'new value'
    wrapper.find('input').simulate('change', { target: { value: newValue } })
    expect(wrapper.find('input').props().value).toBe(newValue)
    wrapper.find('img').at(1).simulate('click')
    expect(wrapper.find('input').props().value).toBe('')
  })
})

describe('on change', () => {
  it('on change', () => {
    const handleChange = jest.fn()
    const wrapper = mount(
      <SearchBar
        onChange={handleChange}
      />
    )
    const newValue = 'new value'
    wrapper.find('input').simulate('change', { target: { value: newValue } })
    expect(handleChange).toHaveBeenCalledWith(newValue)
  })
})

describe('on submit', () => {
  it('on submit', () => {
    const handleSubmit = jest.fn()
    const wrapper = mount(
      <SearchBar
        onSubmit={handleSubmit}
      />
    )
    const newValue = 'new value'
    wrapper.find('input').simulate('change', { target: { value: newValue } })
    wrapper.find('input').simulate('keypress', {key: 'Enter'})
    expect(handleSubmit).toHaveBeenCalledWith(newValue)
  })
})
