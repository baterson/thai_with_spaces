import React, { useEffect, useRef, useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import { MainInput } from '../MainInput'
import { History } from '../History'
import { DimmedBackground } from './components/DimmedBackground'
import { Drawer } from './components/Drawer'
import { useSwipeController } from './hooks'
import { isBottomScroll, isTopScroll } from './utils'
import { useInput } from '../../state/hooks'

const CONTAINER_HEIGHT = {
  initial: 100,
  swiped: 130,
} as const

type CONTAINER_VALUES = typeof CONTAINER_HEIGHT.initial | typeof CONTAINER_HEIGHT.swiped

export const SwipeableView = () => {
  const inputRef = useRef(null)
  const historyRef = useRef(null)
  const { isInputSwiped, setInputSwiped } = useInput()
  // Height %
  const [containerHeight, setContainerHeight] = useState<CONTAINER_VALUES>(CONTAINER_HEIGHT.initial)

  const [isInputSwipeable] = useSwipeController(inputRef, isTopScroll)
  const [isHistorySwipeable] = useSwipeController(historyRef, isBottomScroll)

  const swipeHandlers = useSwipeable({
    onSwipedDown: (eventData) => {
      if (!isInputSwiped && isInputSwipeable) {
        setInputSwiped(true)
      }
    },
    onSwipedUp: (eventData) => {
      if (isInputSwiped && isHistorySwipeable) {
        setInputSwiped(false)
      }
    },
  })

  useEffect(() => {
    if (isInputSwiped) {
      setContainerHeight(CONTAINER_HEIGHT.swiped)
    } else {
      setContainerHeight(CONTAINER_HEIGHT.initial)
    }
  }, [isInputSwiped])

  return (
    <div
      className='transition-all'
      style={{
        height: `${containerHeight}%`,
      }}
      {...swipeHandlers}
    >
      <DimmedBackground show={isInputSwiped} />
      <div className='w-full h-full relative rounded-b-3xl transition-all'>
        <Drawer />
        {isInputSwiped ? <History ref={historyRef} /> : <MainInput ref={inputRef} />}
      </div>
    </div>
  )
}
