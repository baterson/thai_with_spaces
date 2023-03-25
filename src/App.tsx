import React from 'react'

import { Header, InputThemeButtons, AppWrapper } from './components'
import { ModalManager } from './components'
import { SwipeableView } from './components/SwipeableView'
import { StateProvider } from './state/Context'
import { MainButtonArea } from './components/MainButtonArea'

function App() {
  return (
    <StateProvider>
      <AppWrapper>
        <Header />
        <div className={`basis-8/12 relative w-full text-xl flex-1  bg-white  rounded-b-3xl`}>
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
