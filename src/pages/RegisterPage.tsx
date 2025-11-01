import { Link } from 'react-router'
import icon from '@/assets/images/icon.svg'
import RegisterForm from '@/components/ui/organisms/RegisterForm.tsx'

export default function RegisterPage() {
    const handleSubmit = (username: string, email: string, password: string, passwordConfirmation: string) => {
        console.log(username, email, password, passwordConfirmation)
    }

    return (
        <main className={'flex h-full flex-col items-center justify-center gap-y-8 p-4'}>
            <Link to={'/'} className={'mb-8'}>
                <h1 className={'flex w-full items-center justify-center gap-x-4'}>
                    <img src={icon} alt={'PokerFlow logo'} className={'h-16 sm:h-24'} />
                    <span className={'text-center text-5xl sm:text-7xl'}>Poker Flow</span>
                </h1>
            </Link>
            <RegisterForm onSubmit={handleSubmit} />
        </main>
    )
}
