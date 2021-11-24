import React from 'react'
import each from 'jest-each'
import { mount } from 'enzyme'

import ProgressBar from '@components/ProgressBar/ProgressBar'
import cls from '@helpers/class'

describe('by size', () => {
  each([
    'sm',
    'md'
  ]).it('%s', (size) => {
    const wrapper = mount(<ProgressBar size={size} />)
    expect(wrapper.find(`.${cls('progressbar', size)}`)).toHaveLength(1)
  })
})

describe('by progress', () => {
  each([
    0.0,
    0.25,
    0.5,
    1.0
  ]).it('progress %f', (progress) => {
    const wrapper = mount(<ProgressBar progress={progress}/>)
    expect(wrapper.find(`.${cls('progressbar', 'filled')}`).props().style.width).toBe(`${progress*100}%`)
  })
  each([
    1.0,
    1.25,
    2.0
  ]).it('full when progress %f', (progress) => {
    const wrapper = mount(<ProgressBar progress={progress}/>)
    expect(wrapper.find(`.${cls('progressbar', 'filled')}`).props().style.width).toBe('100%')
    expect(wrapper.find(`.${cls('progressbar', 'filled', 'full')}`)).toHaveLength(1)
  })
})
