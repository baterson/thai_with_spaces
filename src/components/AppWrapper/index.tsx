import React, { FC, ReactNode } from 'react'
import { useDarkTheme } from '../../state/hooks'

export const AppWrapper: FC<Props> = ({ children }) => {
  const { isActive } = useDarkTheme()
  return (
    <div
      data-testid='app-wrapper'
      className={`relative h-full w-full flex flex-col ${
        isActive && 'dark'
      }  md:px-80 md:py-10 bg-gray-50`}
    >
      {children}
    </div>
  )
}

type Props = {
  children: ReactNode
}
