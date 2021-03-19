import { Character, getCardByCharacter, is, getCardByValue, getCards } from '../cards';


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
})