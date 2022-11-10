import { useState } from 'react'
import useIsomorphicLayoutEffect from '@hooks/useIsomorphicLayoutEffect'
import _ from 'lodash'

/**
 * 현재 window 의 정보 리턴
 * @returns { innerWidth, innerHeight, outerWidth, outerHeight }
 */
const useDetectResize = () => {
  const [properties, setProperties] = useState({
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight,
  })

  const _resizeFn = _.debounce(
    (e) =>
      setProperties({
        innerWidth: e.target.innerWidth,
        innerHeight: e.target.innerHeight,
        outerWidth: e.target.outerWidth,
        outerHeight: e.target.outerHeight,
      }),
    300,
    { maxWait: 1000 },
  )

  useIsomorphicLayoutEffect(() => {
    window.addEventListener('resize', _resizeFn)

    return () => {
      window.removeEventListener('resize', _resizeFn)
    }
  }, [])

  return properties
}

export default useDetectResize
