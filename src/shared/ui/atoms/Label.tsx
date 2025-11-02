import type { LabelHTMLAttributes, PropsWithChildren } from 'react'

export const LabelScale = {
    M: 'text-xl',
} as const
export type LabelScaleType = (typeof LabelScale)[keyof typeof LabelScale]

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    scale?: LabelScaleType
}

export default function Label({ scale = LabelScale.M, className, children, ...props }: PropsWithChildren<LabelProps>) {
    return (
        <label className={`label ${className} ${scale}`} {...props}>
            {children}
        </label>
    )
}
