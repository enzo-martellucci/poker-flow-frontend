import icon from '@/assets/images/icon.png'
import { Link } from 'react-router'
import Button from '@/shared/ui/atoms/Button.tsx'

export default function HomePage() {
    return (
        <main className={'flex h-full flex-col items-center justify-center gap-y-24 p-4'}>
            <Link to={'/'}>
                <h1 className={'flex w-full items-center justify-center gap-x-4'}>
                    <img src={icon} alt={'Poker Flow logo'} className={'h-12 sm:h-24'} />
                    <span className={'text-center text-5xl sm:text-7xl'}>Poker Flow</span>
                </h1>
            </Link>

            <div className={'flex gap-x-6 sm:gap-x-12'}>
                <Link to="/login">
                    <Button>Login</Button>
                </Link>
                <Link to="/register">
                    <Button>Register</Button>
                </Link>
            </div>
        </main>
    )
}
