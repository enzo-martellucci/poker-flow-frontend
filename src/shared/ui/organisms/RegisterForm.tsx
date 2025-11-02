import { type ChangeEvent, type FormEvent, useState } from 'react'
import Label from '@/shared/ui/atoms/Label.tsx'
import TextInput from '@/shared/ui/atoms/TextInput.tsx'
import InputField from '@/shared/ui/molecules/InputField.tsx'
import ErrorMessage from '@/shared/ui/atoms/ErrorMessage.tsx'
import Button from '@/shared/ui/atoms/Button.tsx'

export interface RegisterFormProps {
    className?: string
    onSubmit: (username: string, email: string, password: string, passwordConfirmation: string) => void
}

export default function RegisterForm({ className, onSubmit }: RegisterFormProps) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const handlePasswordConfirmationChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordConfirmation(e.target.value)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        onSubmit(username, email, password, passwordConfirmation)
    }

    return (
        <form onSubmit={handleSubmit} className={`flex flex-col gap-y-2 sm:gap-y-4 ${className}`}>
            <InputField>
                <Label htmlFor="username">Username</Label>
                <TextInput id={'username'} name={'username'} value={username} onChange={handleUsernameChange} autoComplete={'username'} />
                <ErrorMessage></ErrorMessage>
            </InputField>
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
            <InputField>
                <Label htmlFor="passwordConfirmation">Password confirmation</Label>
                <TextInput
                    type={'password'}
                    id={'passwordConfirmation'}
                    name={'passwordConfirmation'}
                    value={passwordConfirmation}
                    onChange={handlePasswordConfirmationChange}
                    autoComplete={'new-password'}
                />
                <ErrorMessage></ErrorMessage>
            </InputField>
            <Button type="submit" className={'self-center'}>
                Register
            </Button>
        </form>
    )
}
