import React, { ReactNode, FC } from 'react'

export const Navbar: FC<Props> = ({ children }) => {
  return (
    <div
      className={`flex justify-between items-center py-7 px-5 h-10 text-xl ${window.colors.nav}`}
    >
      {children}
    </div>
  )
}

type Props = {
  children: ReactNode
}
