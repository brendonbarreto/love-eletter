const { getCards } = require('./cards')

export const getNewDeck = () => {
  const cards = getCards()
  const deck = [].concat.apply([], cards
    .map(card => Array.from({ length: card.copies }, () => ({ ...card }))))
  return sortDeck(deck)
}

export const pickCardFromTop = deck => {
  const deckCopy = [...deck]

  return {
    card: { ...deckCopy.pop() },
    remaining: deckCopy
  }
}

export const sortDeck = deck => deck.sort(() => Math.random() - 0.5)
