import { useContext } from 'react'
import { AppContext } from './Context'

export const useInput = () => {
  const context = useContext(AppContext)
  return context.input
}

export const useInputTheme = () => {
  const context = useContext(AppContext)
  return context.inputTheme
}

export const useHistory = () => {
  const context = useContext(AppContext)
  return context.history
}

export const useModals = () => {
  const context = useContext(AppContext)
  return context.modals
}

export const useDarkTheme = () => {
  const context = useContext(AppContext)
  return context.darkTheme
}

export const useHeader = () => {
  const context = useContext(AppContext)
  return context.header
}
