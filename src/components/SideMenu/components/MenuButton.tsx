import React, { FC, ReactNode } from 'react'

export const MenuButton: FC<Props> = ({ onClick, isActive, children }) => {
  const activeStyles = 'text-indigo-800 shadow-sm'
  return (
    <button
      onClick={onClick}
      className={`flex items-center w-full font-normal ${isActive && activeStyles}`}
    >
      {children}
    </button>
  )
}

type Props = {
  isActive: boolean
  onClick: () => void
  children: ReactNode
}
