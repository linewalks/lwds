import React from 'react'
import { screen } from '@testing-library/dom'
import { cleanup, fireEvent, render } from '@testing-library/react'

import cls from '@helpers/class'

import Tabs, { TabList, Tab, TabPanels, TabPanel } from '@components/Tabs/Tabs'

window.scrollTo = jest.fn()

describe('Tabs', () => {
  const setup = (options) => {
    const { container, getByRole } = render(
      <Tabs {...options}>
        <TabList>
          <Tab>Tab1</Tab>
          <Tab>Tab2</Tab>
          <Tab>Tab3</Tab>
          <Tab disabled>Tab4</Tab>
        </TabList>
        <TabPanels style={{ marginTop: 20 }}>
          <TabPanel>Tab1 Content</TabPanel>
          <TabPanel>Tab2 Content</TabPanel>
          <TabPanel>Tab3 Content</TabPanel>
          <TabPanel>Tab4 Content</TabPanel>
        </TabPanels>
      </Tabs>,
    )

    const tabList = screen.getByRole('tab-list')
    const tabPanels = screen.getByRole('tab-panels')

    return {
      container,
      tabList,
      tabPanels,
      getByRole,
    }
  }

  beforeEach(() => {})

  afterEach(() => {
    cleanup()
  })

  it('default', () => {
    // 정상적으로 그려지는지 1차 테스트
    setup()
    expect(screen.getAllByRole('tab')).toHaveLength(4)
    expect(screen.getAllByRole('tab-panel')).toHaveLength(4)
  })

  it('props', () => {
    const spyOnClick = jest.fn()
    setup({
      selectedIndex: 1,
      size: 'lg',
      variant: 'default',
      tickSpeed: 3,
      onChange: spyOnClick,
    })

    // selectedIndex 정상동작하여 두번째 탭을 선택
    expect(screen.getByText('Tab2')).toHaveClass(cls('tabs', 'tab', 'selected'))
    expect(spyOnClick).toHaveBeenCalledTimes(0)
    fireEvent.click(screen.getByText('Tab1')) // 첫번째 탭 선택

    // 두번째 탭의 selected 가 풀리고, 첫번째 탭에 적용 됨
    expect(screen.getByText('Tab2')).not.toHaveClass(
      cls('tabs', 'tab', 'selected'),
    )
    expect(screen.getByText('Tab1')).toHaveClass(cls('tabs', 'tab', 'selected'))

    expect(spyOnClick).toHaveBeenCalledTimes(1)

    // 기본은 primary 이나, variant 가 default 이므로 default 클래스를 지님
    expect(screen.getByRole('tab-list')).toHaveClass(
      cls('tabs', 'tablist', 'default'),
    )

    // disabled 된 탭 확인
    expect(screen.getByText('Tab4')).toHaveClass(cls('tabs', 'tab', 'disabled'))
  })
})
