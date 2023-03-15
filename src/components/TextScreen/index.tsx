import React, { ChangeEventHandler, FC } from 'react'
import { initialScreenTheme, getScreenThemeStyles, ScreenTheme } from '../../utils/screenTheme'

export const TextScreen: FC<Props> = ({ onChange, value, isDisabled, screenTheme }) => {
  const placeholder = isDisabled ? '' : 'Add Thai text here...'
  const emptyStyles = initialScreenTheme.fontSize

  return (
    <textarea
      placeholder={placeholder}
      data-testid='text-screen'
      value={value}
      disabled={isDisabled}
      onChange={onChange}
      lang='th'
      className={`bg-white h-full w-full no-underline p-2 resize-none flex-1 rounded-b-3xl
        ${value ? getScreenThemeStyles(screenTheme) : emptyStyles}`}
    />
  )
}

type Props = {
  onChange: ChangeEventHandler
  value: string
  isDisabled: boolean
  screenTheme: ScreenTheme
}
