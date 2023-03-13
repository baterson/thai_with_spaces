import React, { ChangeEventHandler, FC } from 'react'
import { getScreenThemeStyles, ScreenTheme } from '../../utils/screenTheme'

export const TextScreen: FC<Props> = ({
  onChange,
  value,
  thaiFont,
  isDisabled,
  screenTheme,
  onClick,
}) => {
  const placeholder = isDisabled ? '' : 'Start Typing...'

  return (
    <div
      className={`h-full w-full flex-1 border-2 rounded-lg border-opacity-20 border-violet-900`}
      onClick={() => onClick()}
    >
      <textarea
        placeholder={placeholder}
        data-testid='text-screen'
        value={value}
        disabled={isDisabled}
        onChange={onChange}
        lang='th'
        className={`h-full text-3xl w-full no-underline rounded-lg bg-white p-2 resize-none
        ${getScreenThemeStyles(screenTheme)}`}
      />
    </div>
  )
}
// 'font-notoSerifThai'
// font-notoSansThai
type Props = {
  onChange: ChangeEventHandler
  value: string
  isDisabled: boolean
  screenTheme: ScreenTheme
  onClick: () => void
}
