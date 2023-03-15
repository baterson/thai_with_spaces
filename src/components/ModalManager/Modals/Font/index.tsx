import React from 'react'
import { THAI_FONTS } from '../../../../utils/screenTheme'

export const Font = ({ setFont }) => {
  return (
    <div className='flex flex-col w-full h-full'>
      <ul className='text-2xl px-4 flex flex-col pt-4 gap-10 overflow-y-auto'>
        {THAI_FONTS.map((font, i) => (
          <div>
            <li
              onClick={() => setFont(font)}
              className={`${font} flex gap-2 font-normal border-b pb-4 border-gray-100`}
            >
              <div>{i + 1}</div>
              <div className='truncate'>ข้อคอข้อคอข้อคอข้อคอข้อคอข้อคอข้อคอข้อคอ</div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  )
}
