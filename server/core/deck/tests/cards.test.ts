import {
  Character,
  getCardByCharacter,
  is,
  getCardByValue,
  getCards,
  CardValues,
  Card
} from '../cards'

describe('cards', () => {
  describe('getCardByCharacter', () => {
    it.each(Object.values(Character))('should return %p', (character) => {
      const card = getCardByCharacter(character)

      expect(is(card, character)).toBe(true)
    })
  })

  describe('getCardByValue', () => {
    it.each(
      getCards().map((card): [Character, CardValues] => [
        card.character,
        card.value
      ])
    )('should return %p when value is %p', (character, value) => {
      const card = getCardByValue(value)

      expect(is(card, character)).toBe(true)
    })
  })

  describe('getCards', () => {
    it.each(Object.values(Character))('should include %p card', (character) => {
      const cards = getCards()

      expect(cards.map((card) => card.character)).toContain(character)
    })
  })

  describe('is', () => {
    it('should return true if character, copies and value keys are the same', () => {
      const spy: Card = { character: Character.SPY, copies: 2, value: 0 }

      const result = is(spy, Character.SPY)

      expect(result).toBe(true)
    })

    it('should return false if characters are differents', () => {
      const spy: Card = { character: Character.GUARD, copies: 2, value: 0 }

      const result = is(spy, Character.SPY)

      expect(result).toBe(false)
    })

    it('should return false if copies are differents', () => {
      const spy: Card = { character: Character.SPY, copies: 1, value: 0 }

      const result = is(spy, Character.SPY)

      expect(result).toBe(false)
    })

    it('should return false if values are differents', () => {
      const spy: Card = { character: Character.SPY, copies: 2, value: 1 }

      const result = is(spy, Character.SPY)

      expect(result).toBe(false)
    })
  })
})
