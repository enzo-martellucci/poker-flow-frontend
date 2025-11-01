import type { LabelHTMLAttributes, PropsWithChildren } from 'react'

export const LabelSize = {
    M: 'text-sm'
} as const
export type LabelSizeType = (typeof LabelSize)[keyof typeof LabelSize]

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    variant?: LabelSizeType
}

export default function Label({ variant = LabelSize.M, className, children, ...props }: PropsWithChildren<LabelProps>) {
    return (
        <label className={`label ${className} ${variant}`} {...props}>
            {children}
        </label>
    )
}
