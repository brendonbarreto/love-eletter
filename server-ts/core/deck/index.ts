import {Card, getCards} from './cards'

export const getNewDeck = (): Card[] => {
  const cards = getCards()
    const deck = cards.reduce((deck: Card[], card: Card) => {
        const cardCopies: Card[] = Array.from({ length: card.copies }, () => ({ ...card }))
        return deck.concat(cardCopies)
    }, [])

  return sortDeck(deck)
}

export const pickCardFromTop = (deck: Card[]) => {
  const cardsFromTop = pickCardsFromTop(deck, 1)

  return {
    card: cardsFromTop.cards[0],
    remaining: cardsFromTop.remaining
  }
}

export const pickCardsFromTop = (deck: Card[], quantity: number) => {
  const deckCopy = [...deck]
  const cardsPicked = deckCopy.splice(deck.length - quantity, quantity)

  return {
    cards: cardsPicked.map(card => ({ ...card })),
    remaining: deckCopy
  }
}

export const sortDeck = (deck: Card[]): Card[] => deck.sort(() => Math.random() - 0.5)
