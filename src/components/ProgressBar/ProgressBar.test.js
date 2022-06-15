import React from 'react'
import { mount } from 'enzyme'

import cls from '@helpers/class'

import ProgressBar, {
  validateNumber,
  getMax,
} from '@components/Progressbar/ProgressBar'

describe('ProgressBar', () => {
  const setup = (options) => {
    const wrapper = mount(<ProgressBar {...options} />)

    const state = wrapper.find(`.${cls('progressbar', 'state')}`)
    const label = wrapper.find(`.${cls('progressbar', 'label')}`)
    const text = wrapper.find(`.${cls('progressbar', 'label', 'text')}`)
    const current = wrapper.find(`.${cls('progressbar', 'state', 'current')}`)

    return {
      wrapper,
      label,
      state,
      text,
      current,
    }
  }

  it('default', () => {
    const { label, state } = setup({ value: 40 })
    expect(label).toHaveLength(1)
    expect(state).toHaveLength(1)
  })

  it('size', () => {
    const { wrapper } = setup({ size: 'sm' })
    expect(wrapper.find(`.${cls('progressbar', 'label', 'sm')}`)).toHaveLength(
      1,
    )

    const { wrapper: mdWrapper } = setup({ size: 'md' })
    expect(
      mdWrapper.find(`.${cls('progressbar', 'label', 'md')}`),
    ).toHaveLength(1)
  })

  it('placement', () => {
    let placement = 'top'
    const { wrapper: topWrapper } = setup({ placement })
    expect(topWrapper.find(`.${cls('progressbar', 'label', `${placement}`)}`))

    placement = 'bottom'
    const { wrapper: bottomWrapper } = setup({ placement })
    expect(
      bottomWrapper.find(`.${cls('progressbar', 'label', `${placement}`)}`),
    )

    placement = 'right'
    const { wrapper: rightWrapper } = setup({ placement })
    expect(rightWrapper.find(`.${cls('progressbar', 'label', `${placement}`)}`))

    placement = 'left'
    const { wrapper: leftWrapper } = setup({ placement: 'left' })
    expect(leftWrapper.find(`.${cls('progressbar', 'label', `${placement}`)}`))
  })

  it('state', () => {
    const value = 40
    const { wrapper, state } = setup({ value, max: 100 })
    expect(
      wrapper.find(`.${cls('progressbar', 'state', 'current')}`),
    ).toHaveLength(1)
    expect(state).toHaveLength(1)

    expect(
      wrapper.find(`.${cls('progressbar', 'state', `${value}`)}`), // 백분율 환산
    ).toHaveLength(1)
  })

  it('strokeColor', () => {
    const strokeColor = 'skyblue'
    const { current } = setup({ strokeColor })
    expect(current.prop('style').backgroundColor).toBe(strokeColor)
  })

  it('isInfinite', () => {
    const { wrapper } = setup({ isInfinite: true })
    expect(
      wrapper.find(`.${cls('progressbar', 'state', 'infinite')}`),
    ).toHaveLength(1)
  })

  it('width, thickness', () => {
    const thickness = 10
    const width = 120
    const { state, current } = setup({ value: 40, max: 100, width, thickness })

    expect(state.prop('style').height).toBe(thickness)
    expect(state.prop('style').minWidth).toBe(width)
    expect(current.prop('style').width).toBe('40%')
  })

  it('label', () => {
    const value = 100
    const wrapper = mount(
      <ProgressBar value={value} max={100}>
        {value}
      </ProgressBar>,
    )

    expect(wrapper.find(`.${cls('progressbar', 'label', 'text')}`).text()).toBe(
      String(value),
    )
  })

  it('error case', () => {
    const { wrapper } = setup({ value: 40 })
    // ProgressBar doesn't have max value, so it has a 100% width
    expect(wrapper.find(`.${cls('progressbar', 'state', '100')}`)).toHaveLength(
      1,
    )

    const { current } = setup({ value: -5 })
    // ProgressBar value is negative number, so it has a 0% width
    expect(current.prop('style').width).toBe('0%')

    const { current: fullCurrent } = setup({ value: 100, max: 'linewalks' })
    // ProgressBar max is not a number, so it has a 100% width
    expect(fullCurrent.prop('style').width).toBe('100%')
  })

  it('validateNumber', () => {
    expect(validateNumber(123)).toBeTruthy()
    expect(validateNumber('123')).toBeTruthy()
    expect(validateNumber(null)).toBeFalsy()
    expect(validateNumber(undefined)).toBeFalsy()
    expect(validateNumber(0.1234)).toBeTruthy()
  })

  it('getMax', () => {
    expect(getMax(1, '5')).toBe(5)
    expect(getMax('1', '5')).toBe(5)
    expect(getMax(1, 'ab')).toBe(1)
  })
})
