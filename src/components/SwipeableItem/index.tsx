import { Transition } from '@headlessui/react'
import { FC, ReactNode, useState } from 'react'
import { BiTrash } from 'react-icons/bi'
import { useSwipeable } from 'react-swipeable'

export const SwipeableItem: FC<Props> = ({ onLeave, children }) => {
  const [leftDir, rightDir] = ['-translate-x-full', 'translate-x-full']
  const [translateDir, setTranslateDir] = useState(leftDir)
  const [show, setShow] = useState(true)

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      setTranslateDir(leftDir)
      setShow(false)
    },
    onSwipedRight: () => {
      setShow(false)
      setTranslateDir(rightDir)
    },
  })

  return (
    <Transition show={show} afterLeave={onLeave} as={'li'} className=''>
      <Transition.Child
        className='h-20 max-h-20 w-full flex justify-between gap-4 items-center py-3'
        leave='transition ease-in-out duration-300 transform'
        leaveFrom='translate-x-0'
        leaveTo={`${translateDir}`}
        {...swipeHandlers}
      >
        {children}
        <div className='z-default h-full text-2xl text-gray-300' onClick={(e) => setShow(false)}>
          <BiTrash />
        </div>
      </Transition.Child>
    </Transition>
  )
}

type Props = {
  onLeave: () => void
  children: ReactNode
}
