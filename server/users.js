const users = []

const userJoin = (id, roomId, name, email, imageUrl) => {
  users.push({
    id,
    roomId,
    name,
    email,
    imageUrl
  })
}

const userLeave = id => {
  const index = users.findIndex(user => user.id === id)
  if (index === -1) return

  return users.splice(index, 1)[0]
}

const getUserByEmail = email => users.find(user => user.email === email)

module.exports = {
  userJoin,
  getUserByEmail,
  userLeave
}
