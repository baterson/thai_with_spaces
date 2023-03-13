import React, { useState, ChangeEvent } from 'react'

import {
  Header,
  ScreenMenu,
  MainButton,
  TextScreen,
  AppWrapper,
  DarkModeToggle,
} from './components'
import { FaFont } from 'react-icons/fa'
import { segmentText } from './utils/segmenter'
import { initialScreenTheme } from './utils/screenTheme'
import { Modal } from './components/Modal'

function App() {
  const [isDarkThemeActive, setDarkThemeActive] = useState(false)

  const [screenTheme, setScreenThemeValue] = useState(initialScreenTheme)
  const [isInputActive, setInputActive] = useState(true)
  const [inputValue, setInputValue] = useState('ประโยคยาวในภาษาไทย')
  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <AppWrapper isDarkTheme={isDarkThemeActive}>
      {isMenuOpen && (
        <Modal onClose={() => setMenuOpen(!isMenuOpen)}>
          <ScreenMenu
            thaiFont={screenTheme.thaiFonts}
            setScreenThemeValue={(key, value) =>
              setScreenThemeValue({ ...screenTheme, [key]: value })
            }
            onClose={() => setMenuOpen(false)}
          />
        </Modal>
      )}
      <Header>
        <FaFont onClick={() => setMenuOpen(!isMenuOpen)} />
        <DarkModeToggle
          isDarkMode={isDarkThemeActive}
          onClick={() => setDarkThemeActive(!isDarkThemeActive)}
        />
      </Header>
      <TextScreen
        isDisabled={!isInputActive}
        screenTheme={screenTheme}
        onClick={() => setMenuOpen(false)}
        value={isInputActive ? inputValue : segmentText(inputValue)}
        thaiFont={screenTheme.thaiFonts}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
      />
      <MainButton isEditState={isInputActive} onClick={() => setInputActive(!isInputActive)}>
        {isInputActive ? 'Add Spaces' : 'Type Text'}
      </MainButton>
    </AppWrapper>
  )
}

export default App
