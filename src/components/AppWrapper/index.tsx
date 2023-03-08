import React, { FC, ReactNode } from 'react'

export const AppWrapper: FC<Props> = ({ children, isDarkTheme }) => {
  return (
    <div
      data-testid='app-wrapper'
      className={`relative h-full w-full box-border flex flex-col flex-wrap ${
        isDarkTheme && 'dark'
      } ${window.colors.app} `}
    >
      {children}
    </div>
  )
}

type Props = {
  children: ReactNode
  isDarkTheme: boolean
}
