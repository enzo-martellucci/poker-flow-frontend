import type { ReactNode } from 'react'

export interface InputFieldProps {
    className?: string
    children?: ReactNode
}

export default function InputField({ className, children }: InputFieldProps) {
    return <div className={`flex w-full flex-col gap-y-1 ${className}`}>{children}</div>
}
