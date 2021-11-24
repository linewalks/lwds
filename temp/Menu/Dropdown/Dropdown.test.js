import React from 'react'
import each from 'jest-each'
import { mount } from 'enzyme'

import Dropdown from '@components/Menu/Dropdown/Dropdown'
import DropdownItem from '@components/Menu/Dropdown/Item'
import DropdownDivider from '@components/Menu/Dropdown/Divider'
import cls from '@helpers/class'

describe('size', () => {
  each([
    'lg',
    'md'
  ]).it('%s', (size) => {
    const wrapper = mount(
      <Dropdown size={size}>
        <DropdownItem>item</DropdownItem>
        <DropdownDivider />
        <DropdownItem>item</DropdownItem>
      </Dropdown>
    )
    expect(wrapper.find(`.${cls('dropdown', size)}`)).toHaveLength(1)
    expect(wrapper.find(`.${cls('dropdown', 'item', size)}`)).toHaveLength(2)
  })
})

describe('item click', () => {
  it('button click', () => {
    const handleClick = jest.fn()
    const wrapper = mount(
      <Dropdown>
        <DropdownItem isButton onClick={handleClick}>item</DropdownItem>
      </Dropdown>
    )
    wrapper.find(DropdownItem).simulate('click')
    expect(handleClick).toHaveBeenCalled()
  })
})

describe('bold', () => {
  it('not bold', () => {
    const wrapper = mount(
      <Dropdown>
        <DropdownItem>item</DropdownItem>
      </Dropdown>
    )
    expect(wrapper.find(DropdownItem).childAt(0).props().style.fontWeight).toBe('normal')
  })
  it('bold', () => {
    const wrapper = mount(
      <Dropdown>
        <DropdownItem bold>item</DropdownItem>
      </Dropdown>
    )
    expect(wrapper.find(DropdownItem).childAt(0).props().style.fontWeight).toBe('bold')
  })
})

describe('item with image', () => {
  it('start image', () => {
    const wrapper = mount(
      <Dropdown>
        <DropdownItem
          startImgSrc="/svg/some"
        >
          item
        </DropdownItem>
      </Dropdown>
    )
    expect(wrapper.find('img')).toHaveLength(1)
  })
  it('end image', () => {
    const wrapper = mount(
      <Dropdown>
        <DropdownItem
          endImgSrc="/svg/some"
        >
          item
        </DropdownItem>
      </Dropdown>
    )
    expect(wrapper.find('img')).toHaveLength(1)
  })
  it('both image', () => {
    const wrapper = mount(
      <Dropdown>
        <DropdownItem
          startImgSrc="/svg/some"
          endImgSrc="/svg/some"
        >
          item
        </DropdownItem>
      </Dropdown>
    )
    expect(wrapper.find('img')).toHaveLength(2)
  })
})
