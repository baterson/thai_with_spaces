import React, { FC, ReactNode } from 'react'

export const EllipseButton: FC<Props> = ({ children, onClick }) => {
  return (
    <div
      className='rounded-full h-7 w-24 p-2 bg-gray-300 bg-opacity-20 flex items-center justify-center'
      onClick={onClick}
    >
      {children}
    </div>
  )
}

type Props = {
  onClick: () => void
  children: ReactNode
}
