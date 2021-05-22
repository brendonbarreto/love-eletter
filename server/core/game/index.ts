import { getNewDeck, pickCardsFromTop, pickCardFromTop } from '../deck'
import { Card } from '../deck/cards'
import { Player } from '../player'

export interface Game {
  deck: Card[]
  removedCard: Card
  players: Player[]
  turns: []
}

export const start = (playerInfos: Player[]): Game => {
  const playersInitialCards = pickCardsFromTop(getNewDeck(), playerInfos.length)

  const players = playerInfos.map((playerInfo) => ({
    ...playerInfo,
    hand: [playersInitialCards.cards.pop()!]
  }))

  const { card, remaining } = pickCardFromTop(playersInitialCards.remaining)

  return {
    deck: remaining,
    removedCard: card,
    players: players,
    turns: []
  }
}
