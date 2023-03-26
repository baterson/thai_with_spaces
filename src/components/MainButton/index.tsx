import React, { FC } from 'react'
import { BiSpaceBar } from 'react-icons/bi'

export const MainButton: FC<Props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full text-4xl h-24 w-24 p-4 bg-mainButton flex items-center justify-center dark:bg-mainButton-dark`}
    >
      <BiSpaceBar />
    </button>
  )
}

type Props = {
  onClick: () => void
}
