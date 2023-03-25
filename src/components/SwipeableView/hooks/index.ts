import React, { Ref, useEffect, useState } from 'react'
import { useInput } from '../../../state/hooks'

export const useSwipeController = (
  ref: Ref<HTMLElement>,
  scrollPredicate: (el: HTMLElement) => boolean
) => {
  const { isInputSwiped } = useInput()

  const [isSwipeable, setSwipeable] = useState(false)

  const onScroll = (e: TouchEvent) => {
    setSwipeable(scrollPredicate(e.target))
  }

  useEffect(() => {
    if (!ref.current) {
      return
    }

    setSwipeable(scrollPredicate(ref.current))
    ref.current.addEventListener('scroll', onScroll)

    return ref.current.removeEventListener(ref, onScroll)
  }, [ref, isInputSwiped])

  return [isSwipeable]
}
