import React, { FC, ReactNode } from 'react'
import { BiX } from 'react-icons/bi'

export const ModalContainer: FC<Props> = ({ children, header, onClose }) => {
  return (
    <div
      data-testid='modal-container'
      onClick={onClose}
      tabIndex={-1}
      className='bg-white flex flex-col h-full w-full absolute top-0 left-0 z-50 md:px-60'
    >
      <div className='relative flex justify-center items text-2xl py-4 border-b border-gray-100'>
        <div className='absolute top-0 left-0 p-4 flex items-center w-full h-full'>
          <BiX />
        </div>
        <div>{header}</div>
      </div>
      {children}
    </div>
  )
}

type Props = {
  children: ReactNode
  onClose: () => void
}
