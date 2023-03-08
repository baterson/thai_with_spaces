import React, { useState, ChangeEvent } from 'react'
import { HoryzontalSlide } from './components/Animation/HoryzontalSlide'

import { Navbar, SideMenu, MainButton, TextScreen, AppWrapper, DarkModeToggle } from './components'
import { FaBars } from 'react-icons/fa'
import { segmentText } from './utils/segmenter'
import { initialScreenTheme } from './utils/screenTheme'

// temp hack
window.colors = {
  //   app: 'bg-[#edf2fb]',
  nav: 'bg-white',
  //   side: 'bg-[#ccdbfd]',
  btn: 'bg-white',
}

function App() {
  const [isDarkThemeActive, setDarkThemeActive] = useState(false)
  const [screenTheme, setScreenThemeValue] = useState(initialScreenTheme)
  const [isInputActive, setInputActive] = useState(true)
  const [inputValue, setInputValue] = useState('ฉันไปกิน')
  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <AppWrapper isDarkTheme={isDarkThemeActive}>
      <HoryzontalSlide show={isMenuOpen} onBackgroundClick={() => setMenuOpen(!isMenuOpen)}>
        <SideMenu
          setScreenThemeValue={(key, value) =>
            setScreenThemeValue({ ...screenTheme, [key]: value })
          }
          onClose={() => setMenuOpen(false)}
        />
      </HoryzontalSlide>
      <Navbar>
        <FaBars onClick={() => setMenuOpen(!isMenuOpen)} />
        <DarkModeToggle
          isDarkMode={isDarkThemeActive}
          onClick={() => setDarkThemeActive(!isDarkThemeActive)}
        />
      </Navbar>
      <TextScreen
        isDisabled={!isInputActive}
        screenTheme={screenTheme}
        onClick={() => setMenuOpen(false)}
        value={isInputActive ? inputValue : segmentText(inputValue)}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
      />
      <MainButton onClick={() => setInputActive(!isInputActive)}>
        {isInputActive ? 'Add Spaces' : 'Start Typing'}
      </MainButton>
    </AppWrapper>
  )
}

export default App
