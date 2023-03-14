import React, { ChangeEventHandler, FC } from 'react'
import { initialScreenTheme, getScreenThemeStyles, ScreenTheme } from '../../utils/screenTheme'

export const TextScreen: FC<Props> = ({ onChange, value, isDisabled, screenTheme, onClick }) => {
  const placeholder = isDisabled ? '' : 'Add Thai text here...'
  const emptyStyles = initialScreenTheme.fontSize

  return (
    <div className={`h-full w-full flex-1 pt-6 mb-6 border-b`} onClick={() => onClick()}>
      <textarea
        placeholder={placeholder}
        data-testid='text-screen'
        value={value}
        disabled={isDisabled}
        onChange={onChange}
        lang='th'
        className={`h-full w-full no-underline rounded-lg bg-white p-2 resize-none
        ${value ? getScreenThemeStyles(screenTheme) : emptyStyles}`}
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
