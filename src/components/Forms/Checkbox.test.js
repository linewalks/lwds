import React from 'react'
import each from 'jest-each'
import { mount } from 'enzyme'
import { act } from 'react-dom/test-utils'

import Checkbox from '@components/Forms/Checkbox'
import cls from '@helpers/class'

describe('size', () => {
  each([
    'md',
    'sm'
  ]).it('%s', (size) => {
    const wrapper = mount(<Checkbox size={size}/>)
    expect(wrapper.find('test-file-stub')).toHaveLength(1)
  })
})

describe('icon weight', () => {
  each([
    'start',
    'center',
    'end'
  ]).it('%s', (iconWeight) => {
    const wrapper = mount(<Checkbox iconWeight={iconWeight}/>)
    const length = wrapper.find(`.${cls('checkbox', 'box', iconWeight)}`).length
    expect(length).toBeGreaterThan(0)
  })
})

describe('with defaultChecked', () => {
  it('defaultChecked', () => {
    const wrapper = mount(<Checkbox defaultChecked />)
    wrapper.update()
    expect(wrapper.find('input').props().checked).toBeTruthy()
  })
  it('change state', () => {
    const handleChange = jest.fn()
    const wrapper = mount(<Checkbox defaultChecked onChange={handleChange} />)
    wrapper.find('input').simulate('change', { target: { checked: false } })
    wrapper.update()

    expect(handleChange).toHaveBeenCalled()
    expect(wrapper.find('input').props().checked).toBeFalsy()
  })
})

describe('with checked', () => {
  it('event dont change state', async () => {
    const wrapper = mount(<Checkbox checked={false} />)
    await act(async () => {
      wrapper.find('input').simulate('change', { target: { checked: true } })
      wrapper.update()

      expect(wrapper.props().checked).toBeFalsy()
      expect(wrapper.find('input').props().checked).toBeFalsy()
    })
  })

  it('update props change checked', () => {
    const wrapper = mount(<Checkbox checked={false} />)
    wrapper.setProps({ checked: true })
    wrapper.update()
    expect(wrapper.find('input').props().checked).toBeTruthy()
  })
})
