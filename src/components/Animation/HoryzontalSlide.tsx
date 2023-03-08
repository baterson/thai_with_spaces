import React, { FC, ReactNode } from 'react'
import { Transition } from '@headlessui/react'

export const HoryzontalSlide: FC<Props> = ({ children, show, onBackgroundClick }) => {
  return (
    <Transition show={show}>
      <Transition.Child>
        <div
          className='absolute w-full h-full bg-slate-300 opacity-80'
          onClick={onBackgroundClick}
        />
      </Transition.Child>

      <Transition.Child
        enter='transition ease-in-out duration-300 transform'
        enterFrom='-translate-x-full'
        enterTo='translate-x-0'
        leave='transition ease-in-out duration-300 transform'
        leaveFrom='translate-x-0'
        leaveTo='-translate-x-full'
      >
        {children}
      </Transition.Child>
    </Transition>
  )
}

type Props = {
  children: ReactNode
  show: boolean
  onBackgroundClick: () => void
}
