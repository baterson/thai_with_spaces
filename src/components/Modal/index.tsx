import React, { FC, ReactNode } from 'react'

export const Modal: FC<Props> = ({ children, onClose }) => {
  return (
    <div
      data-testid='modal'
      onClick={onClose}
      tabIndex={-1}
      className='bg-opacity-90 bg-gray-900 py-20 px-5 absolute top-0 left-0 z-50 h-full w-full p-4 md:px-60'
    >
      <ModalContent>{children}</ModalContent>
    </div>
  )
}

const ModalContent: FC<ModalContentProps> = ({ children }) => {
  return (
    <div
      data-testid='modal-content'
      onClick={(e) => e.stopPropagation()}
      className='bg-gray-100 flex justify-center align-center h-full w-full rounded-lg'
    >
      {children}
    </div>
  )
}

type Props = {
  children: ReactNode
  onClose: () => void
}

type ModalContentProps = {
  children: ReactNode
}
