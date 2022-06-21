import React, { createContext, useRef, useState, useContext } from 'react'
import _ from 'lodash'
import clsx from 'clsx'

import cls from '@helpers/class'
import useIsomorphicLayoutEffect from '@helpers/useIsomorphicLayoutEffect'

import '@components/Tabs/Tabs.scss'
import { ChevronIcon } from '@components/Icon/Icons/Navigation'

import {
  SCROLL_BUTTON_OFFSET,
  SCROLL_TYPES,
  SCROLL_DEFAULT_SPEED,
  SCROLL_BUTTON_WIDTH,
} from './constants'

type TSizeType = 'md' | 'lg'
type TVariantType = 'primary' | 'danger' | 'default'
type TTabContext = number
type TTabPanelContext = number

interface ITabsContext {
  _size: TSizeType
  _index: number
  _variant: TVariantType
  _tickSpeed: number
  _noIndicator: boolean
  _onChange: Function
}

interface ITabsProps {
  selectedIndex?: number
  size?: TSizeType
  variant?: TVariantType
  tickSpeed?: number
  noIndicator?: boolean
  className?: string
  onChange?: Function
  children?: React.ReactNode
}

interface ITabListProps {
  className?: string
  noBorder?: boolean
  children?: React.ReactNode
}

// handle the over all state of Tabs
const TabsContext = createContext<ITabsContext>(null)

// handle index of Tab
const TabContext = createContext<TTabContext>(null)

// handle index of TabPanel
const TabPanelContext = createContext<TTabPanelContext>(null)

export default function Tabs({
  selectedIndex = 0,
  size = 'md',
  variant = 'primary',
  tickSpeed = SCROLL_DEFAULT_SPEED,
  noIndicator = false,
  className,
  onChange,
  children,
  ...rest
}: ITabsProps) {
  const [_index, setIndex] = useState<number>(selectedIndex)
  const _onChange = (_newIndex) => {
    setIndex(_newIndex)
    onChange && onChange(_newIndex)
  }

  useIsomorphicLayoutEffect(() => {
    if (typeof selectedIndex === 'number') {
      setIndex(selectedIndex)
    } else {
      console.error('SelectedIndex must is number.')
    }
  }, [selectedIndex])

  const value: ITabsContext = {
    _size: size,
    _index,
    _variant: variant,
    _tickSpeed: !isNaN(tickSpeed)
      ? _.floor(tickSpeed) // tickSpeed 만약 floating number 일 경우 대비 내림 처리
      : SCROLL_DEFAULT_SPEED,
    _noIndicator: noIndicator,
    _onChange,
  }

  return (
    <TabsContext.Provider value={value}>
      <section
        role="tabs"
        className={clsx(cls('tabs'), cls('tabs', 'container'), className)}
        {...rest}
      >
        {children}
      </section>
    </TabsContext.Provider>
  )
}

