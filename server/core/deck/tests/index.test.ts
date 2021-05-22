import { pickCardFromTop, getNewDeck } from '..'
import {
  getSpy,
  getPrincess,
  is,
  Character,
  getCards,
  CardCopies
} from '../cards'

describe('deck', () => {
  describe('pickCardFromTop', () => {
    it('should return last element from card array', () => {
      const deck = [getSpy(), getPrincess()]

      const result = pickCardFromTop(deck)

      expect(is(result.card, Character.PRINCESS)).toBe(true)
      expect(result.remaining).toHaveLength(1)
    })

    it('should return copies of card and remaining cards', () => {
      const spyCard = getSpy()
      const deck = [spyCard]

      const result = pickCardFromTop(deck)

      expect(result.card).not.toBe(spyCard)
      expect(result.remaining).not.toBe(deck)
      expect(result.card).toStrictEqual(spyCard)
      expect(result.remaining).toStrictEqual([])
    })
  })

  describe('getNewDeck', () => {
    it('should contains 21 cards', () => {
      const deck = getNewDeck()

      expect(deck).toHaveLength(21)
    })

    it.each(
      getCards().map((card): [CardCopies, Character] => [
        card.copies,
        card.character
      ])
    )('should include %p copies of %p', (copies, character) => {
      const deck = getNewDeck()

      expect(deck.filter((card) => card.character === character)).toHaveLength(
        copies
      )
    })

    it('should sort deck', () => {
      const deck = getNewDeck()

      const values = deck.map((card) => card.value)
      expect(values).not.toStrictEqual([...values].sort((a, b) => a - b))
    })
  })
})
