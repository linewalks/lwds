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

function DynamicTag<T extends React.ElementType = 'button'>({
  as,
  ...rest
}: OverwritableType<IProps<T>, T>) {
  const ElementType: React.ElementType = as
  return <ElementType {...rest} />
}

export default DynamicTag
