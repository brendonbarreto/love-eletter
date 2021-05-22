import { Card } from '../deck/cards'

export interface Player {
  id: string
  roomId: string
  name: string
  email: string
  imageUrl: string
  hand: Card[]
}
