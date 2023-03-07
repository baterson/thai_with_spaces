import React from 'react'

export const AppWrapper = ({ children, isDarkTheme }) => {
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
