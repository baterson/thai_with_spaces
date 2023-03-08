import React, { useState, FC } from 'react'
import { ScreenThemeKeys, ScreenThemeValues } from '../../utils/screenTheme'
import { FontStyleMenuItem, FontSizeMenuItem } from './components'

const MENU_ITEMS = {
  none: '',
  fontSize: 'Fontsize',
  fontStyle: 'FontStyle',
} as const

type MenuKeys = keyof typeof MENU_ITEMS
type MenuItemName = typeof MENU_ITEMS[MenuKeys]

export const SideMenu: FC<Props> = ({ onClose, setScreenThemeValue }) => {
  const [activeMenu, setActiveMenu] = useState<MenuItemName>(MENU_ITEMS.none)

  const handleThemeChange = (key: ScreenThemeKeys) => (value: ScreenThemeValues) => {
    setScreenThemeValue(key, value)
    setActiveMenu(MENU_ITEMS.none)
    onClose()
  }
  const isMenuItemActive = (itemName: MenuItemName) => activeMenu === itemName
  const setMenuItemActive = (itemName: MenuItemName) => () => {
    if (itemName === activeMenu) {
      setActiveMenu(MENU_ITEMS.none)
    } else {
      setActiveMenu(itemName)
    }
  }

  return (
    <div
      id='drawer-example'
      tabIndex={-1}
      className={`text-xl bg-white fixed top-0 left-0 z-2 w-64 h-screen p-4 ${window.colors.app}`}
    >
      <p className='mb-5 pb-2  border-b'>Screen Configuration</p>
      <ul className='space-y-5'>
        <FontStyleMenuItem
          isActive={isMenuItemActive(MENU_ITEMS.fontStyle)}
          onClick={setMenuItemActive(MENU_ITEMS.fontStyle)}
          onChange={handleThemeChange('fontStyle')}
          key='fontStyle'
        />
        <FontSizeMenuItem
          isActive={isMenuItemActive(MENU_ITEMS.fontSize)}
          onClick={setMenuItemActive(MENU_ITEMS.fontSize)}
          onChange={handleThemeChange('fontSize')}
          key='fontSize'
        />
      </ul>
    </div>
  )
}

type Props = {
  onClose: () => void
  setScreenThemeValue: (key: ScreenThemeKeys, value: ScreenThemeValues) => void
}
