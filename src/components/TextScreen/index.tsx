import React from 'react'

export const TextScreen = ({ onChange, value, isDisabled, fontSize, onClick }) => {
  return (
    <textarea
      value={value}
      disabled={isDisabled}
      onChange={onChange}
      onClick={() => onClick()}
      lang='th'
      className={`h-full w-full bg-inherit no-underline flex-1 pt-10 px-20 ${fontSize} `}
    />
  )
}
