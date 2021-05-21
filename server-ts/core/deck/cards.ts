import { isDeepStrictEqual } from 'util';

export enum Character {
  SPY = 'Spy',
  GUARD = 'Guard',
  PRIEST = 'Priest',
  BARON = 'Baron',
  HANDMAID = 'Handmaid',
  PRINCE = 'Prince',
  CHANCELLOR = 'Chancellor',
  KING = 'King',
  COUNTESS = 'Countess',
  PRINCESS = 'Princess'
}

export type CardValues = 0|1|2|3|4|5|6|7|8|9;

export type CardCopies = 1|2|6;

export interface Card {
  character: Character;
  copies: CardCopies;
  value: CardValues;
}

export const getSpy = (): Card => ({
  character: Character.SPY,
  copies: 2,
  value: 0
})

export const getGuard = (): Card => ({
  character: Character.GUARD,
  copies: 6,
  value: 1
})

export const getPriest = (): Card => ({
  character: Character.PRIEST,
  copies: 2,
  value: 2
})

export const getBaron = (): Card => ({
  character: Character.BARON,
  copies: 2,
  value: 3
})

export const getHandmaid = (): Card => ({
  character: Character.HANDMAID,
  copies: 2,
  value: 4
})

export const getPrince = (): Card => ({
  character: Character.PRINCE,
  copies: 2,
  value: 5
})

export const getChancellor = (): Card => ({
  character: Character.CHANCELLOR,
  copies: 2,
  value: 6
})

export const getKing = (): Card => ({
  character: Character.KING,
  copies: 1,
  value: 7
})

export const getCountess = (): Card => ({
  character: Character.COUNTESS,
  copies: 1,
  value: 8
})

export const getPrincess = (): Card => ({
  character: Character.PRINCESS,
  copies: 1,
  value: 9
})

export const getCards = (): Card[] => [
  getSpy(),
  getGuard(),
  getPriest(),
  getBaron(),
  getHandmaid(),
  getPrince(),
  getChancellor(),
  getKing(),
  getCountess(),
  getPrincess()
]

export const is = (card: Card | undefined, character: Character) => {
  const cardToCompare = getCardByCharacter(character)

  return isDeepStrictEqual(card, cardToCompare)
}

export const getCardByCharacter = (character: Character): Card => {
  const card = getCards().find(card => card.character === character)
  if (card === undefined) throw new Error(`Could not find a card for ${character} character.`)

  return card
}

export const getCardByValue = (value: CardValues): Card => {
  const card = getCards().find(card => card.value === value)
  if (card === undefined) throw new Error(`Could not find a card with value ${value}.`)

  return card
}
