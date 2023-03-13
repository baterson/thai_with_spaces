import React, { FC, ReactNode } from 'react'

export const AppWrapper: FC<Props> = ({ children, isDarkTheme }) => {
  return (
    <div
      data-testid='app-wrapper'
      className={`px-5 py-3 gap-2 relative h-full w-full box-border flex flex-col flex-wrap ${
        isDarkTheme && 'dark'
      } bg-violet-100 font-sono`}
    >
      {children}
    </div>
  )
}

type Props = {
  children: ReactNode
  isDarkTheme: boolean
}
