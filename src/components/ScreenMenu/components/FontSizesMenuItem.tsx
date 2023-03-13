import { FONT_SIZES, ScreenThemeValues } from '../../../utils/screenTheme'
import React, { FC } from 'react'
import { MenuItemWithSubmenu } from './MenuItemWithSubmenu'

var c = ['font-NotoSansThai', 'font-NotoSerifThai', 'font-Sono']

export const FontSizeMenuItem: FC<Props> = ({ isActive, onClick, onChange }) => {
  return (
    <MenuItemWithSubmenu name='Font Size' isActive={isActive} onClick={onClick}>
      {FONT_SIZES.map((fontSize) => (
        <li className={`${fontSize} w-full`} onClick={() => onChange(fontSize)} key={fontSize}>
          กกกซีซีซียยย
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
