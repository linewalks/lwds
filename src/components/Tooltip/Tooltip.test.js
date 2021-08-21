import React from 'react'
import { mount } from 'enzyme'
import { act } from 'react-dom/test-utils'

import TextLink from '@components/Button/TextLink'
import Tooltip from '@components/Tooltip/Tooltip'
import Popup from '@components/Layout/Popup'
import cls from '@helpers/class'

describe('without delay', () => {
  it('anchor over & out', () => {
    const wrapper = mount(
      <Tooltip
        content={'this is tooltip of a text link'}
        offsetTop={30}
        offsetLeft={-30}
        mouseOverDelay={0}
        mouseOutDelay={0}
      >
        <TextLink id="anchor">Hover Here!</TextLink>
      </Tooltip>
    )
    expect(wrapper.find(Popup).props().isOpen).toBeFalsy()
    wrapper.find('#anchor').at(0).simulate('mouseover')
    expect(wrapper.find(Popup).props().isOpen).toBeTruthy()
    wrapper.find('#anchor').at(0).simulate('mouseout')
    expect(wrapper.find(Popup).props().isOpen).toBeFalsy()
  })

  it('anchor & tooltip over & out', () => {
    const wrapper = mount(
      <Tooltip
        content={'this is tooltip of a text link'}
        offsetTop={30}
        offsetLeft={-30}
        mouseOverDelay={0}
        mouseOutDelay={0}
      >
        <TextLink id="anchor">Hover Here!</TextLink>
      </Tooltip>
    )
    expect(wrapper.find(Popup).props().isOpen).toBeFalsy()
    wrapper.find('#anchor').at(0).simulate('mouseover')
    expect(wrapper.find(Popup).props().isOpen).toBeTruthy()

    wrapper.find(`.${cls('tooltip')}`).simulate('mouseover')
    wrapper.find('#anchor').at(0).simulate('mouseout')
    expect(wrapper.find(Popup).props().isOpen).toBeTruthy()

    wrapper.find(`.${cls('tooltip')}`).simulate('mouseout')
    expect(wrapper.find(Popup).props().isOpen).toBeFalsy()
  })
})

describe('with delay', () => {
  it('anchor over & out', async () => {
    jest.useFakeTimers()
    const wrapper = mount(
      <Tooltip
        content={'this is tooltip of a text link'}
        offsetTop={30}
        offsetLeft={-30}
        mouseOverDelay={0.1}
        mouseOutDelay={0.1}
      >
        <TextLink id="anchor">Hover Here!</TextLink>
      </Tooltip>
    )
    expect(wrapper.find(Popup).props().isOpen).toBeFalsy()
    wrapper.find('#anchor').at(0).simulate('mouseover')
    expect(wrapper.find(Popup).props().isOpen).toBeFalsy()

    expect(setTimeout).toHaveBeenCalledTimes(1)
    act(() => {
      jest.runAllTimers()
    })

    wrapper.update()
    expect(wrapper.find(Popup).props().isOpen).toBeTruthy()

    wrapper.find('#anchor').at(0).simulate('mouseout')
    expect(wrapper.find(Popup).props().isOpen).toBeTruthy()

    expect(setTimeout).toHaveBeenCalledTimes(2)
    act(() => {
      jest.runAllTimers()
    })

    wrapper.update()
    expect(wrapper.find(Popup).props().isOpen).toBeFalsy()
  })
})