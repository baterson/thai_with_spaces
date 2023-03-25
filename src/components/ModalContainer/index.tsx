import React, { FC, ReactNode } from 'react'
import { BiX } from 'react-icons/bi'
import { useModals, useHeader } from '../../state/hooks'

const HEADERS = {
  about: 'About',
  font: 'Font',
  fontSize: 'Font Size',
} as const

export const ModalContainer: FC<Props> = ({ children }) => {
  const { closeModal } = useModals()
  const { header } = useHeader()

  return (
    <div
      data-testid='modal-container'
      onClick={closeModal}
      className='bg-white flex flex-col h-full w-full absolute top-0 left-0 z-50 md:px-80'
    >
      <div className='relative flex justify-center items text-2xl py-4'>
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
}
