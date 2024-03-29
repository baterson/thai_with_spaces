import React from 'react'
import { FiGithub } from 'react-icons/fi'
import { useInput, useModals, useHistory } from '../../../../state/hooks'

const EXAMPLE_INPUT =
  'วัวสี่ตัวเป็นมิตรที่รักใคร่กลมเกลียวกันมาก ในยามกินหรือ ยามนอนก็ไม่เคยแยกจากกัน เมื่อใดที่ราชสีห์หมายจะจู่โจม มันก็ จะหันหลังชนกัน แล้วหันหัวที่มีเขาแหลมคมเผชิญหน้ากับราชสีห์'

export const About = () => {
  const { setInputValue } = useInput()
  const { addToHistory } = useHistory()
  const { closeModal } = useModals()
  const handleExampleClick = () => {
    setInputValue(EXAMPLE_INPUT)
    addToHistory(EXAMPLE_INPUT)
    closeModal()
  }

  return (
    <div className='flex flex-col gap-4 px-4 py-4 w-full h-full'>
      <p className='text-xl'>
        Add some Thai text on the screen and click on the button to add spaces
      </p>
      <p className='text-blue-300 mb-6 text-xl' onClick={handleExampleClick}>
        Try an example
      </p>
      <p>App purpose is to help a beginner read Thai. Because Thai language rarely use spaces.</p>
      <p>
        It's an opensource project. You can check the source code on the{' '}
        <a href='https://github.com/baterson/thai_with_spaces' className='text-blue-300'>
          Github
        </a>
        <span className='ml-2 text-blue-300 text-2xl  inline-block'>
          <FiGithub />
        </span>
      </p>
    </div>
  )
}
