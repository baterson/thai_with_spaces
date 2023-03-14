import React, { FC, ReactNode } from 'react'

export const MenuButton: FC<Props> = ({ onClick, isActive, children }) => {
  const activeStyles = ''
  return (
    <button
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
      className={`text-xl flex items-center w-full border-b border-opacity-30 border-violet-300 pb-2
        ${isActive && activeStyles}`}
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
