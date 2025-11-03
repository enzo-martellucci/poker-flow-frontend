export const CARDS = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'] as const
export type Card = (typeof CARDS)[number]
export type Suit = 'clubs' | 'diamonds' | 'hearts' | 'spades'
export type CardType = 'regular' | 'square'
export type CardItem = {
    card: Card
    url: string
}

export type CardMap = Record<Card, string>

function mapCards(cardRecord: Record<string, string>): CardMap {
    const result: Partial<CardMap> = {}
    for (const path in cardRecord) {
        const match = path.match(/\/([2-9TJQKA])\.svg$/)
        if (match) {
            const card = match[1] as Card
            result[card] = cardRecord[path]
        }
    }
    return result as CardMap
}

const REGULAR_CLUBS = import.meta.glob('@/assets/images/cards/regular/clubs/*.svg', { eager: true, import: 'default' }) as Record<string, string>
const REGULAR_DIAMONDS = import.meta.glob('@/assets/images/cards/regular/diamonds/*.svg', { eager: true, import: 'default' }) as Record<string, string>
const REGULAR_HEARTS = import.meta.glob('@/assets/images/cards/regular/hearts/*.svg', { eager: true, import: 'default' }) as Record<string, string>
const REGULAR_SPADES = import.meta.glob('@/assets/images/cards/regular/spades/*.svg', { eager: true, import: 'default' }) as Record<string, string>

const SQUARE_CLUBS = import.meta.glob('@/assets/images/cards/square/clubs/*.svg', { eager: true, import: 'default' }) as Record<string, string>
const SQUARE_DIAMONDS = import.meta.glob('@/assets/images/cards/square/diamonds/*.svg', { eager: true, import: 'default' }) as Record<string, string>
const SQUARE_HEARTS = import.meta.glob('@/assets/images/cards/square/hearts/*.svg', { eager: true, import: 'default' }) as Record<string, string>
const SQUARE_SPADES = import.meta.glob('@/assets/images/cards/square/spades/*.svg', { eager: true, import: 'default' }) as Record<string, string>

const CARD_IMPORTS: Record<CardType, Record<Suit, Record<string, string>>> = {
    regular: {
        clubs: REGULAR_CLUBS,
        diamonds: REGULAR_DIAMONDS,
        hearts: REGULAR_HEARTS,
        spades: REGULAR_SPADES,
    },
    square: {
        clubs: SQUARE_CLUBS,
        diamonds: SQUARE_DIAMONDS,
        hearts: SQUARE_HEARTS,
        spades: SQUARE_SPADES,
    },
}

export function loadCards(type: CardType, suit: Suit): { map: CardMap; array: CardItem[] } {
    const imports = CARD_IMPORTS[type][suit] as Record<string, string>
    const map = mapCards(imports)

    const array: CardItem[] = CARDS.map((card) => ({
        card,
        url: map[card],
    }))

    return { map, array }
}
