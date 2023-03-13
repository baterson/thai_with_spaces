import React, { useState, FC } from 'react'
import { ScreenTheme, ScreenThemeKeys, ScreenThemeValues } from '../../utils/screenTheme'
import {
  FontStyleMenuItem,
  FontSizeMenuItem,
  FontWeightMenuItem,
  ThaiFontsMenuItem,
} from './components'

const MENU_ITEMS = {
  none: '',
  thaiFont: 'thaiFont',
  fontSize: 'fontSize',
  fontStyle: 'fontStyle',
  fontWeight: 'fontWeight',
} as const

type MenuKeys = keyof typeof MENU_ITEMS
type MenuItemName = typeof MENU_ITEMS[MenuKeys]

export const ScreenMenu: FC<Props> = ({ screenTheme, setScreenThemeValue }) => {
  const [activeMenu, setActiveMenu] = useState<MenuItemName>(MENU_ITEMS.none)

  const handleThemeChange = (key: ScreenThemeKeys) => (value: ScreenThemeValues) => {
    setScreenThemeValue(key, value)
    setActiveMenu(MENU_ITEMS.none)
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
    <div className={`text-xl py-4 px-2  w-full ${screenTheme.thaiFont} font-sono`}>
      <ul className='flex flex-col gap-10 justify-start w-full'>
        <ThaiFontsMenuItem
          isActive={isMenuItemActive(MENU_ITEMS.thaiFont)}
          onClick={setMenuItemActive(MENU_ITEMS.thaiFont)}
          onChange={handleThemeChange('thaiFont')}
          key='thaiFont'
        />
        <FontStyleMenuItem
          isActive={isMenuItemActive(MENU_ITEMS.fontStyle)}
          onClick={setMenuItemActive(MENU_ITEMS.fontStyle)}
          onChange={handleThemeChange('fontStyle')}
          key='fontStyle'
        />
        <FontWeightMenuItem
          isActive={isMenuItemActive(MENU_ITEMS.fontWeight)}
          onClick={setMenuItemActive(MENU_ITEMS.fontWeight)}
          onChange={handleThemeChange('fontWeight')}
          key='fontWeight'
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
  screenTheme: ScreenTheme
  setScreenThemeValue: (key: ScreenThemeKeys, value: ScreenThemeValues) => void
}
