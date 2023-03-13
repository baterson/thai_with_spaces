import { FONT_STYLES, ScreenThemeValues } from '../../../utils/screenTheme'
import React, { FC } from 'react'
import { MenuItemWithSubmenu } from './MenuItemWithSubmenu'

export const FontStyleMenuItem: FC<Props> = ({ isActive, onClick, onChange }) => {
  return (
    <MenuItemWithSubmenu name='Font Style' isActive={isActive} onClick={onClick}>
      {FONT_STYLES.map((fontStyle) => (
        <li className={`${fontStyle} w-full`} onClick={() => onChange(fontStyle)} key={fontStyle}>
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
