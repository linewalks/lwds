import React from 'react'
import { screen } from '@testing-library/dom'
import { cleanup, fireEvent, render } from '@testing-library/react'

import Button from '@components/Button/Button'
import Dropdown from '@components/Dropdown/Dropdown'
import { PencilIcon, TrashIcon } from '@components/Icon/Icons/Action'

import cls from '@helpers/class'

const menuData = [
  { label: 'Edit', id: 'edit', icon: <PencilIcon /> },
  {
    label: 'Duplicate',
    id: 'duplicate',
    desc: 'duplicate',
  },
  { label: 'Disabled', id: 'disabled' },
  { label: 'Delete', id: 'delete', type: 'danger', icon: <TrashIcon /> },
]

const onClickMock = jest.fn()
const onOpenMock = jest.fn()
const onCloseMock = jest.fn()

const setup = (props) => {
  return render(
    <Dropdown isOpen {...props}>
      {menuData.map((menuProps, idx) => (
        <Dropdown.Item
          key={`dropdown__item__${idx}`}
          onClick={onClickMock}
          {...menuProps}
        />
      ))}
    </Dropdown>,
  )
}

describe.skip('Dropdown test', () => {
  it('isOpen test', () => {
    render(<Dropdown />)

    expect(screen.queryByRole('dropdown-menu-list')).toBeNull()
  })

  it.each(['md', 'lg'])('size(%s) test', (size) => {
    setup({ size })

    const fontClass = {
      md: 'body_02_r',
      lg: 'body_04_r',
    }
    const dropdownMenuList = screen.getByRole('dropdown-menu-list')

    expect(dropdownMenuList).toHaveClass(cls('dropdown', size))
    expect(dropdownMenuList).toHaveClass(fontClass[size])
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

  it.each(['left', 'center', 'right'])('placement(%s) test', (placement) => {
    setup({ placement })

    expect(screen.getByRole('dropdown-menu-list')).toHaveClass(
      cls('dropdown', placement),
    )
  })

  it('scrollable test', () => {
    setup({ scrollable: true })

    expect(screen.getByRole('dropdown-menu-list')).toHaveClass(
      cls('dropdown', 'scrollable'),
    )
  })

  describe('props validate check', () => {
    it('wrong size props', () => {
      setup({ size: 'xl' })

      expect(screen.getByRole('dropdown-menu-list')).toHaveClass(
        cls('dropdown', 'md'),
      )
    })

    it('wrong placement props', () => {
      setup({ placement: 'bottom' })

      expect(screen.getByRole('dropdown-menu-list')).toHaveClass(
        cls('dropdown', 'left'),
      )
    })
  })
})

describe.skip('Dropdown item test', () => {
  it('desc test', () => {
    render(
      <Dropdown isOpen>
        <Dropdown.Item label="Edit" id="edit" desc="edit" />
        <Dropdown.Item label="Duplicate" id="duplicate" />
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
        <Dropdown.Item label="Edit" id="edit" />
        <Dropdown.Item label="Delete" id="delete" type={type} />
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
        <Dropdown.Item label="Edit" id="edit" />
        <Dropdown.Item label="Delete" id="delete" disabled />
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

describe.skip('Dropdown click event test', () => {
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
        <Dropdown.Item label="disabled" id="disabled" disabled />
      </Dropdown>,
    )

    fireEvent.click(screen.getByRole('dropdown-menu'))
    expect(onClickMock).not.toHaveBeenCalled()
  })
})

describe.skip('Dropdown open, close test', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('auto open test', () => {
    render(
      <Dropdown triggerNode={<Button role="trigger-button">Open</Button>}>
        <Dropdown.Item label="Edit" id="edit" />
        <Dropdown.Item label="Delete" id="delete" />
      </Dropdown>,
    )

    expect(screen.queryByRole('dropdown-menu-list')).toBeNull()
    fireEvent.click(screen.getByRole('trigger-button'))
    expect(screen.getByRole('dropdown-menu-list')).toBeInTheDocument()
  })

  it('auto close test', () => {
    render(
      <Dropdown triggerNode={<Button role="trigger-button">Open</Button>}>
        <Dropdown.Item label="Edit" id="edit" />
        <Dropdown.Item label="Delete" id="delete" />
      </Dropdown>,
    )

    fireEvent.click(screen.getByRole('trigger-button'))
    expect(screen.getByRole('dropdown-menu-list')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Edit'))
    expect(screen.queryByRole('dropdown-menu-list')).toBeNull()
  })

  it('custom open test', () => {
    render(
      <Dropdown
        triggerNode={
          <Button role="trigger-button" onClick={onOpenMock}>
            Custom Open
          </Button>
        }
      >
        <Dropdown.Item label="Edit" id="edit" />
        <Dropdown.Item label="Delete" id="delete" />
      </Dropdown>,
    )

    fireEvent.click(screen.getByRole('trigger-button'))
    expect(onOpenMock).toHaveBeenCalled()
  })

  it('custom close test', () => {
    render(
      <>
        <Button role="dropdown-outside">Dummy Button</Button>
        <Dropdown
          isOpen
          triggerNode={<Button>Custom Close</Button>}
          onClose={onCloseMock}
        >
          <Dropdown.Item label="Edit" id="edit" />
          <Dropdown.Item label="Delete" id="delete" />
        </Dropdown>
        ,
      </>,
    )

    fireEvent.click(screen.getByText('Edit'))
    expect(onCloseMock).toHaveBeenCalled()
  })
})

describe('Dropdown divider test', () => {
  it('dropdown divider render', () => {
    render(
      <Dropdown isOpen>
        <Dropdown.Item label="Edit" id="edit" />
        <Dropdown.Divider />
        <Dropdown.Item label="Delete" id="delete" />
      </Dropdown>,
    )

    expect(screen.getByRole('dropdown-menu-divider')).toHaveClass(
      cls('dropdown', 'divider'),
    )
  })
})
