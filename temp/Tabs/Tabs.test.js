import React from 'react'
import _ from 'lodash'
import { mount } from 'enzyme'

import Tab from '@components/Tabs/Tab'
import TabPanel from '@components/Tabs/TabPanel'
import TabPanels from '@components/Tabs/TabPanels'
import Tabs from '@components/Tabs/Tabs'
import cls from '@helpers/class'

describe('only tabs', () => {
  const numberOfTabs = 3
  const wrapper = mount(
    <Tabs>
      {_.map(_.range(numberOfTabs), (i) => 
        <Tab key={i}>Tab {i}</Tab>
      )}
    </Tabs>
  )
  it('index 0 tab is active by default', () => {
    _.each(_.range(numberOfTabs), (i) => {
      expect(wrapper.find(Tab).at(i).props().active).toBe(i === 0)
    })
  })
  it('click and active tab change', () => {
    const clickIndex = 1
    wrapper.find(Tab).at(clickIndex).simulate('click')
    wrapper.update()
    _.each(_.range(numberOfTabs), (i) => {
      expect(wrapper.find(Tab).at(i).props().active).toBe(i === clickIndex)
    })
  })
  it('click and onChange call', () => {
    const clickIndex = 1
    const handleChange = jest.fn()
    wrapper.setProps({ onChange: handleChange })

    wrapper.find(Tab).at(clickIndex).simulate('click')
    wrapper.update()
    expect(handleChange).toHaveBeenCalledWith(clickIndex)
  })
  it('set active index in props', () => {
    const activeIndex = 2
    wrapper.setProps({ activeIndex })
    wrapper.update()
    _.each(_.range(numberOfTabs), (i) => {
      expect(wrapper.find(Tab).at(i).props().active).toBe(i === activeIndex)
    })
  })
})

describe('tab panels', () => {
  const numberOfTabs = 3
  const wrapper = mount(
    <TabPanels
      activeIndex={0}
    >
      {_.map(_.range(numberOfTabs), (i) => 
        <TabPanel
          key={i}
          id={`tabpanel${i}`}
        >Tab {i}</TabPanel>
      )}
    </TabPanels>
  )
  it('only one tab must be active', () => {
    expect(wrapper.find(TabPanel).length).toBe(1)
  })
  it('active index child must be active', () => {
    const activeIndex = 2
    wrapper.setProps({ activeIndex })
    expect(wrapper.find(TabPanel).props().id).toBe(`tabpanel${activeIndex}`)
  })
})