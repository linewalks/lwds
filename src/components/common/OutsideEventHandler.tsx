import React, { useEffect, useRef } from 'react'

interface OutsideEventHandlerProps {
  children: React.ReactNode,
  onClick?: () => void
  onScroll?: () => void
}

const OutsideEventHandler = (props: OutsideEventHandlerProps) => {
  const {
    children,
    onClick,
    onScroll
  } = props
  const wrapperRef = useRef(null)

  const handleMouseDown = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      onClick && onClick()
    }
  }

  const handleMouseWheel = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      onScroll && onScroll()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mousewheel', handleMouseWheel)
    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mousewheel', handleMouseWheel)
    }
  }, [])
  return <div ref={wrapperRef}>{children}</div>

}

export default OutsideEventHandler
