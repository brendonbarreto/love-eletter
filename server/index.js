const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const { userJoin, getUserByEmail, userLeave } = require('./users')

const app = express()
const server = http.createServer(app)
const io = socketio(server, {
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
    userJoin(socket.id, roomId, name, email, imageUrl)
    console.log('blabla')
  })

  socket.on('disconnect', () => {
    userLeave(socket.id)
  })
})
