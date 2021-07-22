import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  onClick?: () => void
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  label = 'Submit',
  ...props
}: ButtonProps) => (
  <button type="button" {...props}>
    {label}
  </button>
)

export { ButtonProps, Button }
