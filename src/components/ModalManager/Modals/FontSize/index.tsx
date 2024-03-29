import React from 'react'
import { useInputTheme } from '../../../../state/hooks'
import { FONT_SIZES } from '../../../../styles/inputTheme'

const FONT_SIZE_NAMES = {
  [FONT_SIZES[0]]: 20,
  [FONT_SIZES[1]]: 32,
  [FONT_SIZES[2]]: 36,
  [FONT_SIZES[3]]: 40,
  [FONT_SIZES[4]]: 48,
  [FONT_SIZES[5]]: 60,
  [FONT_SIZES[6]]: 72,
}

export const FontSize = () => {
  const { setInputThemeValue } = useInputTheme()

  return (
    <div className='flex flex-col w-full h-full'>
      <ul className='px-4 flex flex-col pt-4 gap-10 overflow-y-auto'>
        {FONT_SIZES.map((fontSize) => (
          <li
            key={fontSize}
            onClick={() => setInputThemeValue({ fontSize })}
            className={`${fontSize} flex gap-2 font-normal border-b pb-4 border-gray-100 dark:border-gray-600`}
          >
            <div>{FONT_SIZE_NAMES[fontSize]}</div>
            <div className='truncate'>ข้อคอข้อคอข้อคอข้อคอ</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
