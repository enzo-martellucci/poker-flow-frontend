import type { InputHTMLAttributes } from 'react'

export const TextInputScale = {
    M: 'p-2.5 text-lg',
} as const
export type TextInputScaleType = (typeof TextInputScale)[keyof typeof TextInputScale]

export const TextInputColor = {
    ERROR: 'border-red-300',
    NORMAL: 'border-gray-300',
    SUCCESS: 'border-lime-400',
} as const
export type TextInputColorType = (typeof TextInputColor)[keyof typeof TextInputColor]

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    scale?: TextInputScaleType
    color?: TextInputColorType
}

export default function TextInput({ scale = TextInputScale.M, color = TextInputColor.NORMAL, className, ...props }: TextInputProps) {
    return <input type={'text'} className={`text-input ${className} ${scale} ${color}`} {...props} />
}
