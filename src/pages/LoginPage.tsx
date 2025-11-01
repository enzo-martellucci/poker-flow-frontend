import LoginForm from '@/components/ui/organisms/LoginForm.tsx'
import { Link } from 'react-router'
import icon from '@/assets/images/icon.svg'

export default function LoginPage() {
    const handleSubmit = (email: string, password: string) => {
        console.log(email, password)
    }

    return (
        <main className={'flex h-full flex-col items-center justify-center gap-y-8 p-4'}>
            <Link to={'/'} className={'mb-8'}>
                <h1 className={'flex w-full items-center justify-center gap-x-4'}>
                    <img src={icon} alt={'PokerFlow logo'} className={'h-16 sm:h-24'} />
                    <span className={'text-center text-5xl sm:text-7xl'}>Poker Flow</span>
                </h1>
            </Link>
            <LoginForm onSubmit={handleSubmit} />
        </main>
    )
}
