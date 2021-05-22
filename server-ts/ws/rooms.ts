import { Player } from '../core/player'
import { Game } from '../core/game'

export interface Room {
  id: string
  players: Player[]
  games: Game[]
  started: boolean
}

const rooms: { [key: string]: Room } = {}

export const createRoom = (roomId: string, player: Player): Room => {
  rooms[roomId] = {
    id: roomId,
    players: [{ ...player }],
    games: [],
    started: false
  }

  return rooms[roomId]
}

export const addPlayer = (roomId: string, player: Player): void => {
  const room = getRoom(roomId)
  if (!room) return

  room.players.push(player)
}

export const roomExists = (roomId: string): boolean =>
  getRoom(roomId) !== undefined

export const getRoom = (roomId: string): Room | undefined => rooms[roomId]

export const getPlayers = (roomId: string): Player[] => {
  const room = getRoom(roomId)
  return room ? room.players : []
}
