import React, {
  createContext,
  useState,
  useContext,
  useMemo,
  useCallback,
  useEffect,
} from 'react'
import _ from 'lodash'
import clsx from 'clsx'

import cls from '@helpers/class'

import '@components/Tabs/Tabs.scss'

type SizeType = 'md' | 'lg'

interface TabsProps {
  defaultIndex?: number
  selectedIndex?: number
  size?: SizeType
  className?: string
  onChange?: Function
  children?: React.ReactChildren
}

// handle the over all state of Tabs
const TabsContext = createContext(null)

// handle simple index of Tab
const TabContext = createContext(null)

// handle simple index of TabPanel
const TabPanelContext = createContext(null)

export default function Tabs({
  defaultIndex,
  selectedIndex,
  size = 'md',
  className,
  onChange,
  children,
}: TabsProps) {
  const [_index, setIndex] = useState(
    _.isNil(selectedIndex) ? defaultIndex : selectedIndex,
  )
  const _onChange = (_newIndex) => {
    console.log(_newIndex)
    setIndex(_newIndex)
    onChange && onChange(_newIndex)
  }

  useEffect(() => {
    if (typeof selectedIndex === 'number') {
      setIndex(selectedIndex)
    }
  }, [selectedIndex])

  const value = useMemo(
    () => ({
      size,
      _index,
      _onChange,
    }),
    [defaultIndex, selectedIndex, _index, size],
  )
  return (
    <TabsContext.Provider value={value}>
      <section className={clsx(cls('tabs', 'container'), className)}>
        {children}
      </section>
    </TabsContext.Provider>
  )
}

export function TabList({ children }) {
  const { size } = useContext(TabsContext)
  return (
    <ul className={clsx(cls('tabs', 'tablist'), cls('tabs', 'tablist', size))}>
      {children.map((child, index) => {
        const key = `Tabs__Tab__${index}`
        return (
          <React.Fragment key={key}>
            <TabContext.Provider value={index}>{child}</TabContext.Provider>
          </React.Fragment>
        )
      })}
    </ul>
  )
}

export function Tab({ className, label, ...rest }) {
  const { _index, _onChange } = useContext(TabsContext)
  const tabIndex = useContext(TabContext)
  const [isSelected, setSelected] = useState(false)

  useEffect(() => {
    setSelected(_index === tabIndex)
  }, [_index])

  const handleTabClick = () => _onChange(tabIndex)

  return (
    <li {...rest}>
      <button
        className={clsx(
          cls('tabs', 'tab'),
          isSelected && cls('tabs', 'tab', 'selected'),
        )}
        onClick={handleTabClick}
      >
        {label}
      </button>
      {isSelected && <TabIndicator />}
    </li>
  )
}

function TabIndicator() {
  return <div className={clsx(cls('tabs', 'tab', 'indicator'))} />
}

export function TabPanels({ className, children, ...rest }) {
  return (
    <section {...rest} className={clsx(className)}>
      {children.map((child, index) => {
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
  const [isSelected, setSelected] = useState(false)

  useEffect(() => {
    setSelected(_index === tabIndex)
  }, [_index])

  return (
    <article
      {...rest}
      className={clsx(
        cls('tabs', 'panel'),
        isSelected && cls('tabs', 'panel', 'selected'),
        className,
      )}
    >
      {children}
    </article>
  )
}

export function TabBadge({ className, label, ...rest }) {}
