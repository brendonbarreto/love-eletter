import { start } from './core/game'
import { getPlayers } from './rooms'
const games = {}

export const startNewGame = roomId => {
  const players = getPlayers(roomId)

  const game = start(players)
  games[roomId] = game

  return game
}

export const getGame = roomId => games[roomId]
