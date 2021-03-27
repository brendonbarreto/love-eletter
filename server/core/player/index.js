export const playerDisconnected = (game, player) => game.players.find(p => p.id === player.id) === undefined

export const getLastPlayerWhoPlayed = (game, turns = game.turns) => {
  if (turns.length === 0) return null

  const turnsCopy = [...turns]
  const lastTurn = turnsCopy.pop()
  if (playerDisconnected(game, lastTurn.player)) return getLastPlayerWhoPlayed(game, turnsCopy)

  return lastTurn.player
}

export const getCurrentPlayer = game => {
  const lastPlayerWhoPlayed = getLastPlayerWhoPlayed(game)

  if (lastPlayerWhoPlayed === null) return [...game.players].shift()

  const index = game.players.findIndex(p => p.id === lastPlayerWhoPlayed.id)
  const nextPlayer = game.players[index + 1]
  if (nextPlayer === undefined) return [...game.players].shift()

  return { ...nextPlayer }
}
