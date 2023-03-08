import React, { FC, ReactNode } from 'react'

export const MainButton: FC<Props> = ({ children, onClick }) => {
  return (
    <button className={`h-20 text-2xl border-t ${window.colors.btn}`} onClick={onClick}>
      {children}
    </button>
  )
}

type Props = {
  children: ReactNode
  onClick: () => void
}
