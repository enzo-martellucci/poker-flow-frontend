import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

export const ButtonSize = {
    XS: 'px-3 py-2 text-xs',
    S: 'px-3 py-2 text-sm',
    M: 'px-5 py-2.5 text-sm',
    L: 'px-5 py-3 text-base',
    XL: 'px-6 py-3.5 text-lg',
} as const
export type ButtonSizeType = (typeof ButtonSize)[keyof typeof ButtonSize]

export const ButtonColor = {
    BASE: 'text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-300',
} as const
export type ButtonColorType = (typeof ButtonColor)[keyof typeof ButtonColor]

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonSizeType
    color?: ButtonColorType
}

export default function Button({ variant = ButtonSize.M, color = ButtonColor.BASE, className, children, ...props }: PropsWithChildren<ButtonProps>) {
    return (
        <button className={`button ${className} ${variant} ${color}`} {...props}>
            {children}
        </button>
    )
}
