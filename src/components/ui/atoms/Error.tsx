import type { PropsWithChildren } from 'react'
import { type LabelSizeType } from '@/components/ui/atoms/Label.tsx'

export const ErrorSize = {
    M: 'text-sm',
} as const
export type ErrorSizeType = (typeof ErrorSize)[keyof typeof ErrorSize]

export interface ErrorProps {
    className?: string
    variant?: LabelSizeType
}

export default function Error({ variant = ErrorSize.M, className, children }: PropsWithChildren<ErrorProps>) {
    return <div className={`error ${className} ${variant}`}>{children}</div>
}
