import { FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'

export const PortalRoot: FC<Props> = ({ children }) => {
  return createPortal(children, document.getElementById('modal-root') as HTMLElement)
}

type Props = {
  children: ReactNode
}
