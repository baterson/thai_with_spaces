import React, { FC, ReactNode } from 'react'

export const CircleButton: FC<Props> = ({ children, onClick, customColor }) => {
  return (
    <button
      className={`rounded-full text-2xl text-black  border-opacity-20 h-12 w-12 p-2  bg-opacity-40 flex items-center justify-center dark:text-white  ${
        customColor ? customColor : 'bg-secondaryButton dark:bg-secondaryButton-dark'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

type Props = {
  onClick: () => void
  children: ReactNode
  customColor?: string
}
