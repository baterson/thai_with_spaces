import React from 'react'
import { BiCamera, BiQuestionMark } from 'react-icons/bi'
import { useInput, useModals } from '../../state/hooks'
import { MODALS } from '../../state/state'
import { CircleButton } from '../CircleButton'
import { MainButton } from '../MainButton'

export const MainButtonArea = () => {
  const { setCurrentModal } = useModals()
  const { setInputActive, isInputActive } = useInput()

  return (
    <div className='flex justify-between items-end px-8 mt-6'>
      <div className='flex flex-col items-center gap-2 text-sm'>
        <CircleButton onClick={() => setCurrentModal(MODALS.about)}>
          <BiQuestionMark />
        </CircleButton>
        <div className='text-xs'>About</div>
      </div>
      <MainButton onClick={() => setInputActive(!isInputActive)} />
      <div className='flex flex-col items-center gap-2 text-sm'>
        <CircleButton onClick={() => {}}>
          <BiCamera />
        </CircleButton>
        <div className='text-xs'>Camera</div>
      </div>
    </div>
  )
}
