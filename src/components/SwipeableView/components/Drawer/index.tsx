import React from 'react'

export const Drawer = () => {
  return (
    <div
      id='drawer'
      className='absolute flex-col  items-center justify-center flex z-overlay bottom-1 w-full h-10 md:hidden'
    >
      <div className='flex-1 h-1 max-h-1 bg-ellipseButton w-16 rounded-xl dark:bg-ellipseButton-dark'></div>
    </div>
  )
}
