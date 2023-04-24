import { ButtonHTMLAttributes } from "react";
import {SpinnerGap} from '@phosphor-icons/react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &{
  children?: React.ReactNode;
  isLoading?: boolean;
}

export default function Button({children, isLoading, ...rest}: ButtonProps) {
  return (
    <button disabled={isLoading} className="Button violet mt-3" {...rest}>
      {isLoading && <SpinnerGap size={24} className="animate-spin" />}
      {children}
    </button>
  )
}
