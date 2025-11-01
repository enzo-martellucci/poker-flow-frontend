import { Outlet } from 'react-router'

export default function BaseLayout() {
    return (
        <div className={'gradient-background h-screen font-[Arial] text-white'}>
            <Outlet />
        </div>
    )
}
