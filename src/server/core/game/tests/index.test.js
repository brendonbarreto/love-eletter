import { start } from '..'

const JOHN = {
  name: 'John'
}
const LEO = {
  name: 'Leo'
}
const PLAYERS = [JOHN, LEO]

describe('game', () => {
  describe('start', () => {
    it('should return removed card', () => {
      start(PLAYERS)
    })
  })
})
