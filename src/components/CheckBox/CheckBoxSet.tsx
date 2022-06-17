import React, { useEffect, useState, useMemo } from 'react'
import _ from 'lodash'
import clsx from 'clsx'

import cls from '@helpers/class'

import CheckBox from '@components/CheckBox/CheckBox'

import '@components/CheckBox/CheckBox.scss'

interface CheckList {
  id?: string
  checked?: boolean
  children: React.ReactElement
  defaultChecked?: boolean
}

interface CheckBoxSetProps {
  color?: 'primary' | 'black'
  defaultChecked?: boolean
  disabled?: boolean
  id?: string
  checkList: Array<CheckList>
  style?: object
  children: React.ReactElement
  onChange: (checked: boolean, id: string) => void
}

const CheckBoxSet = ({
  color = 'primary',
  disabled = false,
  id = _.uniqueId('checkBoxSet'),
  checkList,
  style,
  children,
  onChange,
}: CheckBoxSetProps) => {
  const isPropsChecked = useMemo(() => !_.isNil(checkList[0]?.checked), [])
  const [checkedList, setCheckedList] = useState(
    _.map(checkList, (item) => {
      item.checked = item.defaultChecked || item.checked || false
      return item
    }),
  )

  const handleContainerCheckBox = (checked, id) => {
    if (!isPropsChecked) {
      setCheckedList(
        _.reduce(
          checkedList,
          (acc, cur) => {
            acc.push({ ...cur, checked })
            return acc
          },
          [],
        ),
      )
    }
    onChange &&
      _.forEach(checkedList, (item) => {
        onChange(checked, item.id)
      })
  }

  const handleOnChange = (checked, id) => {
    if (!isPropsChecked) {
      const newList = [...checkedList]
      const targetIndex = _.findIndex(checkedList, (item) => item.id === id)
      newList[targetIndex] = { ...newList[targetIndex], checked }
      setCheckedList(newList)
    }
    onChange && onChange(id, checked)
  }

  useEffect(() => {
    if (!_.isEmpty(checkList)) setCheckedList(checkList)
  }, [checkList])

  return (
    <div className={cls('checkboxset')} style={style}>
      <CheckBox
        color={color}
        checked={_.some(checkedList, { checked: true })}
        disabled={disabled}
        id={id}
        mixed={
          !_.every(checkedList, { checked: false }) &&
          !_.every(checkedList, { checked: true })
        }
        onChange={handleContainerCheckBox}
      >
        {children}
      </CheckBox>
      {_.map(checkedList, ({ id, children, checked }, idx) => {
        return (
          <CheckBox
            key={`CheckBox__${idx}`}
            color={color}
            checked={checked}
            disabled={disabled}
            id={id}
            onChange={handleOnChange}
          >
            {children}
          </CheckBox>
        )
      })}
    </div>
  )
}

export default CheckBoxSet
