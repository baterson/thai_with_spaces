import React, { FC, ReactNode } from 'react'

export const CircleButton: FC<Props> = ({ children, onClick }) => {
  return (
    <button
      className='rounded-full text-2xl text-black bg-teal-700 border-opacity-20 h-12 w-12 p-2  bg-opacity-20 flex items-center justify-center'
      onClick={onClick}
    >
      {children}
    </button>
  )
}

type Props = {
  onClick: () => void
  children: ReactNode
}