export function TabList({
  noBorder,
  className,
  children,
  ...rest
}: ITabListProps) {
  const [isScrollable, setScrollable] = useState(false)
  const [curPosX, setCurPosX] = useState<number>(null)
  const [maxPosX, setMaxPosX] = useState<number>(null)
  const [offsetX, setOffsetX] = useState<number>(null)
  const listRef = useRef(null)

  const handleScroll = _.debounce((e) => {
    setCurPosX(e.target.scrollLeft)
  }, 100)

  useIsomorphicLayoutEffect(() => {
    // 초기 페이지 로드 후 scroll 이 노출되는 형태인지를 구분
    const tabList = listRef.current!

    // tabList의 clientWidth(실제 노출되는 영역 Width) 가 scrollWidth(스크롤이 적용될 영역 width) 보다 작을 경우 scroll 에 대한 로직이 동작
    if (tabList.clientWidth < tabList.scrollWidth) {
      setScrollable(true)
      setCurPosX(0)
      setMaxPosX(tabList.scrollWidth - tabList.offsetWidth) // 현재 스크롤 가능한 최대 offset
      listRef.current.addEventListener('scroll', handleScroll)
    }
    return () => {
      listRef.current.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useIsomorphicLayoutEffect(() => {
    // 특정 동작을 통해서 scroll 이 변화해야할 경우
    // 탭의 클릭 또는 NEXT, PREV 버튼의 클릭 등
    if (!_.isNil(offsetX)) {
      listRef.current?.scrollTo &&
        listRef.current.scrollTo({ left: offsetX, behavior: 'smooth' })
    }
  }, [offsetX])

  const { _index, _tickSpeed, _variant } = useContext(TabsContext)

  useIsomorphicLayoutEffect(() => {
    if (_index === 0) {
      // 처음 탭 선택
      setOffsetX(0)
      return
    }

    const childNodes = listRef.current.childNodes!
    if (_index === childNodes.length - 1) {
      // 마지막 탭 선택
      setOffsetX(maxPosX)
      return
    }

    const selectedTab = listRef.current.childNodes[_index]!
    if (!selectedTab) {
      // 방어 로직
      return
    }

    const tabList = listRef.current!
    const { clientWidth } = tabList

    const selectedTabOffsetLeft = selectedTab.offsetLeft
    const tabWidth = selectedTab.clientWidth

    // 탭의 위치가 현재 사용자가 보고 있는 clientWidth 안에 갇혀있다면, 굳이 이동할 필요가 없다.
    if (
      curPosX + SCROLL_BUTTON_WIDTH < selectedTabOffsetLeft &&
      selectedTabOffsetLeft + tabWidth <
        curPosX + clientWidth - SCROLL_BUTTON_WIDTH
    ) {
      return
    }

    // 1.5 보정은 선택 된 탭의 좌우의 추가로 선택할 항목이 있을때 살짝 보여지게 만드려는 의도
    const fixOffsetX = selectedTabOffsetLeft - tabWidth * 1.5
    setOffsetX(fixOffsetX)
  }, [_index])

  const handleClickScrollButton = (type) => {
    const tickOffsetX = maxPosX / _tickSpeed

    switch (type) {
      case SCROLL_TYPES.NEXT:
        setOffsetX(_.min([curPosX + tickOffsetX, maxPosX]))
        break
      case SCROLL_TYPES.PREV:
        setOffsetX(_.max([curPosX - tickOffsetX, 0]))
        break
    }
  }

  return (
    <div
      role="tab-list"
      className={clsx(
        cls('tabs', 'tablist'),
        noBorder && cls('tabs', 'tablist', 'no-border'),
        cls('tabs', 'tablist', _variant),
        className,
      )}
      {...rest}
    >
      <div
        role="scrollbutton"
        className={clsx(
          cls('tabs', 'scroll'),
          cls('tabs', 'scroll', 'left'),
          (!isScrollable || curPosX <= SCROLL_BUTTON_OFFSET) &&
            cls('tabs', 'scroll', 'hidden'),
        )}
      >
        <button
          className={clsx(
            cls('tabs', 'scroll', 'button'),
            cls('tabs', 'scroll', 'button', 'left'),
          )}
          onClick={() => handleClickScrollButton(SCROLL_TYPES.PREV)}
        >
          <ChevronIcon direction="left" width={24} height={24} />
        </button>
      </div>
      <div className={cls('tabs', 'tablist', 'wrapper')} ref={listRef}>
        {React.Children.map(children, (child, index) => {
          const key = `Tabs__Tab__${index}`
          return (
            <React.Fragment key={key}>
              <TabContext.Provider value={index}>{child}</TabContext.Provider>
            </React.Fragment>
          )
        })}
      </div>
      <div
        role="scrollbutton"
        className={clsx(
          cls('tabs', 'scroll'),
          cls('tabs', 'scroll', 'right'),
          (!isScrollable || maxPosX - SCROLL_BUTTON_OFFSET <= curPosX) &&
            cls('tabs', 'scroll', 'hidden'),
        )}
      >
        <button
          className={clsx(
            cls('tabs', 'scroll', 'button'),
            cls('tabs', 'scroll', 'button', 'right'),
          )}
          onClick={() => handleClickScrollButton(SCROLL_TYPES.NEXT)}
        >
          <ChevronIcon direction="right" width={24} height={24} />
        </button>
      </div>
    </div>
  )
}

export function Tab({ className, disabled, children, ...rest }) {
  const { _index, _onChange, _size, _noIndicator } = useContext(TabsContext)
  const tabIndex = useContext(TabContext)
  const [isSelected, setSelected] = useState<boolean>(false)

  useIsomorphicLayoutEffect(() => {
    !disabled && setSelected(_index === tabIndex)
  }, [_index])

  const handleTabClick = () => _onChange(tabIndex)

  return (
    <div
      role="tab"
      className={clsx(cls('tabs', 'tab', 'wrapper'), className)}
      {...rest}
    >
      <button
        className={clsx(
          cls('tabs', 'tab'),
          cls('tabs', 'tab', _size),
          isSelected && cls('tabs', 'tab', 'selected'),
          disabled && cls('tabs', 'tab', 'disabled'),
        )}
        onClick={handleTabClick}
        disabled={disabled}
      >
        {children}
      </button>
      {!_noIndicator && isSelected && <TabIndicator />}
    </div>
  )
}

function TabIndicator() {
  return (
    <div role="select-indicator" className={cls('tabs', 'tab', 'indicator')} />
  )
}

export function TabPanels({ className, children, ...rest }) {
  return (
    <section
      role="tab-panels"
      className={clsx(cls('tabs', 'panel', 'wrapper'), className)}
      {...rest}
    >
      {React.Children.map(children, (child, index) => {
        const key = `Tabs__TabPanel__${index}`
        return (
          <React.Fragment key={key}>
            <TabPanelContext.Provider value={index}>
              {child}
            </TabPanelContext.Provider>
          </React.Fragment>
        )
      })}
    </section>
  )
}

export function TabPanel({ className, children, ...rest }) {
  const { _index } = useContext(TabsContext)
  const tabIndex = useContext(TabPanelContext)
  const [isSelected, setSelected] = useState<boolean>(false)

  useIsomorphicLayoutEffect(() => {
    setSelected(_index === tabIndex)
  }, [_index])

  return (
    <article
      role="tab-panel"
      className={clsx(
        cls('tabs', 'panel'),
        isSelected && cls('tabs', 'panel', 'selected'),
        className,
      )}
      {...rest}
    >
      {children}
    </article>
  )
}
