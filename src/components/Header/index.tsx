import React, { ReactNode, FC } from 'react'

export const Header: FC<Props> = ({ children }) => {
  return (
    <div
      className='flex justify-end gap-6 items-center h-7 text-xl text-violet-400'
      data-testid='header'
    >
      {children}
    </div>
  )
}

type Props = {
  children: ReactNode
}
