import React, { MouseEventHandler } from 'react'
import cls from 'classnames'
import './index.scss'

export type ButtonProps = {
  onClick?: MouseEventHandler<HTMLDivElement>
  children?: React.ReactNode
  className?: string
}
const Button = ({ onClick, children, className }: ButtonProps) => {
  const cn = cls('aurora-button', className)

  return (
    <div onClick={onClick} className={cn}>
      {children}
    </div>
  )
}

export default Button
