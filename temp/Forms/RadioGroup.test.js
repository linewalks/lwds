import React from 'react'
import _ from 'lodash'
import { mount } from 'enzyme'
import { act } from 'react-dom/test-utils'

import Radio from '@components/Forms/Radio'
import RadioGroup from '@components/Forms/RadioGroup'
import ChildMargin from '@components/Layout/ChildMargin'
import cls from '@helpers/class'

describe('default', () => {
  const wrapper = mount(
    <RadioGroup
      name="option"
    >
      <ChildMargin
        margin={24}
      >
        <Radio name="option" value="option1">Option1</Radio>
        <Radio name="option" value="option2">Option2</Radio>
        <Radio name="option" value="option3">Option3</Radio>
        <Radio name="option" value="option4">Option4</Radio>
        <Radio name="option" value="option5" disabled>Option5</Radio>
      </ChildMargin>
    </RadioGroup>
  )
  it('nothing is checked at first', () => {
    const radioList = wrapper.find('input')
    _.each(_.range(radioList.length), (index) => {
      const radio = radioList.at(index)
      expect(radio.props().checked).toBeFalsy()
    })
  })
})

describe('with defaultValue', () => {
  const defaultValue = "option3"
  const wrapper = mount(
    <RadioGroup
      name="option"
      defaultValue={defaultValue}
    >
      <ChildMargin
        margin={24}
      >
        <Radio name="option" value="option1">Option1</Radio>
        <Radio name="option" value="option2">Option2</Radio>
        <Radio name="option" value="option3">Option3</Radio>
        <Radio name="option" value="option4">Option4</Radio>
        <Radio name="option" value="option5" disabled>Option5</Radio>
      </ChildMargin>
    </RadioGroup>
  )
  it('default value', () => {
    const radioList = wrapper.find('input')
    _.each(_.range(radioList.length), (index) => {
      const radio = radioList.at(index)
      expect(radio.props().checked).toBe(radio.props().value === defaultValue)
    })
  })
  it('on change', () => {
    const handleChange = jest.fn()
    wrapper.setProps({ onChange: handleChange })
    const newValue = 'option1'
    const newRadio = wrapper.find('input').find({ value: newValue })
    newRadio.simulate('change', { target: { checked: true } })
    expect(handleChange).toHaveBeenCalled()
  })
})

describe('with value', () => {
  const defaultValue = "option3"
  const handleChange = jest.fn()
  const wrapper = mount(
    <RadioGroup
      name="option"
      value={defaultValue}
      onChange={handleChange}
    >
      <ChildMargin
        margin={24}
      >
        <Radio name="option" value="option1">Option1</Radio>
        <Radio name="option" value="option2">Option2</Radio>
        <Radio name="option" value="option3">Option3</Radio>
        <Radio name="option" value="option4">Option4</Radio>
        <Radio name="option" value="option5" disabled>Option5</Radio>
      </ChildMargin>
    </RadioGroup>
  )
  it('value', () => {
    const radioList = wrapper.find('input')
    _.each(_.range(radioList.length), (index) => {
      const radio = radioList.at(index)
      expect(radio.props().checked).toBe(radio.props().value === defaultValue)
    })
  })
  it('prop value change', () => {
    const newValue = 'option2'
    wrapper.setProps({ value: newValue })
    wrapper.update()
    const radioList = wrapper.find('input')
    _.each(_.range(radioList.length), (index) => {
      const radio = radioList.at(index)
      expect(radio.props().checked).toBe(radio.props().value === newValue)
    })
  })
  it('on change click', () => {
    const newValue = 'option1'
    const newRadio = wrapper.find('input').find({ value: newValue })
    newRadio.simulate('change', { target: { checked: true } })
    expect(handleChange).toHaveBeenCalled()
  })
})

