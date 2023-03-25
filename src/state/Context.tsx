import React, { createContext, FC, ReactNode } from 'react'
import { AppState, useAppState } from './state'

export const AppContext = createContext<AppState>(null)

export const StateProvider: FC<Props> = ({ children }) => {
  const appState = useAppState()

  return <AppContext.Provider value={appState}>{children}</AppContext.Provider>
}

type Props = {
  children: ReactNode
}
