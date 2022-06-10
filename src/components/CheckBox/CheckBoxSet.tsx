import React, { useState } from 'react'
import _ from 'lodash'
import clsx from 'clsx'

import '@components/CheckBox/CheckBox.scss'

import cls from '@helpers/class'

import CheckBox from '@components/CheckBox/CheckBox'

interface CheckBoxItemList {
  id: string
  text: string
  number?: number
  defaultChecked: boolean
}

interface CheckBoxSetProps {
  color: 'primary' | 'black'
  defaultChecked: boolean
  disabled: boolean
  itemList: Array<CheckBoxItemList>
  size: 'sm' | 'md'
  style?: object
  text: string
  onChange: (id: string, checked: boolean) => void
}

const CheckBoxSet = ({
  color = 'primary',
  disabled = false,
  itemList = [
    { id: 'test', text: 'text', defaultChecked: true },
    { id: 'test2', text: 'text2', defaultChecked: true },
    { id: 'test3', text: 'text3', defaultChecked: true },
  ],
  size = 'md',
  style,
  text = '123213',
  onChange = (id, checked) => console.log(),
}: CheckBoxSetProps) => {
  // 좋은 방법있으면 공모받습니다.
  // 자식 state에 따라서 모체 state가 변해야하는 상황
  // 자식 state가 모체에서 뿌려지는게 아니기에 모체가 알 수 없음
  // 모체에서 자체 state를 만들어서 관리해야 함
  // 별도 stateList를 만들 시에 매번 이벤트가 일어날 때마다
  // 해당 list를 업데이트하고 list를 완탐하며 type을 추출해야함
  // count 방식으로 보다 심플하게 우회
  const [checkedCount, setCheckedCount] = useState(
    _.reduce(itemList, (acc, cur) => (cur.defaultChecked ? acc + 1 : acc), 0),
  )

  const handleContainerCheckBox = (id, checked) => {
    setCheckedCount(checked ? itemList.length : 0)
    _.forEach(itemList, (item) => {
      onChange(item.id, checked)
    })
  }

  const handleOnChange = (id, checked) => {
    onChange(id, checked)
    setCheckedCount((checkedCount) =>
      checked ? checkedCount + 1 : checkedCount - 1,
    )
  }

  return (
    <div
      className={clsx(
        cls('checkboxset', 'container'),
        cls('checkboxset', size),
      )}
    >
      <CheckBox
        color={color}
        defaultChecked={checkedCount ? true : false}
        disabled={disabled}
        mixed={checkedCount !== 0 && checkedCount !== itemList.length}
        size={size}
        style={style}
        text={text}
        onChange={handleContainerCheckBox}
      />
      {_.map(itemList, ({ id, text, number, defaultChecked }, idx) => {
        return (
          <CheckBox
            key={`CheckBox__${idx}`}
            color={color}
            containerChecked={
              checkedCount === 0
                ? false
                : checkedCount === itemList.length
                ? true
                : null
            }
            defaultChecked={defaultChecked}
            disabled={disabled}
            id={id}
            number={number}
            size={size}
            style={style}
            text={text}
            onChange={handleOnChange}
          />
        )
      })}
    </div>
  )
}

export default CheckBoxSet
