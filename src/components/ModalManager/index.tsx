import React, { FC, ReactNode } from 'react'
import { useModals } from '../../state/hooks'
import { MODALS } from '../../state/state'
import { ModalContainer } from '../ModalContainer'
import { About, Font, FontSize } from './Modals'

export const ModalManager: FC = () => {
  const { currentModal } = useModals()

  if (!currentModal) {
    return null
  }

  const renderModal = () => {
    switch (currentModal) {
      case MODALS.about:
        return <About />
      case MODALS.font:
        return <Font />
      case MODALS.fontSize:
        return <FontSize />
      default:
        return null
    }
  }

  return <ModalContainer>{renderModal()}</ModalContainer>
}
