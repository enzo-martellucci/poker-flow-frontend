import InputField from '@/components/ui/molecules/InputField.tsx'
import Label from '@/components/ui/atoms/Label.tsx'
import TextInput from '@/components/ui/atoms/TextInput.tsx'
import {type FormEvent, useState} from 'react'
import Button, {ButtonSize} from '@/components/ui/atoms/Button.tsx'
import {Link, useNavigate} from 'react-router'
import Error from '@/components/ui/atoms/Error.tsx'

export interface LoginFormProps {
    onSubmit: (email: string, password: string) => void
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        onSubmit(email, password)
        navigate('/')
    }

    return (
        <form onSubmit={handleSubmit} className={'flex w-full max-w-xl flex-col items-center gap-y-8'}>
            <div className={'flex w-full flex-col gap-y-4'}>
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
            </div>

            <Button type="submit" variant={ButtonSize.XL}>
                Login
            </Button>

            <div className={'w-full'}>
                Not account yet ?{' '}
                <Link to={'/register'} className={'text-blue-400 hover:underline'}>
                    Register here
                </Link>
            </div>
        </form>
    )
}
