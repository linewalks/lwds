import React, { useRef, useState } from 'react'
import clsx from 'clsx'

import './Tooltip.scss'
import Popup from '@components/Layout/Popup'
import cls from '@helpers/class'

interface TooltipProps {
  content: React.ReactNode
  offsetTop?: number,
  offsetLeft?: number,
  mouseOverDelay: number,
  mouseOutDelay: number,
  children: React.ReactNode
}

const Tooltip = (props: TooltipProps) => {
  const {
    content,
    offsetTop,
    offsetLeft,
    mouseOverDelay,
    mouseOutDelay,
    children
  } = props

  const anchorRef = useRef()

  const [isOverAnchor, setOverAnchor] = useState(false)
  const [isOverPopup, setOverPopup] = useState(false)

  const delayCall = (delay: number, callback: () => void) => {
    setTimeout(callback, delay * 1000)
  }

  const handleOverAnchor = () => {
    delayCall(mouseOverDelay, () => setOverAnchor(true))
  }
  const handleOutAnchor = () => {
    delayCall(mouseOutDelay, () => setOverAnchor(false))
  }
  const handleOverPopup = () => {
    delayCall(mouseOverDelay, () => setOverPopup(true))
  }
  const handleOutPopup = () => {
    delayCall(mouseOutDelay, () => setOverPopup(false))
  }

  return (
    <>
      <div
        ref={anchorRef}
        onMouseOver={handleOverAnchor}
        onMouseOut={handleOutAnchor}
      >
        {children}
      </div>
      <Popup
        isOpen={isOverAnchor || isOverPopup}
        anchorRef={anchorRef}
        offsetTop={offsetTop}
        offsetLeft={offsetLeft}
      >
        <div
          className={clsx(
            cls('tooltip')
          )}
          onMouseOver={handleOverPopup}
          onMouseOut={handleOutPopup}
        >
          {content}
        </div>
      </Popup>
    </>
  )
}

Tooltip.defaultProps = {
  mouseOverDelay: 0.05,
  mouseOutDelay: 0.1,
}

export default Tooltip
