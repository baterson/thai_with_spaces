import { FONT_WEIGHTS, ScreenThemeValues } from '../../../utils/screenTheme'
import React, { FC } from 'react'
import { MenuItemWithSubmenu } from './MenuItemWithSubmenu'

export const FontWeightMenuItem: FC<Props> = ({ isActive, onClick, onChange }) => {
  return (
    <MenuItemWithSubmenu name='Font Weight' isActive={isActive} onClick={onClick}>
      {FONT_WEIGHTS.map((fontWeight) => (
        <li
          className={`${fontWeight} w-full`}
          onClick={() => onChange(fontWeight)}
          key={fontWeight}
        >
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
