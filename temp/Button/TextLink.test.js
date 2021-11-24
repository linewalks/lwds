import React from 'react'
import { mount } from 'enzyme'

import TextLink from '@components/Button/TextLink'
import cls from '@helpers/class'

const Text = 'Link Text'

describe('default', () => {
  it('text', () => {
    const wrapper = mount(<TextLink>{Text}</TextLink>)
    expect(wrapper.text()).toBe(Text)
  })
})

describe('underline', () => {
  it('underline', () => {
    const wrapper = mount(
      <TextLink underline>{Text}</TextLink>
    )
    expect(wrapper.text()).toBe(Text)
    expect(wrapper.find(`.${cls('textlink', 'underline')}`)).toHaveLength(2)
  })
})

describe('disabled', () => {
  it('disabled', () => {
    const wrapper = mount(
      <TextLink disabled>{Text}</TextLink>
    )
    expect(wrapper.text()).toBe(Text)
    expect(wrapper.find(`.${cls('textlink', 'disabled')}`)).toHaveLength(2)
  })
})

describe('font weight', () => {
  it('font bold', () => {
    const wrapper = mount(
      <TextLink bold>{Text}</TextLink>
    )
    expect(wrapper.text()).toBe(Text)
    expect(wrapper.childAt(0).props().style).toHaveProperty('fontWeight', 'bold')
  })
  it('font normal', () => {
    const wrapper = mount(
      <TextLink bold={false}>{Text}</TextLink>
    )
    expect(wrapper.text()).toBe(Text)
    expect(wrapper.childAt(0).props().style).toHaveProperty('fontWeight', 'normal')
  })
})
