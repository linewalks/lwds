import React from 'react'
import each from 'jest-each'
import { mount } from 'enzyme'

import Radio from '@components/Forms/Radio'
import cls from '@helpers/class'

describe('size', () => {
  each([
    'md',
  ]).it('%s', (size) => {
    const wrapper = mount(<Radio size={size}/>)
    expect(wrapper.find('test-file-stub')).toHaveLength(1)
  })
})

describe('icon weight', () => {
  each([
    'start',
    'center',
    'end'
  ]).it('%s', (iconWeight) => {
    const wrapper = mount(<Radio iconWeight={iconWeight}/>)
    const length = wrapper.find(`.${cls('radio', 'box', iconWeight)}`).length
    expect(length).toBeGreaterThan(0)
  })
})

describe('status', () => {
  it('default', () => {
    const wrapper = mount(<Radio />)
    expect(wrapper.find('input').prop('checked')).toBeFalsy()
  })
  it('checked', () => {
    const wrapper = mount(<Radio checked />)
    expect(wrapper.find('input').prop('checked')).toBeTruthy()
  })
  it('disabled', () => {
    const wrapper = mount(<Radio disabled/>)
    expect(wrapper.find('input').prop('disabled')).toBeTruthy()
  })
})

describe('on change', () => {
  it('on change call', () => {
    const handleChange = jest.fn()
    const wrapper = mount(<Radio onChange={handleChange} />)
    wrapper.find('input').simulate('change', { target: { checked: true } })
    wrapper.update()

    expect(handleChange).toHaveBeenCalled()
  })
})
