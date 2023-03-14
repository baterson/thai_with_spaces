import { MenuButton } from './MenuButton'
import { Scale } from '../../Animation'
import React, { ReactNode, FC } from 'react'
import { FaAngleDown, FaAngleRight } from 'react-icons/fa'

export const MenuItemWithSubmenu: FC<Props> = ({ name, isActive, onClick, children }) => {
  return (
    <li className='cursor-pointer'>
      <div className='text-blue-700'>
        <MenuButton isActive={isActive} onClick={onClick}>
          <div className='text-sm mr-4'>{isActive ? <FaAngleDown /> : <FaAngleRight />}</div>
          <div className=''>{name}</div>
        </MenuButton>
      </div>
      <Scale isOpen={isActive}>
        <ul className='py-2 px-6 space-y-2 '>{children}</ul>
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
