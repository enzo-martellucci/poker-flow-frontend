import { Link, useNavigate } from 'react-router'
import icon from '@/assets/images/icon.png'
import RegisterForm from '@/shared/ui/organisms/RegisterForm.tsx'

export default function RegisterPage() {
    const navigate = useNavigate()

    const handleSubmit = (username: string, email: string, password: string, passwordConfirmation: string) => {
        console.log(username, email, password, passwordConfirmation)
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
            <RegisterForm onSubmit={handleSubmit} className={'w-full max-w-lg'} />
            <div className={'w-full max-w-lg'}>
                Already have an account ?{' '}
                <Link to={'/login'} className={'text-blue-400 hover:underline'}>
                    Login here
                </Link>
            </div>
        </main>
    )
}
