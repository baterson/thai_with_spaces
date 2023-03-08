import React, { ChangeEventHandler, FC } from 'react'
import { getScreenThemeStyles, ScreenTheme } from '../../utils/screenTheme'

export const TextScreen: FC<Props> = ({ onChange, value, isDisabled, screenTheme, onClick }) => {
  return (
    <div className='h-full w-full flex-1' onClick={() => onClick()}>
      <textarea
        value={value}
        disabled={isDisabled}
        onChange={onChange}
        lang='th'
        className={`h-full w-full bg-inherit no-underline pt-10 px-10 ${getScreenThemeStyles(
          screenTheme
        )}`}
      />
    </div>
  )
}

type Props = {
  onChange: ChangeEventHandler
  value: string
  isDisabled: boolean
  screenTheme: ScreenTheme
  onClick: () => void
}
