import React, { FC } from 'react'
import { ModalContainer } from '../ModalContainer'
import { About, Font, FontSize } from './Modals'

export const ModalManager = ({ modalName, setScreenThemeValue, onClose }) => {
  if (!modalName) {
    return null
  }

  const renderModal = () => {
    switch (modalName) {
      case 'About':
        return (
          <ModalContainer header='About'>
            <About />
          </ModalContainer>
        )
      case 'Font':
        return (
          <ModalContainer header='Font'>
            <Font setFont={(value) => setScreenThemeValue({ font: value })} />
          </ModalContainer>
        )
      case 'FontSize':
        return (
          <ModalContainer header='Font Size'>
            <FontSize setFontSize={(value) => setScreenThemeValue({ fontSize: value })} />
          </ModalContainer>
        )
      default:
        return null
    }
  }

  return <ModalContainer onClose={onClose}>{renderModal()}</ModalContainer>
}
