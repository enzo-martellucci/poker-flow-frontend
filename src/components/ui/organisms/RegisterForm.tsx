import InputField from '@/components/ui/molecules/InputField.tsx'
import Label from '@/components/ui/atoms/Label.tsx'
import TextInput from '@/components/ui/atoms/TextInput.tsx'
import { type FormEvent, useState } from 'react'
import Button, { ButtonSize } from '@/components/ui/atoms/Button.tsx'
import { Link, useNavigate } from 'react-router'
import Error from '@/components/ui/atoms/Error.tsx'

export interface RegisterFormProps {
    onSubmit: (username: string, email: string, password: string, passwordConfirmation: string) => void
}

export default function RegisterForm({ onSubmit }: RegisterFormProps) {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        onSubmit(username, email, password, passwordConfirmation)
        navigate('/')
    }

    return (
        <form onSubmit={handleSubmit} className={'flex w-full max-w-xl flex-col items-center gap-y-8'}>
            <div className={'flex w-full flex-col gap-y-4'}>
                <InputField>
                    <Label htmlFor="username">Username</Label>
                    <TextInput id={'username'} name={'username'} value={username} setValue={setUsername} autoComplete={'username'} />
                    <Error></Error>
                </InputField>
                <InputField>
                    <Label htmlFor="email">Email</Label>
                    <TextInput id={'email'} name={'email'} value={email} setValue={setEmail} autoComplete={'email'} />
                    <Error></Error>
                </InputField>
                <InputField>
                    <Label htmlFor="password">Password</Label>
                    <TextInput type="password" id={'password'} name={'password'} value={password} setValue={setPassword} autoComplete={'new-password'} />
                    <Error></Error>
                </InputField>
                <InputField>
                    <Label htmlFor="passwordConfirmation">Password confirmation</Label>
                    <TextInput
                        type={'password'}
                        id={'passwordConfirmation'}
                        name={'passwordConfirmation'}
                        value={passwordConfirmation}
                        setValue={setPasswordConfirmation}
                        autoComplete={'new-password'}
                    />
                    <Error></Error>
                </InputField>
            </div>

            <Button type="submit" variant={ButtonSize.XL}>
                Register
            </Button>

            <div className={'w-full'}>
                Already have an account ?{' '}
                <Link to={'/login'} className={'text-blue-400 hover:underline'}>
                    Login here
                </Link>
            </div>
        </form>
    )
}
