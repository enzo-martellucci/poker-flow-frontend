import { Outlet } from 'react-router'
import Navbar from '@/shared/ui/organisms/Navbar/Navbar.tsx'

export default function DashboardTemplate() {
    return (
        <div className={'relative flex h-full'}>
            <Navbar />
            <main className={'p-4'}>
                <Outlet />
            </main>
        </div>
    )
}
