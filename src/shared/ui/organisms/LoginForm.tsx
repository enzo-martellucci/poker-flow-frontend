import { type ChangeEvent, type FormEvent, useState } from 'react'
import Button from '@/shared/ui/atoms/Button.tsx'
import InputField from '@/shared/ui/molecules/InputField.tsx'
import Label from '@/shared/ui/atoms/Label.tsx'
import TextInput from '@/shared/ui/atoms/TextInput.tsx'
import ErrorMessage from '@/shared/ui/atoms/ErrorMessage.tsx'

export interface LoginFormProps {
    className?: string
    onSubmit: (email: string, password: string) => void
}

export default function LoginForm({ className, onSubmit }: LoginFormProps) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        onSubmit(email, password)
    }

    return (
        <form onSubmit={handleSubmit} className={`flex flex-col gap-y-2 sm:gap-y-4 ${className}`}>
            <InputField>
                <Label htmlFor="email">Email</Label>
                <TextInput id={'email'} name={'email'} value={email} onChange={handleEmailChange} autoComplete={'email'} />
                <ErrorMessage></ErrorMessage>
            </InputField>
            <InputField>
                <Label htmlFor="password">Password</Label>
                <TextInput type="password" id={'password'} name={'password'} value={password} onChange={handlePasswordChange} autoComplete={'new-password'} />
                <ErrorMessage></ErrorMessage>
            </InputField>
            <Button type="submit" className={'self-center'}>
                Login
            </Button>
        </form>
    )
}
