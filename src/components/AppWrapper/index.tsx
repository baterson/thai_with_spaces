import React, { FC, ReactNode } from 'react'

export const AppWrapper: FC<Props> = ({ children, isDarkTheme }) => {
  return (
    <div
      data-testid='app-wrapper'
      className={`px-5 py-4 relative h-full w-full box-border flex flex-col flex-wrap ${
        isDarkTheme && 'dark'
      }  md:px-60 md:py-10`}
    >
      {children}
    </div>
  )
}

type Props = {
  children: ReactNode
  isDarkTheme: boolean
}
