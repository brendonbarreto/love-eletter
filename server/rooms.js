const { getAllUsers } = require('./users')

const roomExists = roomId => getAllUsers().some(user => user.roomId === roomId)

module.exports = {
  roomExists
}
