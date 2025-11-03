import Button, { ButtonScale } from '@/shared/ui/atoms/Button.tsx'

import { loadCards } from '@/core/utils/cardUtils'

const spades = loadCards('regular', 'spades').array
const clubs = loadCards('regular', 'clubs').array
const hearts = loadCards('regular', 'hearts').array
const diamonds = loadCards('regular', 'diamonds').array

export default function RangePage() {
    return (
        <>
            <h1 className={'mt-4 mb-8 text-center text-5xl md:text-7xl'}>Ranges</h1>
            <div className={'grid auto-rows-fr grid-cols-2 gap-8'}>
                <div>
                    <h2 className={'mb-1 text-xl lg:text-3xl'}>Minimum stack</h2>
                    <ul className={'flex justify-stretch gap-x-2 lg:gap-x-4'}>
                        <li className={'flex-1'}>
                            <Button scale={ButtonScale.S}>25BB</Button>
                        </li>
                        <li className={'flex-1'}>
                            <Button scale={ButtonScale.S}>20BB</Button>
                        </li>
                        <li className={'flex-1'}>
                            <Button scale={ButtonScale.S}>15BB</Button>
                        </li>
                        <li className={'flex-1'}>
                            <Button scale={ButtonScale.S}>10BB</Button>
                        </li>
                        <li className={'flex-1'}>
                            <Button scale={ButtonScale.S}>5BB</Button>
                        </li>
                    </ul>
                </div>
                <div className={'row-span-2'}>
                    <h2 className={'mb-1 text-xl lg:text-3xl'}>Hand</h2>
                    <ul className={'mb-2 flex gap-x-2'}>
                        {spades.map((e) => (
                            <li key={e.card}>
                                <img src={e.url} alt={`${e.card} of clubs`} className={'w-full'} />
                            </li>
                        ))}
                    </ul>
                    <ul className={'flex gap-x-2'}>
                        {diamonds.map((e) => (
                            <li key={e.card}>
                                <img src={e.url} alt={`${e.card} of clubs`} className={'w-full'} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className={'mb-1 text-xl lg:text-3xl'}>Position</h2>
                    <ul className={'flex justify-stretch gap-x-2 lg:gap-x-4'}>
                        <li className={'flex-1'}>
                            <Button scale={ButtonScale.S}>Button</Button>
                        </li>
                        <li className={'flex-1'}>
                            <Button scale={ButtonScale.S}>Small Blind</Button>
                        </li>
                        <li className={'flex-1'}>
                            <Button scale={ButtonScale.S}>Big Blind</Button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
