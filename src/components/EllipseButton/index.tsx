import React, { FC, ReactNode } from 'react'

export const EllipseButton: FC<Props> = ({ children, onClick }) => {
  return (
    <div
      className='rounded-full h-7 w-24 p-2 bg-ellipseButton bg-opacity-20 flex items-center justify-center dark:bg-ellipseButton-dark'
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
