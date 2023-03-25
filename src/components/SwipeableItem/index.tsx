import { Transition } from '@headlessui/react'
import { FC, ReactNode, useState } from 'react'
import { BiTrash } from 'react-icons/bi'
import { useSwipeable } from 'react-swipeable'
import { useHistory } from '../../state/hooks'

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
    <Transition appear={true} show={show} afterLeave={onLeave} as={'li'}>
      <Transition.Child
        as={'div'}
        className='w-full flex justify-between gap-4 items-center py-3 h-20 max-h-20'
        leave='transition duration-300'
        leaveFrom='translate-x-0'
        leaveTo={translateDir}
        {...swipeHandlers}
      >
        {children}
        <div
          className='h-full text-2xl text-gray-500'
          onClick={(e) => {
            setShow(false)
          }}
        >
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
