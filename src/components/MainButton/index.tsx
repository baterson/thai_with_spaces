import React, { FC } from 'react'
import { BiSpaceBar, BiEditAlt } from 'react-icons/bi'
import { useInput } from '../../state/hooks'

export const MainButton: FC = () => {
  const { setInputActive, isInputActive } = useInput()

  return (
    <button
      onClick={() => setInputActive(!isInputActive)}
      className={`rounded-full text-4xl h-24 w-24 p-4 bg-mainButton flex items-center justify-center dark:bg-mainButton-dark`}
    >
      {isInputActive ? <BiSpaceBar /> : <BiEditAlt />}
    </button>
  )
}
