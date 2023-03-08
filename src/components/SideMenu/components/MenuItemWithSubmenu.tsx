import { MenuButton } from './MenuButton'
import { Scale } from '../../Animation'
import React, { ReactNode, FC } from 'react'

export const MenuItemWithSubmenu: FC<Props> = ({ name, isActive, onClick, children }) => {
  return (
    <li>
      <MenuButton isActive={isActive} onClick={onClick}>
        {name}
      </MenuButton>
      <Scale isOpen={isActive}>
        <ul className='py-2 space-y-2'>{children}</ul>
      </Scale>
    </li>
  )
}

type Props = {
  name: string
  isActive: boolean
  onClick: () => void
  children: ReactNode
}
