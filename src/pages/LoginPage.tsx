import { Link, useNavigate } from 'react-router'
import icon from '@/assets/images/icon.png'
import LoginForm from '@/shared/ui/organisms/LoginForm.tsx'

export default function LoginPage() {
    const navigate = useNavigate()

    const handleSubmit = (email: string, password: string) => {
        console.log(email, password)
        navigate('/dashboard')
    }

    return (
        <main className={'flex h-full flex-col items-center justify-center gap-y-6 p-4 sm:gap-y-12'}>
            <Link to={'/'}>
                <h1 className={'flex items-center justify-center gap-x-4'}>
                    <img src={icon} alt={'PokerFlow logo'} className={'h-12 sm:h-24'} />
                    <span className={'text-center text-5xl sm:text-7xl'}>Poker Flow</span>
                </h1>
            </Link>
            <LoginForm onSubmit={handleSubmit} className={'w-full max-w-lg'} />
            <div className={'w-full max-w-lg'}>
                Not account yet ?{' '}
                <Link to={'/register'} className={'text-blue-400 hover:underline'}>
                    Register here
                </Link>
            </div>
        </main>
    )
}
