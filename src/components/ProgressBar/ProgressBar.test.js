import React from 'react'
import { mount } from 'enzyme'

import cls from '@helpers/class'

import ProgressBar from '@components/Progressbar/ProgressBar'

describe('ProgressBar', () => {
  const setup = (options) => {
    const wrapper = mount(<ProgressBar {...options} />)

    const state = wrapper.find(`.${cls('progressbar__state')}`)
    const label = wrapper.find(`.${cls('progressbar__label')}`)
    const prefix = wrapper.find(`.${cls('progressbar__label-prefix')}`)
    const suffix = wrapper.find(`.${cls('progressbar__label-suffix')}`)
    const text = wrapper.find(`.${cls('progressbar__label-text')}`)
    const current = wrapper.find(`.${cls('progressbar__state-current')}`)

    return {
      wrapper,
      label,
      state,
      prefix,
      suffix,
      text,
      current,
    }
  }

  it('default', () => {
    const { label, state } = setup({ value: 0.4 })
    expect(label).toHaveLength(1)
    expect(state).toHaveLength(1)
  })

  it('size', () => {
    const { wrapper } = setup({ size: 'sm' })
    expect(wrapper.find(`.${cls('progressbar__label-sm')}`)).toHaveLength(1)

    const { wrapper: mdWrapper } = setup({ size: 'md' })
    expect(mdWrapper.find(`.${cls('progressbar__label-md')}`)).toHaveLength(1)
  })

  it('placement', () => {
    let placement = 'top'
    const { wrapper: topWrapper } = setup({ placement })
    expect(topWrapper.find(`.${cls(`progressbar__label-${placement}`)}`))

    placement = 'bottom'
    const { wrapper: bottomWrapper } = setup({ placement })
    expect(bottomWrapper.find(`.${cls(`progressbar__label-${placement}`)}`))

    placement = 'right'
    const { wrapper: rightWrapper } = setup({ placement })
    expect(rightWrapper.find(`.${cls(`progressbar__label-${placement}`)}`))

    placement = 'left'
    const { wrapper: leftWrapper } = setup({ placement: 'left' })
    expect(leftWrapper.find(`.${cls(`progressbar__label-${placement}`)}`))
  })

  it('state', () => {
    const { wrapper, state } = setup({ value: 0.4 })
    expect(wrapper.find(`.${cls('progressbar__state-current')}`)).toHaveLength(
      1,
    )
    expect(state).toHaveLength(1)
    expect(
      wrapper.find(`.${cls(`progressbar__state-${0.4 * 100}`)}`), // 백분율 환산
    ).toHaveLength(1)
  })

  it('isNotExistLabel', () => {
    const { label } = setup({ value: 0.4, isNotExistLabel: true })
    expect(label).toHaveLength(0)
  })

  it('strokeColor', () => {
    const strokeColor = 'skyblue'
    const { current } = setup({ strokeColor })
    expect(current.prop('style').backgroundColor).toBe(strokeColor)
  })

  it('isInfinite', () => {
    const { wrapper } = setup({ isInfinite: true })
    expect(wrapper.find(`.${cls('progressbar__state-infinite')}`)).toHaveLength(
      1,
    )
  })

  it('customLabel', () => {
    const label = 'progressing'
    const { text } = setup({ customLabel: label })
    expect(text.text()).toBe(label)

    const customLabel = (val) => `${val} ea`
    const { text: newText } = setup({ customLabel, value: 0.4 })
    expect(newText.text()).toBe('0.4 ea')
  })

  it('width, thickness', () => {
    const thickness = 10
    const width = 120
    const { state, current } = setup({ value: 0.4, width, thickness })

    expect(state.prop('style').height).toBe(thickness)
    expect(state.prop('style').minWidth).toBe(width)
    expect(current.prop('style').width).toBe('40%')
  })

  it('affix', () => {
    const _prefix = '₩'
    const _suffix = '원'
    const { prefix, suffix } = setup({
      value: 0.4,
      prefix: _prefix,
      suffix: _suffix,
    })

    expect(prefix.text()).toBe(_prefix)
    expect(suffix.text()).toBe(_suffix)
  })

  it('value error case', () => {
    expect(() => setup({ value: 'abc' })).toThrowError()
  })
})
