import React, { FC } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

export const DarkModeToggle: FC<Props> = ({ onClick, isDarkMode }) => {
  return (
    <div onClick={onClick} data-testid='dark-mode-toggle' className='cursor-pointer'>
      {isDarkMode ? <FaSun data-testid='sun-icon' /> : <FaMoon data-testid='moon-icon' />}
    </div>
  )
}

type Props = {
  onClick: () => void
  isDarkMode: boolean
}
