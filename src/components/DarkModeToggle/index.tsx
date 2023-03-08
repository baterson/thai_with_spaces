import React, { FC } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

export const DarkModeToggle: FC<Props> = ({ onClick, isDarkMode }) => {
  return (
    <div onClick={onClick} data-testid='dark-mode-toggle'>
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </div>
  )
}

type Props = {
  onClick: () => void
  isDarkMode: boolean
}
