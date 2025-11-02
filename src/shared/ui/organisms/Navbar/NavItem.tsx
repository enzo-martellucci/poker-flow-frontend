import type { PropsWithChildren } from 'react'
import { NavLink } from 'react-router'

export interface NavbarProps {
    className?: string
    to: string
}

const baseClass = 'flex items-center overflow-x-hidden text-2xl rounded-lg p-4 font-light'
const activeClass = `${baseClass} bg-violet-200 hover:text-white hover:bg-violet-300`
const inactiveClass = `${baseClass} hover:text-white hover:bg-violet-300`

export default function NavItem({ className, to, children }: PropsWithChildren<NavbarProps>) {
    return (
        <li className={`${className}`}>
            <NavLink to={to} className={({ isActive }) => `${isActive ? activeClass : inactiveClass}`}>
                {children}
            </NavLink>
        </li>
    )
}
