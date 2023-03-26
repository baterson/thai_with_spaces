import React, { forwardRef, useEffect } from 'react'
import { useHistory, useInput } from '../../state/hooks'
import { SwipeableItem } from '../SwipeableItem'

export const History = forwardRef((_, ref) => {
  const { historyItems, removeFromHistory } = useHistory()
  const { setInputValue, setInputSwiped } = useInput()

  const handleClick = (value: string) => {
    setInputValue(value)
    setInputSwiped(false)
  }

  useEffect(() => {
    if (ref.current) {
      ref.current.scroll({ top: ref.current.scrollHeight, behavior: 'instant' })
    }
  }, [])

  return (
    <ul
      ref={ref}
      className={`w-full h-full text-xl flex flex-col list-none px-4 pt-4 pb-8 gap-6 overflow-x-hidden overflow-y-scroll bg-screenArea rounded-b-3xl dark:bg-screenArea-dark`}
    >
      {Object.keys(historyItems).map((key) => {
        return (
          <SwipeableItem onLeave={() => removeFromHistory(key)} key={key}>
            <div className='h-full line-clamp-2' onClick={() => handleClick(historyItems[key])}>
              {historyItems[key]}
            </div>
          </SwipeableItem>
        )
      })}
    </ul>
  )
})
