import { getCurrentPlayer, getLastPlayerWhoPlayed } from '../index'

const JOHN = {
  id: 1,
  name: 'John'
}
const LEO = {
  id: 2,
  name: 'Leo'
}
const PLAYERS = [JOHN, LEO]

describe('player', () => {
  describe('getLastPlayerWhoPlayed', () => {
    it('should return null when no one played yet', () => {
      const game = { players: PLAYERS, turns: [] }

      const lastPlayerWhoPlayed = getLastPlayerWhoPlayed(game)

      expect(lastPlayerWhoPlayed).toBeNull()
    })

    it('should return when only one turn was played', () => {
      const game = { players: PLAYERS, turns: [{ player: JOHN }] }

      const lastPlayerWhoPlayed = getLastPlayerWhoPlayed(game)

      expect(lastPlayerWhoPlayed).toStrictEqual(JOHN)
    })

    it('should return player from last turn', () => {
      const game = { players: PLAYERS, turns: [{ player: JOHN }, { player: LEO }] }

      const lastPlayerWhoPlayed = getLastPlayerWhoPlayed(game)

      expect(lastPlayerWhoPlayed).toStrictEqual(LEO)
    })

    it('should return player when last was disconnected', () => {
      const game = { players: [JOHN], turns: [{ player: JOHN }, { player: LEO }] }

      const lastPlayerWhoPlayed = getLastPlayerWhoPlayed(game)

      expect(lastPlayerWhoPlayed).toStrictEqual(JOHN)
    })

    it('should return null when all players who played where disconneted', () => {
      const game = { players: [LEO], turns: [{ player: JOHN }] }

      const lastPlayerWhoPlayed = getLastPlayerWhoPlayed(game)

      expect(lastPlayerWhoPlayed).toBeNull()
    })
  })

  describe('getCurrentPlayer', () => {
    it('should return first player when no one played yet', () => {
      const game = { players: PLAYERS, turns: [] }

      const currentPlayer = getCurrentPlayer(game)

      expect(currentPlayer).toStrictEqual(JOHN)
    })

    it('should return first player when last player who played is the last from list', () => {
      const game = { players: PLAYERS, turns: [{ player: JOHN }, { player: LEO }] }

      const currentPlayer = getCurrentPlayer(game)

      expect(currentPlayer).toStrictEqual(JOHN)
    })

    it('should return next player', () => {
      const game = { players: PLAYERS, turns: [{ player: JOHN }, { player: LEO }, { player: JOHN }] }

      const currentPlayer = getCurrentPlayer(game)

      expect(currentPlayer).toStrictEqual(LEO)
    })
  })
})
