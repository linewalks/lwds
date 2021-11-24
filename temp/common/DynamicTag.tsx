import React from 'react'

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
export type Prefer<P, T> = P & Omit<T, keyof P>
export type ElementPropsWithoutRef<T extends React.ReactType> = Pick<
  React.ComponentPropsWithoutRef<T>,
  keyof React.ComponentPropsWithoutRef<T>
>
export type OverwritableType<OwnProps, Type extends React.ReactType> = Prefer<
  OwnProps,
  ElementPropsWithoutRef<Type>
>
interface IProps<T> {
  as: T
}

const DynamicTag = (
  { as, ...rest }: OverwritableType<IProps<T>, T>,
  ref: React.RefObject<any>,
) => {
  const ElementType: React.ElementType = as
  return <ElementType {...rest} ref={ref} />
}

export default DynamicTag
