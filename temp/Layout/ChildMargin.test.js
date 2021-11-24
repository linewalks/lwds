import React from 'react'
import each from 'jest-each'
import renderer from 'react-test-renderer'
import { mount, shallow } from 'enzyme'
import 'jest-styled-components'

import ChildMargin from '@components/Layout/ChildMargin'

describe('vertical', () => {
  each([
    4,
    8,
    16
  ]).it('%d margin',  (margin) => {
    const tree = renderer.create(
      <ChildMargin orientation="vertical" margin={margin}>
        <div>child</div>
        <div>child</div>
        <div>child</div>
      </ChildMargin>
    ).toJSON()

    expect(tree).toHaveStyleRule('flex-direction', 'column')
    expect(tree).toMatchSnapshot()
  })
})

describe('horizontal', () => {
  each([
    4,
    8,
    16
  ]).it('%d margin',  (margin) => {
    const tree = renderer.create(
      <ChildMargin orientation="horizontal" margin={margin}>
        <div>child</div>
        <div>child</div>
        <div>child</div>
      </ChildMargin>
    ).toJSON()

    expect(tree).toHaveStyleRule('flex-direction', 'row')
    expect(tree).toMatchSnapshot()
  })
})
