import { getCards } from './cards'

export const getNewDeck = () => {
  const cards = getCards()
  const deck = [].concat.apply([], cards
    .map(card => Array.from({ length: card.copies }, () => ({ ...card }))))
  return sortDeck(deck)
}

export const pickCardFromTop = deck => {
  const cardsFromTop = pickCardsFromTop(deck, 1)

  return {
    card: cardsFromTop.cards[0],
    remaining: cardsFromTop.remaining
  }
}

export const pickCardsFromTop = (deck, quantity) => {
  const deckCopy = [...deck]
  const cardsPicked = deckCopy.splice(deck.length - quantity, quantity)

  return {
    cards: cardsPicked.map(card => ({ ...card })),
    remaining: deckCopy
  }
}

export const sortDeck = deck => deck.sort(() => Math.random() - 0.5)
