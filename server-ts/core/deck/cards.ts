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

export const getSpy = () => ({
  character: Character.SPY,
  copies: 2,
  value: 0
})

export const getGuard = () => ({
  character: Character.GUARD,
  rules: [
    'Choose another player and name a character other than Guard. If the chosen player has that card in their hand, they are out of the round.'
  ],
  copies: 6,
  value: 1
})

export const getPriest = () => ({
  character: Character.PRIEST,
  rules: [
    'Choose another player and secretly look at their hand (without revealing it to anyone else).'
  ],
  copies: 2,
  value: 2
})

export const getBaron = () => ({
  character: Character.BARON,
  rules: [
    'Choose another player. You and that player secretly compare your hands. Whoever has the lower value card is out of the round.',
    'If there is a tie, neither player is out of the round'
  ],
  copies: 2,
  value: 3
})

export const getHandmaid = () => ({
  character: Character.HANDMAID,
  rules: [
    'Until the start of your next turn, other players cannot choose you for their card effects.',
    'In the rare case that all other players still in the round are "protected" by a Handmaid when you play a card, do the following:',
    '* If that card requires you to choose another player (Guard, Priest, Baron, King), your card is played with no effect.',
    'If that card requires you to choose any player (Prince), then you must choose yourself for the effect.'
  ],
  copies: 2,
  value: 4
})

export const getPrince = () => ({
  character: Character.PRINCE,
  rules: [
    'Choose any player (including yourself). That player discards their hand (without resolving its effect) and draws a new hand.',
    'If the deck is empty, the chosen player draws the facedown set-aside card.',
    'If a player chooses you for the Prince effect, and you are forced to discard the Princess, you are out of the round.'
  ],
  copies: 2,
  value: 5
})

export const getChancellor = () => ({
  character: Character.CHANCELLOR,
  rules: [
    'Draw two cards from the deck into your hand. Choose and keep one of the three cards now in your hand, and place the other two facedown on the bottom of the deck in any order.',
    'If there is only one card in the deck, draw it and return one card. If there are no cards left, this card is played with no effect.'
  ],
  copies: 2,
  value: 6
})

export const getKing = () => ({
  character: Character.KING,
  rules: [
    'Choose another player and trade hands with that player.'
  ],
  copies: 1,
  value: 7
})

export const getCountess = () => ({
  character: Character.COUNTESS,
  rules: [
    'The Countess has no effect when played or discarded.',
    'You must play the Countess as the card for your turn if either the King or a Prince is the other card in your hand.',
    'You can still choose to play the Countess as the card for your turn even if you do not have the King or a Prince.',
    'When you play the Countess, do not reveal your other card; the other players will not know if you were forced to play it or chose to play it.',
    'The Countess’s effect does not apply when you draw cards for other effects (Chancellor).'
  ],
  copies: 1,
  value: 8
})

export const getPrincess = () => ({
  character: Character.PRINCESS,
  rules: [
    'If you either play or discard the Princess for any reason, you are immediately out of the round.'
  ],
  copies: 1,
  value: 9
})

export const getCards = () => [
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

export const is = (card: Card, character: Character) => {
  const cardToCompare = getCardByCharacter(character)
  if (!cardToCompare) return false

  return card.character === cardToCompare.character
      && card.copies === cardToCompare.copies
      && card.value === cardToCompare.value
}

export const getCardByCharacter = (character: Character) => getCards().find(card => card.character === character)

export const getCardByValue = (value: CardValues) => getCards().find(card => card.value === value)
