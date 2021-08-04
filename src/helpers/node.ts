import React, {cloneElement } from 'react'

export const cloneWithProps = (
  child: JSX.Element,
  props: object,
  replace: boolean = false
): JSX.Element => {
  const newChildProps = replace ? {
    ...child.props,
    ...props
  } : {
    ...props,
    ...child.props
  }
  return cloneElement(child, newChildProps)
}

export const cloneChildrenWithProps = (
  children: JSX.Element[],
  props: object,
  replace: boolean = false
): JSX.Element[] => {
  return React.Children.map(children, (child: JSX.Element) => {
    return cloneWithProps(child, props, replace)
  })
}
