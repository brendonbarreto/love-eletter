import { getNewDeck, pickCardsFromTop, pickCardFromTop } from '../deck'

export const start = playerInfos => {
  const playersInitialCards = pickCardsFromTop(getNewDeck(), playerInfos.length)

  const players = playerInfos.map(playerInfo => ({
    info: playerInfo,
    hand: [{ ...playersInitialCards.cards.pop() }]
  }))

  const { card, remaining } = pickCardFromTop(playersInitialCards.remaining)

  return {
    deck: remaining,
    removedCard: card,
    players: players,
    turns: []
  }
}
