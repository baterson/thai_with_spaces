import React, { ReactNode, FC } from 'react'

export const Header: FC<Props> = ({ children }) => {
  return (
    <div
      className='flex justify-end gap-6 h-7 text-2xl text-gray-200 border-b pb-14'
      data-testid='header'
    >
      {children}
    </div>
  )
}

type Props = {
  children: ReactNode
}
