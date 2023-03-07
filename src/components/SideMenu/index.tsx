import React, { useState } from 'react'
import { FaWindowClose } from 'react-icons/fa'

const MENU_ITEMS = {
  none: '',
  fontSize: 'Fontsize',
  fontFamily: 'FontFamily',
}

export const SideMenu = ({ onClose, setFontSize }) => {
  const [activeMenu, setActiveMenu] = useState(MENU_ITEMS.none)

  const handleFontSize = (fontSize) => {
    setFontSize(fontSize)
    setActiveMenu(MENU_ITEMS.none)
    onClose()
  }

  const isMenuItemActive = (itemName: string) => activeMenu === itemName
  const setMenuItemActive = (itemName: string) => () => {
    if (itemName === activeMenu) {
      setActiveMenu(MENU_ITEMS.none)
    } else {
      setActiveMenu(itemName)
    }
  }

  return (
    <div
      className={`text-xl bg-white fixed top-0 left-0 z-30 w-64 h-screen p-4 pt-10 transition-all ${window.colors.app}`}
    >
      <ul className='space-y-5'>
        <FontSizeMenuItem
          isActive={isMenuItemActive(MENU_ITEMS.fontSize)}
          onClick={setMenuItemActive(MENU_ITEMS.fontSize)}
          onFontChange={handleFontSize}
          key='fontSize'
        />
      </ul>
    </div>
  )
}

const FontSizeMenuItem = ({ isActive, onClick, onFontChange }) => {
  return (
    <li>
      <SideMenuButton isActive={isActive} onClick={onClick}>
        Font sizes
      </SideMenuButton>
      {isActive && (
        <ul className='py-2 space-y-2'>
          {['text-2xl', 'text-3xl', 'text-4xl', 'text-5xl', 'text-6xl'].map((fontSize) => (
            <li className={`${fontSize} w-full`} onClick={() => onFontChange(fontSize)}>
              Aaaa
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

const SideMenuButton = ({ onClick, isActive, children }) => {
  const activeStyles = 'text-indigo-900'
  return (
    <button
      onClick={onClick}
      className={`flex items-center w-full font-normal ${isActive && activeStyles}`}
    >
      {children}
    </button>
  )
}
