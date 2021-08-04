import React from 'react'
import _ from 'lodash'
import { mount } from 'enzyme'
import {
  cloneWithProps,
  cloneChildrenWithProps
} from 'helpers/node'

describe('cloneWithProps', () => {
  const defaultProps = { a: 999, c: 'false' }
  const newProps = { a: 123, b: 'abc', c: 'true' }
  it('props set', () => {
    const wrapper = mount(<div />)
    const newChild = cloneWithProps(wrapper.get(0), newProps)
    expect(newChild.props).toEqual(newProps)
  })
  it('keep default props', () => {
    const wrapper = mount(<div {...defaultProps} />)
    const newChild = cloneWithProps(wrapper.get(0), newProps)

    const addedKeys = _.filter(Object.keys(newProps), (key) => {
      return !_.has(defaultProps, key)
    })
    const addedProps = _.pick(newProps, addedKeys)

    expect(newChild.props).toMatchObject(defaultProps)
    expect(newChild.props).toMatchObject(addedProps)
  })
  it('replace default props', () => {
    const wrapper = mount(<div {...defaultProps} />)
    const newChild = cloneWithProps(wrapper.get(0), newProps, true)

    const remainKeys = _.filter(Object.keys(defaultProps), (key) => {
      return !_.has(newProps, key)
    })
    const remainProps = _.pick(defaultProps, remainKeys)

    expect(newChild.props).toMatchObject(newProps)
    expect(newChild.props).toMatchObject(remainProps)
  })
})

describe('cloneChildrenWithProps', () => {
  const newProps = { a: 123, b: 'abc', c: 'true' }
  it('set children props', () => {
    const wrapper = mount(
      <div>
        <div id="child1" />
        <div id="child2" />
        <div id="child3" />
      </div>
    ) 
    const newChildren = cloneChildrenWithProps(wrapper.props().children, newProps)
    
    expect(newChildren).toHaveLength(wrapper.props().children.length)
    _.each(newChildren, (child) => {
      expect(child.props).toMatchObject(newProps)
    })
  })
})
