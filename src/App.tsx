import React, { useState } from 'react'
import { Navbar, SideMenu, Button, TextScreen, AppWrapper, DarkModeToggle } from './components'
import { FaBars } from 'react-icons/fa'
import { segmentText } from './utils/segmenter'

window.colors = {
  //   app: 'bg-[#edf2fb]',
  nav: 'bg-[#ffffff]',
  //   side: 'bg-[#ccdbfd]',
  btn: 'bg-[#abc4ff]',
}

function App() {
  const [isDarkThemeActive, setDarkThemeActive] = React.useState(false)
  const [isInputActive, setInputActive] = useState(true)
  const [inputValue, setInputValue] = useState('ฉันไปกิน')
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [fontSize, setFontsize] = useState('text-2xl')

  return (
    <AppWrapper isDarkTheme={isDarkThemeActive}>
      <Navbar>
        <FaBars onClick={() => setMenuOpen(!isMenuOpen)} />
        <DarkModeToggle
          isDarkMode={isDarkThemeActive}
          onClick={() => setDarkThemeActive(!isDarkThemeActive)}
        />
      </Navbar>
      {isMenuOpen && <SideMenu setFontSize={setFontsize} onClose={() => setMenuOpen(false)} />}
      <TextScreen
        isDisabled={!isInputActive}
        fontSize={fontSize}
        onClick={() => setMenuOpen(false)}
        value={isInputActive ? inputValue : segmentText(inputValue)}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button onClick={() => setInputActive(!isInputActive)}>
        {isInputActive ? 'Add spaces' : 'Start typing'}
      </Button>
    </AppWrapper>
  )
}

export default App
