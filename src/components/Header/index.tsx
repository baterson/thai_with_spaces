import React, { ReactNode, FC } from 'react'
import { BiMoon } from 'react-icons/bi'

export const Header: FC = () => {
  return (
    <div className='basis-1/12 flex w-full justify-end text-sm items-center px-4 py-4 h-12 bg-white'>
      <div className='text-2xl text-gray-400'>
        <BiMoon />
      </div>
    </div>
  )
}
