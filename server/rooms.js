const rooms = []

export const createRoom = (roomId, player) => {
    const room = {
        id: roomId,
        players: [{ ...player }],
        games: [],
        started: false
    }

    rooms.push(room)

    return room
}

export const addPlayer = (roomId, player) => {
    const room = getRoom(roomId)
    room.players.push(player)
}

export const roomExists = roomId => rooms.some(room => room.id === roomId)

export const getRoom = roomId => rooms.find(a => a.id === roomId)

export const getPlayers = roomId => {
    const room = getRoom(roomId)
    return room ? room.players : []
}
