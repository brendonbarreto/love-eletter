const users = []

const userJoin = (id, roomId, name, email, imageUrl) => {
  const user = {
    id,
    roomId,
    name,
    email,
    imageUrl
  }
  users.push(user)

  return user
}

const userLeave = id => {
  const index = users.findIndex(user => user.id === id)
  if (index === -1) return

  return users.splice(index, 1)[0]
}

const getUserByEmail = email => users.find(user => user.email === email)

const getAllUsers = () => [...users]

module.exports = {
  userJoin,
  getUserByEmail,
  userLeave,
  getAllUsers
}
