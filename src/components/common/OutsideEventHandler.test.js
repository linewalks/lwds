import React from 'react'
import { mount } from 'enzyme'

import OutsideEventHandler from '@components/common/OutsideEventHandler'

describe('outside event', () => {
  let events = {}
  const handleClick = jest.fn()
  const handleWheel = jest.fn()
  let wrapper
  beforeEach(() => {
    jest.clearAllMocks()

    events = {}
		document.addEventListener = jest.fn((event, callback) => {
      events[event] = callback;
    })
    document.removeEventListener = jest.fn((event) => {
      delete events[event]
    })

    wrapper = mount(
      <div>
        <div id="outsideDiv" />
        <OutsideEventHandler
          onClick={handleClick}
          onWheel={handleWheel}
        >
          <div id="insideDiv" />
        </OutsideEventHandler>
      </div>
    )
  })
  it('onClick outside', () => {
    wrapper.find('#outsideDiv').simulate('click')
    events.click({ target: wrapper.find('#outsideDiv').getDOMNode() })
    expect(handleClick).toHaveBeenCalled()
  })
  it('onClick inside', () => {
    wrapper.find('#insideDiv').simulate('click')
    events.click({ target: wrapper.find('#insideDiv').getDOMNode() })
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('onWheel outside', () => {
    wrapper.find('#outsideDiv').simulate('wheel')
    events.wheel({ target: wrapper.find('#outsideDiv').getDOMNode() })
    expect(handleWheel).toHaveBeenCalled()
  })
  it('onWheel inside', () => {
    wrapper.find('#insideDiv').simulate('wheel')
    events.wheel({ target: wrapper.find('#insideDiv').getDOMNode() })
    expect(handleWheel).not.toHaveBeenCalled()
  })

  it('cleanup', () => {
    wrapper.unmount()
    expect(Object.keys(events)).toHaveLength(0)
  })
})
