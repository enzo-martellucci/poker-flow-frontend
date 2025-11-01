import type { InputHTMLAttributes } from 'react'

export const TextInputSize = {
    M: 'p-2.5 text-sm',
} as const
export type TextInputSizeType = (typeof TextInputSize)[keyof typeof TextInputSize]

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    variant?: TextInputSizeType
    value: string
    setValue: (value: string) => void
}

export default function TextInput({ variant = TextInputSize.M, value, setValue, className, ...props }: TextInputProps) {
    return <input type={'text'} className={`text-input ${className} ${variant}`} value={value} onChange={(e) => setValue(e.target.value)} {...props} />
}
