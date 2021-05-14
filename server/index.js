import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import { getGame, startNewGame } from './games'
import { addPlayer, createRoom, roomExists } from './rooms.js'
import { userJoin, getUserByEmail, userLeave } from './users.js'

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

io.on('connection', socket => {
  console.log('New WS Connection...')

  socket.emit('message', 'Welcome!')

  socket.on('createRoom', ({ name, imageUrl, email }) => {
    if (getUserByEmail(email)) {
      console.log('User already joined.')
      return
    }

    const roomId = Math.random().toString(36).substr(2, 9)
    console.log(roomId)
    const user = userJoin(socket.id, roomId, name, email, imageUrl)
    const room = createRoom(roomId, user)

    socket.emit('joinedRoom', {
      room
    })
  })

  socket.on('joinRoom', ({ name, imageUrl, email, roomId }) => {
    if (getUserByEmail(email)) {
      console.log('User already joined.')
      return
    }

    if (!roomExists(roomId)) {
      console.log('Unavailable room.')
      return
    }

    const user = userJoin(socket.id, roomId, name, email, imageUrl)
    const room = addPlayer(roomId, user)

    socket.emit('joinedRoom', {
      room
    })
  })

  socket.on('disconnect', () => {
    userLeave(socket.id)
  })
})
