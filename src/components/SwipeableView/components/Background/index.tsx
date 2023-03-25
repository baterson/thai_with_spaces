import React, { FC } from 'react'

export const Background: FC<Props> = ({ isHidden }) => {
  const styles = isHidden ? 'hidden' : ''

  return (
    <div
      className={`${styles} transition-none absolute z-20  h-[140%] w-full bg-opacity-80 bg-gray-500`}
    ></div>
  )
}

type Props = {
  isHidden: boolean
}
