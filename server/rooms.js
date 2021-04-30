import { getAllUsers } from './users'

export const roomExists = roomId => getAllUsers().some(user => user.roomId === roomId)

export const getUsers = roomId => getAllUsers().filter(user => user.roomId === roomId)
