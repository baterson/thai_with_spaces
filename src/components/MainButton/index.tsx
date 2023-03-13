import React, { FC, ReactNode } from 'react'

export const MainButton: FC<Props> = ({ children, onClick, isEditState }) => {
  const bgStyle = isEditState ? 'bg-violet-500' : 'bg-amber-500'

  return (
    <button
      data-testid='main-button'
      className={`h-16 text-xl text-white rounded-lg ${bgStyle}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

type Props = {
  children: ReactNode
  onClick: () => void
}
