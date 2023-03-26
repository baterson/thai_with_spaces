import React from 'react'
import { useInputTheme } from '../../../../state/hooks'
import { THAI_FONTS } from '../../../../styles/inputTheme'

export const Font = () => {
  const { setInputThemeValue } = useInputTheme()

  return (
    <div className='flex flex-col w-full h-full'>
      <ul className='text-2xl px-4 flex flex-col pt-4 gap-10 overflow-y-auto'>
        {THAI_FONTS.map((font) => (
          <li
            key={font}
            onClick={() => setInputThemeValue({ font })}
            className={`${font} flex gap-2 font-normal border-b pb-4 border-gray-100 dark:border-gray-600`}
          >
            <div className='truncate'>ข้อคอข้อคอข้อคอข้อคอข้อคอข้อคอข้อคอข้อคอ</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
