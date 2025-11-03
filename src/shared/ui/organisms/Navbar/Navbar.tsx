import { useState } from 'react'
import Button, { ButtonColor, ButtonScale } from '@/shared/ui/atoms/Button.tsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faDice, faLightbulb, faRightFromBracket, faShapes, faTable, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router'
import logo from '@/assets/images/icon.png'
import NavItem from '@/shared/ui/organisms/Navbar/NavItem.tsx'

export default function Navbar() {
    const [expanded, setExpanded] = useState(false)

    const toggleExpanded = () => setExpanded(!expanded)

    const maxWidth = expanded ? 'max-w-xs' : 'max-w-24'
    const translate = expanded ? 'translate-none' : '-translate-x-full'
    const width = expanded ? 'w-full' : 'w-0'
    const gap = expanded ? 'ml-4' : 'ml-0'
    const rotateY = expanded ? '' : 'rotate-y-180'

    return (
        <aside className={`${maxWidth} ${translate} absolute flex h-full flex-col bg-sky-100 p-4 shadow-2xl transition-all md:relative md:translate-none`}>
            <Link to={'/dashboard'} className={'mt-6 mb-12 sm:mb-40'}>
                <div className={`flex items-center`}>
                    <img src={logo} alt="Poker Flow logo" className={`w-[62px]`} />
                    <span className={`${width} ${gap} overflow-x-hidden text-4xl text-nowrap transition-all`}>Poker Flow</span>
                </div>
            </Link>
            <nav className={'flex-1'}>
                <ul className={'flex h-full flex-col gap-y-4'}>
                    <NavItem to={'/dashboard/play'}>
                        <FontAwesomeIcon icon={faDice} className={`shrink-0`} />
                        <span className={`${width} ${gap} overflow-x-hidden transition-all`}>Play</span>
                    </NavItem>
                    <NavItem to={'/dashboard/learn'}>
                        <FontAwesomeIcon icon={faLightbulb} className={`shrink-0`} />
                        <span className={`${width} ${gap} overflow-x-hidden transition-all`}>Learn</span>
                    </NavItem>
                    <NavItem to={'/dashboard/ranges'}>
                        <FontAwesomeIcon icon={faTable} className={`shrink-0`} />
                        <span className={`${width} ${gap} overflow-x-hidden transition-all`}>Ranges</span>
                    </NavItem>
                    <NavItem to={'/dashboard/actions'}>
                        <FontAwesomeIcon icon={faShapes} className={`shrink-0`} />
                        <span className={`${width} ${gap} overflow-x-hidden transition-all`}>Actions</span>
                    </NavItem>
                    <NavItem
                        to={'/dashboard/profile'}
                        className={'mt-auto before:mb-3 before:block before:h-0.5 before:w-full before:rounded-full before:bg-black'}
                    >
                        <FontAwesomeIcon icon={faUser} className={`shrink-0`} />
                        <span className={`${width} ${gap} overflow-x-hidden transition-all`}>Profile</span>
                    </NavItem>
                    <NavItem to={'/dashboard/logout'}>
                        <FontAwesomeIcon icon={faRightFromBracket} className={`shrink-0`} />
                        <span className={`${width} ${gap} overflow-x-hidden transition-all`}>Logout</span>
                    </NavItem>
                </ul>
            </nav>
            <Button
                className={'absolute top-5 -right-5 translate-x-full py-2 opacity-30'}
                scale={ButtonScale.NO_PADDING}
                color={ButtonColor.GRAY}
                onClick={toggleExpanded}
            >
                <FontAwesomeIcon icon={faChevronLeft} className={`${rotateY} transition-all`} />
            </Button>
        </aside>
    )
}
