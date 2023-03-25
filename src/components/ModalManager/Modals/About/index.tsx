import React from 'react'
import { useInput, useModals, useHistory } from '../../../../state/hooks'

const EXAMPLE_INPUT = 'ภาษาไทยเป็นภาษาที่น่าสนใจมากแม้ว่าจะไม่มีช่องว่างก็ตาม'

export const About = () => {
  const { setInputValue } = useInput()
  const { addToHistory } = useHistory()
  const { closeModal } = useModals()

  return (
    <div className='flex flex-col w-full h-full text-3xl'>
      <div
        onClick={() => {
          setInputValue(EXAMPLE_INPUT)
          addToHistory(EXAMPLE_INPUT)
          closeModal()
        }}
      >
        Add example thai text
      </div>
    </div>
  )
}
