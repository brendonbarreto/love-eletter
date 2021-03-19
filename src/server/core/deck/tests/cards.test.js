import { Character, getCardByCharacter, is, getCardByValue, getCards, getSpy } from '../cards'

describe('cards', () => {
  describe('getCardByCharacter', () => {
    it.each(Object.values(Character))('should return %p', character => {
      const card = getCardByCharacter(character)

      expect(is(card, character)).toBe(true)
    })
  })

  describe('getCardByValue', () => {
    it.each(getCards().map(card => [card.character, card.value]))('should return %p when value is %p', (character, value) => {
      const card = getCardByValue(value)

      expect(is(card, character)).toBe(true)
    })
  })

  describe('getCards', () => {
    it.each(Object.values(Character))('should include %p card', character => {
      const cards = getCards()

      expect(cards.map(card => card.character)).toContain(character)
    })
  })

  describe('is', () => {
    const differentKeysCases = [
      ['character', 'definitely not a spy'],
      ['copies', 3],
      ['value', 1]
    ]
    it.each(differentKeysCases)('should return false when %p keys are different', (key, value) => {
      const fakeSpy = { ...getSpy(), [key]: value }

      const result = is(fakeSpy, Character.SPY)

      expect(result).toBe(false)
    })

    it('should return true if character, copies and value keys are the same', () => {
      const spy = { character: Character.SPY, copies: 2, value: 0 }

      const result = is(spy, Character.SPY)

      expect(result).toBe(true)
    })

    it('should return false when required key is not present', () => {
      const spy = { character: Character.SPY, copies: 2 }

      const result = is(spy, Character.SPY)

      expect(result).toBe(false)
    })
  })
})
