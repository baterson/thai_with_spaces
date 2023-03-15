import React, { useState, ChangeEvent } from 'react'

import {
  Header,
  EllipseButton,
  MainButton,
  CircleButton,
  TextScreen,
  AppWrapper,
} from './components'
import { BiFont, BiFontSize, BiQuestionMark, BiCamera } from 'react-icons/bi'
import { segmentText } from './utils/segmenter'
import { initialScreenTheme } from './utils/screenTheme'
import { ModalManager } from './components'

function App() {
  const [isDarkThemeActive, setDarkThemeActive] = useState(false)

  const [currentModal, setCurrentModal] = useState('')

  const [screenTheme, setScreenThemeValue] = useState(initialScreenTheme)
  const [isInputActive, setInputActive] = useState(true)
  const [inputValue, setInputValue] = useState('มันยากมากสำหรับฉันที่จะอ่านข้อความเป็นภาษาไทย')

  return (
    <AppWrapper isDarkTheme={isDarkThemeActive}>
      <Header />
      <div className={`basis-8/12 relative w-full text-xl flex-1  bg-white  rounded-b-3xl`}>
        <div className='absolute m-auto bottom-2 bg-opacity-60 left-0 right-0 w-16 h-1 rounded-3xl bg-gray-300'></div>
        <TextScreen
          isDisabled={!isInputActive}
          screenTheme={screenTheme}
          value={isInputActive ? inputValue : segmentText(inputValue)}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
        />
      </div>
      <div className='basis-3/12 flex flex-col gap-4 w-full pb-6 pt-3 px-4 bg-gray-50'>
        <div className='flex justify-between items-center px-12'>
          <EllipseButton onClick={() => setCurrentModal('Font')}>
            <BiFont />
          </EllipseButton>
          <EllipseButton onClick={() => setCurrentModal('FontSize')}>
            <BiFontSize />
          </EllipseButton>
        </div>

        <div className='flex justify-between items-end px-8 mt-6'>
          <div className='flex flex-col items-center gap-2 text-sm'>
            <CircleButton onClick={() => setCurrentModal('About')}>
              <BiQuestionMark />
            </CircleButton>
            <div className='text-xs'>About</div>
          </div>
          <MainButton onClick={() => setInputActive(!isInputActive)} />
          <div className='flex flex-col items-center gap-2 text-sm'>
            <CircleButton onClick={() => {}}>
              <BiCamera />
            </CircleButton>
            <div className='text-xs'>Camera</div>
          </div>
        </div>
      </div>

      <ModalManager modalName={currentModal} onClose={() => setCurrentModal('')} />

      {/* {isMenuOpen && (
        <Modal onClose={() => setMenuOpen(!isMenuOpen)}>
          <ScreenMenu
            screenTheme={screenTheme}
            setScreenThemeValue={(key, value) =>
              setScreenThemeValue({ ...screenTheme, [key]: value })
            }
            onClose={() => setMenuOpen(false)}
          />
        </Modal>
      )} */}
    </AppWrapper>
  )
}

export default App
