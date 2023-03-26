import React from 'react'
import { useInput, useInputTheme } from '../../state/hooks'
import { initialInputTheme, getInputThemeStyles } from '../../styles/inputTheme'
import { segmentText } from '../../utils/segmenter'

export const MainInput = React.forwardRef((_, ref) => {
  const { inputValue, isInputActive, setInputValue } = useInput()
  const { inputTheme } = useInputTheme()

  const placeholder = isInputActive ? 'Add Thai text here...' : ''
  const emptyStyles = initialInputTheme.fontSize
  const value = isInputActive ? inputValue : segmentText(inputValue)

  return (
    <textarea
      placeholder={placeholder}
      data-testid='main-input'
      value={value}
      ref={ref}
      disabled={!isInputActive}
      onChange={(e) => setInputValue(e.target.value)}
      lang='th'
      className={`bg-screenArea text-black h-full w-full no-underline  resize-none p-2 flex-1 border-0 rounded-b-3xl
        ${inputValue ? getInputThemeStyles(inputTheme) : emptyStyles}
            absolute  dark:bg-screenArea-dark  dark:text-white
        `}
    />
  )
})
