import React from 'react'

export const Button = ({ children, onClick }) => {
  return (
    <button className={`h-20 text-2xl border-t-[1px] ${window.colors.btn}`} onClick={onClick}>
      {children}
    </button>
  )
}
