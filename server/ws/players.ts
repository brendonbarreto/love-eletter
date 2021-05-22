import { Player } from '../core/player'

const players: Player[] = []

export const playerJoins = (
  id: string,
  roomId: string,
  name: string,
  email: string,
  imageUrl: string
): Player => {
  const player = {
    id,
    roomId,
    name,
    email,
    imageUrl,
    hand: []
  }
  players.push(player)

  return player
}

export const playerLeaves = (id: string): Player | undefined => {
  const index = players.findIndex((player) => player.id === id)
  if (index === -1) return

  return players.splice(index, 1)[0]
}

export const getPlayerByEmail = (email: string): Player | undefined =>
  players.find((player) => player.email === email)

export const getAllUsers = (): Player[] => [...players]
