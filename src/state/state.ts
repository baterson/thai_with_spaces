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
  const [isInputActive, _setInputActive] = useState(true)
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

  // Prevent to change the input state if there is no value
  const setInputActive = (isActive: boolean) => {
    if (!isActive && !inputValue) {
      return
    }
    return _setInputActive(isActive)
  }

  const clearInput = () => {
    if (inputValue) {
      addToHistory(inputValue)
    }
    _setInputActive(true)
    setInputValue('')
  }

  const closeModal = () => setCurrentModal(MODALS.none)
  //#endregion

  // #region State effects
  // Prevent saving the same item multiple times in a row
  useEffect(() => {
    if (lastHistoryItem === inputValue) {
      return
    } else {
      addToHistory(inputValue)
    }
  }, [isInputActive])

  // Controlls header state
  useEffect(() => {
    if (currentModal) {
      setHeader(HEADERS[currentModal])
    } else if (isInputSwiped) {
      setHeader(HEADERS.history)
    } else {
      setHeader(HEADERS.none)
    }
  }, [currentModal, isInputSwiped])

  // Setting up history from localstorage
  useEffect(() => {
    const history = localStorage.getItem('history')
    if (history) {
      setHistory(JSON.parse(history))
    }
  }, [])

  // Save history to localstorage on history change
  useEffect(() => {
    if (lastHistoryItem) {
      localStorage.setItem('history', JSON.stringify(historyItems))
    }
  }, [lastHistoryItem])

  //#endregion

  return {
    input: {
      inputValue,
      isInputActive,
      isInputSwiped,
      setInputActive,
      setInputValue,
      setInputSwiped,
      clearInput,
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
      isDarkThemeActive,
      setDarkThemeActive,
    },
  }
}

export type AppState = ReturnType<typeof useAppState>
