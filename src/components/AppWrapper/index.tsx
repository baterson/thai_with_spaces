import React, { FC, ReactNode } from 'react'

export const AppWrapper: FC<Props> = ({ children, isDarkTheme }) => {
  return (
    <div
      data-testid='app-wrapper'
      className={`relative h-full w-full flex flex-col ${
        isDarkTheme && 'dark'
      }  md:px-60 md:py-10 bg-gray-50`}
    >
      {children}
    </div>
  )
}

type Props = {
  children: ReactNode
  isDarkTheme: boolean
}
