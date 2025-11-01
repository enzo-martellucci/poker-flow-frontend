import icon from '@/assets/images/icon.svg'
import {Link} from 'react-router'
import Button, {ButtonSize} from '@/components/ui/atoms/Button.tsx'

export default function HomePage() {
    return (
        <main className={'flex h-full flex-col items-center justify-center gap-y-24 p-4'}>
            <Link to={'/'}>
                <h1 className={'flex w-full items-center justify-center gap-x-4'}>
                    <img src={icon} alt={'PokerFlow logo'} className={'h-16 sm:h-24'} />
                    <span className={'text-center text-5xl sm:text-7xl'}>Poker Flow</span>
                </h1>
            </Link>

            <div className={'flex gap-x-12'}>
                <Link to="/login">
                    <Button variant={ButtonSize.XL}>Login</Button>
                </Link>
                <Link to="/register">
                    <Button variant={ButtonSize.XL}>Register</Button>
                </Link>
            </div>
        </main>
    )
}
