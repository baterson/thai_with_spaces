import React, { FC, ReactNode } from 'react'
import { useDarkTheme } from '../../state/hooks'

export const AppWrapper: FC<Props> = ({ children }) => {
  const { isDarkThemeActive } = useDarkTheme()
  const styles = isDarkThemeActive ? 'dark' : ''
  return (
    <div className={`${styles} h-full w-full`}>
      <div
        data-testid='app-wrapper'
        className='relative bg-background h-full w-full flex flex-col md:px-80 md:py-10 dark:text-white dark:bg-background-dark'
      >
        {children}
      </div>
    </div>
  )
}

type Props = {
  children: ReactNode
}
