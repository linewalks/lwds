import React from 'react'
import { screen } from '@testing-library/dom'
import { cleanup, fireEvent, render } from '@testing-library/react'

import Dropdown from '@components/Dropdown/Dropdown'
import { PencilIcon, TrashIcon } from '@components/Icon/Icons/Action'

import cls from '@helpers/class'

const menuData = [
  { id: 'edit', option: 'Edit', icon: <PencilIcon /> },
  {
    id: 'duplicate',
    option: 'Duplicate',
    desc: 'duplicate',
  },
  { id: 'disabled', option: 'Disabled' },
  { id: 'delete', option: 'Delete', type: 'danger', icon: <TrashIcon /> },
]

const onClickMock = jest.fn()

const setup = (props) => {
  return render(
    <Dropdown isOpen onClick={onClickMock} {...props}>
      {menuData.map((menuProps) => (
        <Dropdown.Item key={`dropdown__item__${menuProps.id}`} {...menuProps} />
      ))}
    </Dropdown>,
  )
}

describe('Dropdown test', () => {
  it('isOpen test', () => {
    render(<Dropdown />)

    expect(screen.queryByRole('dropdown-menu-list')).toBeNull()
  })

  it.each(['md', 'lg'])('size(%s) test', (size) => {
    setup({ size })

    expect(screen.getByRole('dropdown-menu-list')).toHaveClass(
      cls('dropdown', size),
    )
  })

  it('icon test', () => {
    setup({ icon: false })
    expect(screen.getByRole('dropdown-menu-list')).not.toHaveClass(
      cls('dropdown', 'icon', 'list'),
    )

    cleanup()
    setup({ icon: true })
    expect(screen.getByRole('dropdown-menu-list')).toHaveClass(
      cls('dropdown', 'icon', 'list'),
    )
  })

  it.each(['left', 'center', 'right'])('direction(%s) test', (direction) => {
    setup({ direction })

    expect(screen.getByRole('dropdown-menu-list')).toHaveClass(
      cls('dropdown', direction),
    )
  })

  it('scrollable test', () => {
    setup({ scrollable: true })

    expect(screen.getByRole('dropdown-menu-list')).toHaveClass(
      cls('dropdown', 'scrollable'),
    )
  })
})

describe('Dropdown item test', () => {
  it('desc test', () => {
    render(
      <Dropdown isOpen>
        <Dropdown.Item id="edit" option="Edit" desc="edit" />
        <Dropdown.Item id="duplicate" option="Duplicate" />
      </Dropdown>,
    )

    expect(screen.getAllByRole('dropdown-menu')[0]).toHaveClass(
      cls('dropdown', 'multiLine', 'menu'),
    )
    expect(screen.getAllByRole('dropdown-menu')[1]).toHaveClass(
      cls('dropdown', 'singleLine', 'menu'),
    )
  })

  it('type test', () => {
    const type = 'danger'

    render(
      <Dropdown isOpen>
        <Dropdown.Item id="edit" option="Edit" />
        <Dropdown.Item id="delete" option="Delete" type={type} />
      </Dropdown>,
    )

    expect(screen.getAllByRole('dropdown-menu')[0]).not.toHaveClass(
      cls('dropdown', 'menu', type),
    )
    expect(screen.getAllByRole('dropdown-menu')[1]).toHaveClass(
      cls('dropdown', 'menu', type),
    )
  })

  it('disabled test', () => {
    render(
      <Dropdown isOpen>
        <Dropdown.Item id="edit" option="Edit" />
        <Dropdown.Item id="delete" option="Delete" disabled />
      </Dropdown>,
    )

    expect(screen.getAllByRole('dropdown-menu')[0]).not.toHaveClass(
      cls('dropdown', 'menu', 'disabled'),
    )
    expect(screen.getAllByRole('dropdown-menu')[1]).toHaveClass(
      cls('dropdown', 'menu', 'disabled'),
    )
  })
})

describe('Dropdown click event test', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('click event test', () => {
    const idx = 1

    setup()

    fireEvent.click(screen.getAllByRole('dropdown-menu')[idx])
    expect(onClickMock).toHaveBeenCalledWith(menuData[idx].id)
  })

  it('disabled item event test', () => {
    render(
      <Dropdown isOpen onClick={onClickMock}>
        <Dropdown.Item id="disabled" option="disabled" disabled />
      </Dropdown>,
    )

    fireEvent.click(screen.getByRole('dropdown-menu'))
    expect(onClickMock).not.toHaveBeenCalled()
  })
})

describe('Dropdown divider test', () => {
  it('dropdown divider render', () => {
    render(
      <Dropdown isOpen>
        <Dropdown.Item id="edit" option="Edit" />
        <Dropdown.Divider />
        <Dropdown.Item id="delete" option="Delete" />
      </Dropdown>,
    )

    expect(screen.getByRole('dropdown-menu-divider')).toHaveClass(
      cls('dropdown', 'divider'),
    )
  })
})
