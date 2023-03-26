import { Transition } from '@headlessui/react'
import React, { FC } from 'react'

export const DimmedBackground: FC<Props> = ({ show }) => {
  return (
    <Transition
      show={show}
      enter='transition-opacity duration-50'
      enterFrom='opacity-0'
      enterTo='opacity-70'
      leave='transition-opacity duration-150'
      leaveFrom='opacity-70'
      leaveTo='opacity-0'
    >
      <div className='absolute z-bg h-[140%] w-full bg-gray-500 '></div>
    </Transition>
  )
}

type Props = {
  show: boolean
}
