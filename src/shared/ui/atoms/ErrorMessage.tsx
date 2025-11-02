import type { PropsWithChildren } from 'react'

export const ErrorMessageScale = {
    M: 'text-sm',
} as const
export type ErrorMessageScaleType = (typeof ErrorMessageScale)[keyof typeof ErrorMessageScale]

export interface ErrorProps {
    className?: string
    scale?: ErrorMessageScaleType
}

export default function ErrorMessage({ scale = ErrorMessageScale.M, className, children }: PropsWithChildren<ErrorProps>) {
    return <div className={`error ${className} ${scale}`}>{children}</div>
}
