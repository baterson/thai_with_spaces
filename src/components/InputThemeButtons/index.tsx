import React from 'react'
import { BiFont, BiFontSize } from 'react-icons/bi'
import { useModals } from '../../state/hooks'
import { MODALS } from '../../state/state'
import { EllipseButton } from '../EllipseButton'

export const InputThemeButtons = () => {
  const { setCurrentModal } = useModals()

  return (
    <div className='flex justify-between items-center px-12'>
      <EllipseButton onClick={() => setCurrentModal(MODALS.font)}>
        <BiFont />
      </EllipseButton>
      <EllipseButton onClick={() => setCurrentModal(MODALS.fontSize)}>
        <BiFontSize />
      </EllipseButton>
    </div>
  )
}
