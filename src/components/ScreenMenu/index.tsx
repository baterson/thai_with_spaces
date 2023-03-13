import React, { useState, FC } from 'react'
import { ScreenThemeKeys, ScreenThemeValues } from '../../utils/screenTheme'
import {
  FontStyleMenuItem,
  FontSizeMenuItem,
  FontWeightMenuItem,
  ThaiFontsMenuItem,
} from './components'

const MENU_ITEMS = {
  none: '',
  thaiFonts: 'thaiFonts',
  fontSizes: 'fontSizes',
  fontStyles: 'fontStyles',
  fontWeights: 'fontWeights',
} as const

type MenuKeys = keyof typeof MENU_ITEMS
type MenuItemName = typeof MENU_ITEMS[MenuKeys]

export const ScreenMenu: FC<Props> = ({ thaiFont, setScreenThemeValue }) => {
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
    <div className={`text-xl py-4 px-2  w-full ${thaiFont} font-sono`}>
      <ul className='flex flex-col gap-10 justify-start w-full'>
        <ThaiFontsMenuItem
          isActive={isMenuItemActive(MENU_ITEMS.thaiFonts)}
          onClick={setMenuItemActive(MENU_ITEMS.thaiFonts)}
          onChange={handleThemeChange('thaiFonts')}
          key='fontStyle'
        />
        <FontStyleMenuItem
          isActive={isMenuItemActive(MENU_ITEMS.fontStyles)}
          onClick={setMenuItemActive(MENU_ITEMS.fontStyles)}
          onChange={handleThemeChange('fontStyles')}
          key='fontStyle'
        />
        <FontWeightMenuItem
          isActive={isMenuItemActive(MENU_ITEMS.fontWeights)}
          onClick={setMenuItemActive(MENU_ITEMS.fontWeights)}
          onChange={handleThemeChange('fontWeights')}
          key='fontWeight'
        />
        <FontSizeMenuItem
          isActive={isMenuItemActive(MENU_ITEMS.fontSizes)}
          onClick={setMenuItemActive(MENU_ITEMS.fontSizes)}
          onChange={handleThemeChange('fontSizes')}
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
