import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

export const ButtonScale = {
    NO_PADDING: 'text-3xl',
    FULL: 'w-full justify-center px-2 py-1 text-base sm:px-4 sm:py-2 sm:text-lg lg:px-6 lg:py-4 lg:text-2xl xl:text-3xl',
    S: 'px-3 py-2 text-xl',
    M: 'px-6 py-4 text-3xl',
    L: 'todo',
    XL: 'todo',
} as const
export type ButtonScaleType = (typeof ButtonScale)[keyof typeof ButtonScale]

export const ButtonColor = {
    LIME: 'text-white bg-lime-700 hover:bg-lime-800 shadow-lime-700 hover:shadow-lime-800',
    GRAY: 'text-white bg-gray-500 text-white shadow-gray-300',
} as const
export type ButtonColorType = (typeof ButtonColor)[keyof typeof ButtonColor]

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    scale?: ButtonScaleType
    color?: ButtonColorType
}

export default function Button({ scale = ButtonScale.M, color = ButtonColor.LIME, className, children, ...props }: PropsWithChildren<ButtonProps>) {
    return (
        <button className={`button ${className} ${scale} ${color}`} {...props}>
            {children}
        </button>
    )
}
