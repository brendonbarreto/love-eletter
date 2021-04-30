import { start } from './core/game'
import { getUsers } from './rooms'
const games = {}

export const startNewGame = roomId => {
  const users = getUsers(roomId)

  const game = start(users)
  games[roomId] = game

  return game
}

export const getGame = roomId => games[roomId]
