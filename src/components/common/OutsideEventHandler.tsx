import React, { useEffect, useRef } from 'react'

interface OutsideEventHandlerProps {
  children: React.ReactNode,
  onClick?: () => void
  onWheel?: () => void
}

const OutsideEventHandler = (props: OutsideEventHandlerProps) => {
  const {
    children,
    onClick,
    onWheel
  } = props
  const wrapperRef = useRef(null)

  const handleClick = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      onClick && onClick()
    }
  }

  const handleWheel = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      onWheel && onWheel()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)
    document.addEventListener('wheel', handleWheel)
    return () => {
      document.removeEventListener('click', handleClick)
      document.removeEventListener('wheel', handleWheel)
    }
  }, [])
  return <div ref={wrapperRef}>{children}</div>

}

export default OutsideEventHandler
