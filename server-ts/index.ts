import express from 'express'
import http from 'http'
import { Server } from 'socket.io'

import { addPlayer, createRoom, roomExists } from './ws/rooms'
import { playerJoins, getPlayerByEmail, playerLeaves } from './ws/players'

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
})

const PORT = process.env.PORT || 8000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))

io.on('connection', (socket) => {
  console.log('New WS Connection...')

  socket.emit('message', 'Welcome!')

  socket.on('createRoom', ({ name, imageUrl, email }) => {
    if (getPlayerByEmail(email)) {
      console.log('User already joined.')
      return
    }

    const roomId = Math.random().toString(36).substr(2, 9)
    console.log(roomId)
    const user = playerJoins(socket.id, roomId, name, email, imageUrl)
    const room = createRoom(roomId, user)

    io.sockets.emit('joinedRoom', room)
  })

  socket.on('joinRoom', ({ name, imageUrl, email, roomId }) => {
    if (getPlayerByEmail(email)) {
      console.log('User already joined.')
      return
    }

    if (!roomExists(roomId)) {
      console.log('Unavailable room.')
      return
    }

    const user = playerJoins(socket.id, roomId, name, email, imageUrl)
    const room = addPlayer(roomId, user)

    io.sockets.emit('joinedRoom', room)
  })

  socket.on('disconnect', () => {
    playerLeaves(socket.id)
  })
})
