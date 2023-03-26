import React, { FC } from 'react'
import { BiSun, BiMoon } from 'react-icons/bi'
import { useDarkTheme } from '../../state/hooks'

export const DarkModeToggle: FC = () => {
  const { setDarkThemeActive, isDarkThemeActive } = useDarkTheme()
  return (
    <div
      className='text-3xl text-gray-400 dark:text-white'
      onClick={() => setDarkThemeActive(!isDarkThemeActive)}
      data-testid='dark-mode-toggle'
    >
      {isDarkThemeActive ? <BiSun data-testid='sun-icon' /> : <BiMoon data-testid='moon-icon' />}
    </div>
  )
}
