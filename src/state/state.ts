import { useEffect, useState } from 'react'
import { initialInputTheme } from '../styles/inputTheme'
import { v4 as uuidv4 } from 'uuid'

export enum MODALS {
  none,
  about,
  font,
  fontSize,
}

export const HEADERS = {
  [MODALS.about]: 'About',
  [MODALS.font]: 'Font',
  [MODALS.fontSize]: 'Font Size',
  none: '',
  history: 'History',
}

type History = { [key: string]: string }

export const useAppState = () => {
  // App state
  const [currentModal, setCurrentModal] = useState(MODALS.none)
  const [header, setHeader] = useState(HEADERS.none)
  const [isInputSwiped, setInputSwiped] = useState(false)
  const [isInputActive, setInputActive] = useState(true)
  const [inputValue, setInputValue] = useState('')
  const [historyItems, setHistory] = useState<History>({})

  // Theme state
  const [inputTheme, setInputTheme] = useState(initialInputTheme)
  const [isDarkThemeActive, setDarkThemeActive] = useState(false)

  // Helper state
  const [lastHistoryItem, setLastHistoryItem] = useState('')

  //#region Convinient state functions
  const addToHistory = (value: string) => {
    setLastHistoryItem(value)
    setHistory({ ...historyItems, [uuidv4()]: value })
  }

  const removeFromHistory = (id: string) => {
    delete historyItems[id]
    setHistory({ ...historyItems })
  }

  const setInputThemeValue = (value: { [key: string]: string }) =>
    setInputTheme({ ...inputTheme, ...value })

  const closeModal = () => setCurrentModal(MODALS.none)
  //#endregion

  // #region State effects

  useEffect(() => {
    // Prevent saving the same item multiple times in a row

    if (lastHistoryItem === inputValue) {
      return
    } else {
      addToHistory(inputValue)
    }
  }, [isInputActive])

  useEffect(() => {
    // Controlls header state

    if (currentModal) {
      setHeader(HEADERS[currentModal])
    } else if (isInputSwiped) {
      setHeader(HEADERS.history)
    } else {
      setHeader(HEADERS.none)
    }
  }, [currentModal, isInputSwiped])
  //#endregion

  return {
    input: {
      inputValue,
      isInputActive,
      isInputSwiped,
      setInputActive,
      setInputValue,
      setInputSwiped,
    },
    header: {
      header,
    },
    history: {
      historyItems,
      addToHistory,
      removeFromHistory,
    },
    modals: {
      currentModal,
      setCurrentModal,
      closeModal,
    },
    inputTheme: {
      inputTheme,
      setInputThemeValue,
    },
    darkTheme: {
      isActive: isDarkThemeActive,
      setDarkThemeActive,
    },
  }
}

export type AppState = ReturnType<typeof useAppState>
