import React, { FC, ReactNode } from 'react'
import { Transition } from '@headlessui/react'

export const Scale: FC<Props> = ({ children, isOpen }) => {
  return (
    <Transition
      show={isOpen}
      enter='transition duration-100 ease-out'
      enterFrom='transform scale-95 opacity-0'
      enterTo='transform scale-100 opacity-100'
      leave='transition tduration-75 ease-out'
      leaveFrom='transform scale-100 opacity-100'
      leaveTo='transform scale-95 opacity-0'
    >
      {children}
    </Transition>
  )
}

type Props = {
  isOpen: boolean
  children: ReactNode
}
