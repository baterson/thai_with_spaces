import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

export const DarkModeToggle = ({ onClick, isDarkMode }) => {
  return (
    <div onClick={onClick} data-testid='dark-mode-toggle'>
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </div>
  )
}
