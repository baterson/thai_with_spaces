import React, { ReactNode, FC, Fragment } from 'react'
import { BiMoon, BiX } from 'react-icons/bi'
import { useHeader, useInput } from '../../state/hooks'
import { DarkModeToggle } from '../DarkModeToggle'

export const Header: FC = () => {
  const { header } = useHeader()
  const { setInputSwiped } = useInput()
  const styles = header ? 'justify-between' : 'justify-end'

  return (
    <div
      className={`bg-screenArea relative basis-1/12 flex w-full text-2xl items-center px-6 py-4 h-12 ${styles} dark:bg-screenArea-dark`}
    >
      {header && (
        <Fragment>
          <div className='flex items-center' onClick={() => setInputSwiped(false)}>
            <BiX />
          </div>
          <div>{header}</div>
        </Fragment>
      )}
      <div className='text-3xl text-gray-400'>
        <DarkModeToggle />
      </div>
    </div>
  )
}
