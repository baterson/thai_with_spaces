import { THAI_FONTS, ScreenThemeValues } from '../../../utils/screenTheme'
import React, { FC } from 'react'
import { MenuItemWithSubmenu } from './MenuItemWithSubmenu'

export const ThaiFontsMenuItem: FC<Props> = ({ isActive, onClick, onChange }) => {
  return (
    <MenuItemWithSubmenu name='Fonts' isActive={isActive} onClick={onClick}>
      {THAI_FONTS.map((font) => (
        <li className={`${font} w-full`} onClick={() => onChange(font)} key={font}>
          ประโยคยาวในภาษาไทย
        </li>
      ))}
    </MenuItemWithSubmenu>
  )
}

type Props = {
  isActive: boolean
  onClick: () => void
  onChange: (value: ScreenThemeValues) => void
}
