import React from 'react'
import {
  Header,
  InputThemeButtons,
  AppWrapper,
  ModalManager,
  SwipeableView,
  MainButtonArea,
} from './components'
import { StateProvider } from './state/Context'

function App() {
  return (
    <StateProvider>
      <AppWrapper>
        <Header />
        <div className='basis-8/12 relative w-full text-xl flex-1 bg-white rounded-b-3xl'>
          <SwipeableView />
        </div>
        <div className='basis-3/12 flex flex-col gap-4 w-full pb-6 pt-3 px-4 bg-gray-50'>
          <InputThemeButtons />
          <MainButtonArea />
        </div>
        <ModalManager />
      </AppWrapper>
    </StateProvider>
  )
}

export default App
