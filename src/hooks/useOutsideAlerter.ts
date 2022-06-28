import React from 'react'
import useIsomorphicLayoutEffect from '@hooks/useIsomorphicLayoutEffect'

const useOutsideAlerter = (
  ref: React.RefObject<HTMLElement>,
  callback: Function,
) => {
  useIsomorphicLayoutEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback && callback(event)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, callback])
}

export default useOutsideAlerter
