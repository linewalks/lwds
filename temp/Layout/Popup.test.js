import React from 'react'
import { mount } from 'enzyme'

import Popup from '@components/Layout/Popup'

describe('without anchorRef', () => {
  it('not open', () => {
    const wrapper = mount(
      <Popup isOpen={false}>
        <div id="children">Hello Children</div>
      </Popup>
    )
    expect(wrapper.find('#children')).toHaveLength(0)
  })
  it('is open', () => {
    const divText = 'Hello Children'
    const wrapper = mount(
      <Popup isOpen>
        <div id="children">{divText}</div>
      </Popup>
    )
    expect(wrapper.find('#children')).toHaveLength(1)
    expect(wrapper.find('#children').text()).toBe(divText)
  })
})

describe('with anchorRef', () => {
  it('not open', () => {
    const ref = React.createRef()
    const wrapper = mount(
      <>
        <Popup
          anchorRef={ref}
          isOpen={false}
        >
          <div id="children">Hello Children</div>
        </Popup>
      </>
    )
    expect(wrapper.find('#children')).toHaveLength(0)
  })
  it('is open', () => {
    const ref = React.createRef()
    const divText = 'Hello Children'
    const wrapper = mount(
      <>
        <div ref={ref} />
        <Popup
          anchorRef={ref}
          isOpen
        >
          <div id="children">{divText}</div>
        </Popup>
      </>
    )
    expect(wrapper.find('#children')).toHaveLength(1)
    expect(wrapper.find('#children').text()).toBe(divText)
  })
})
