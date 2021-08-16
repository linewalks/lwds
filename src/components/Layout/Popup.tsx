import React from 'react'
import styled from 'styled-components'

import OutsideEventHandler from '@components/common/OutsideEventHandler'

const WrapperPopup = styled.div`
  position: absolute;
`

interface PopupProps {
  isOpen: boolean
  anchorRef: React.RefObject<any>
  offsetTop: number
  offsetLeft: number
  children: React.ReactNode
  onClose: () => void
}

const Popup = (props: PopupProps) => {
  const {
    isOpen,
    anchorRef,
    offsetTop,
    offsetLeft,
    children,
    onClose
  } = props

  const getPosition = () => {
    const left = anchorRef?.current?.offsetLeft || 0
    const top = anchorRef?.current?.offsetTop || 0

    return {
      left: left + offsetLeft,
      top: top + offsetTop
    }
  }

  return (
    <>
      {isOpen ? (
        <OutsideEventHandler
          onClick={onClose}
        >
          <WrapperPopup
            style={
              getPosition()
            }
          >
            {children}
          </WrapperPopup>
        </OutsideEventHandler>
      ) : null}
    </>
  )
}

Popup.defaultProps = {
  isOpen: false,
  offsetTop: 0,
  offsetLeft: 0
} 
export default Popup
