import React from 'react'
import _ from 'lodash'
import each from 'jest-each'
import { mount } from 'enzyme'
import 'jest-canvas-mock'

import SegmentedControl from 'components/SegmentedControl/SegmentedControl'
import cls from 'helpers/class'

describe('size', () => {
  const valueList = ['aaa', 'bbb', 'ccc']
  each([
    'lg',
    'md'
  ]).it('%s', (size) => {
    const wrapper = mount(
      <SegmentedControl
        size={size}
        valueList={valueList}
      />
    )
    expect(wrapper.find(`.${cls('segmented', size)}`)).toHaveLength(1)
    expect(wrapper.find(`.${cls('segmented', 'btn', size)}`)).toHaveLength(valueList.length)
  })
})

describe('click', () => {
  it('click button onChange call', () => {
    const valueList = ['aaa', 'bbbbb', 'cccc']
    const defaultValue = valueList[2]
    const wrapper = mount(
      <SegmentedControl
        size='md'
        valueList={valueList}
        defaultValue={defaultValue}
      />
    )
    const onChange = jest.fn()
    wrapper.setProps({ onChange })
    _.each(valueList, (value, index) => {
      wrapper.find('button').at(index).simulate('click')
      expect(onChange).toHaveBeenCalledWith(value)
    })
  })
})

describe('with defaultValue', () => {
  const activeCls = cls('segmented', 'active')
  const valueList = ['aaa', 'bbbbb', 'cccc']
  const defaultValue = valueList[2]
  let wrapper
  beforeAll(() => {
    wrapper = mount(
      <SegmentedControl
        size='md'
        valueList={valueList}
        defaultValue={defaultValue}
      />
    )
  })
  it('defaultValue', () => {    
    _.each(valueList, (value, index) => {
      const className = wrapper.find('button').at(index).props().className
      if (value === defaultValue) {
        expect(className).toContain(activeCls)
      } else {
        expect(className).not.toContain(activeCls)
      }
    })
  })
  it('click button and set active', () => {
    _.each(valueList, (_value, index) => {
      wrapper.find('button').at(index).simulate('click')
      wrapper.update()
      expect(wrapper.find('button').at(index).props().className).toContain(activeCls)
    })
  })
})

describe('with value', () => {
  const activeCls = cls('segmented', 'active')
  const valueList = ['aaa', 'bbbbb', 'cccc']
  const defaultValue = valueList[2]
  let wrapper
  beforeAll(() => {
    wrapper = mount(
      <SegmentedControl
        size='md'
        valueList={valueList}
        value={defaultValue}
      />
    )
  })
  it('click button do not change to active', () => {
    const onChange = jest.fn()
    wrapper.setProps({ onChange })
    _.each(valueList, (value, index) => {
      wrapper.find('button').at(index).simulate('click')
      const className = wrapper.find('button').at(index).props().className
      if (value === defaultValue) {
        expect(className).toContain(activeCls)
      } else {
        expect(className).not.toContain(activeCls)
      }
    })
  })
  it('update props change to active', () => {
    _.each(valueList, (value, index) => {
      wrapper.setProps({ value })
      wrapper.update()
      expect(wrapper.find('button').at(index).props().className).toContain(activeCls)
    })
  })
})
