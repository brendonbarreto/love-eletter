import cx from 'classnames'
import styles from './Hand.module.scss'
import getIconByCharacter from '../../cardIcons/getIconByCharacter'
import { Character } from '../../cards'

const getCardRules = character => (
  {
    [Character.SPY]: [
      'A Spy has no effect when played or discarded.',
      'At the end of the round, if you are the only player still in the round who played or discarded a Spy, you gain one favor token.',
      'This does not count as winning the round; the winner (even if it is you) still gains their token.',
      'Even if you play and/or discard two Spies, you still gain only one token.'
    ],
    [Character.GUARD]: [
      'Choose another player and name a character other than Guard. If the chosen player has that card in their hand, they are out of the round.'
    ],
    [Character.PRIEST]: [
      'Choose another player and secretly look at their hand (without revealing it to anyone else).'
    ],
    [Character.BARON]: [
      'Choose another player. You and that player secretly compare your hands. Whoever has the lower value card is out of the round.',
      'If there is a tie, neither player is out of the round'
    ],
    [Character.HANDMAID]: [
      'Until the start of your next turn, other players cannot choose you for their card effects.',
      'In the rare case that all other players still in the round are "protected" by a Handmaid when you play a card, do the following:',
      'If that card requires you to choose another player (Guard, Priest, Baron, King), your card is played with no effect.',
      'If that card requires you to choose any player (Prince), then you must choose yourself for the effect.'
    ],
    [Character.PRINCE]: [
      'Choose any player (including yourself). That player discards their hand (without resolving its effect) and draws a new hand.',
      'If the deck is empty, the chosen player draws the facedown set-aside card.',
      'If a player chooses you for the Prince effect, and you are forced to discard the Princess, you are out of the round.'
    ],
    [Character.CHANCELLOR]: [
      'Draw two cards from the deck into your hand. Choose and keep one of the three cards now in your hand, and place the other two facedown on the bottom of the deck in any order.',
      'If there is only one card in the deck, draw it and return one card. If there are no cards left, this card is played with no effect.'
    ],
    [Character.KING]: [
      'Choose another player and trade hands with that player.'
    ],
    [Character.COUNTESS]: [
      'The Countess has no effect when played or discarded.',
      'You must play the Countess as the card for your turn if either the King or a Prince is the other card in your hand.',
      'You can still choose to play the Countess as the card for your turn even if you do not have the King or a Prince.',
      'When you play the Countess, do not reveal your other card; the other players will not know if you were forced to play it or chose to play it.',
      'The Countess’s effect does not apply when you draw cards for other effects (Chancellor).'
    ],
    [Character.PRINCESS]: [
      'If you either play or discard the Princess for any reason, you are immediately out of the round.'
    ]
  }[character]
)

const Hand = ({ cards }) => (
  <div className={styles.hand}>
    {
      cards.map((card, index) => (
        <div key={index} className={cx(styles.card, styles[card.character.toLowerCase()])}>
          <p>{card.character}</p>
          <div className={styles.value}>{card.value}</div>
          <img width="50px" src={getIconByCharacter(card.character)} alt="shhu"/>
          <div className={styles.rules}>
            {
                  getCardRules(card.character).map((rule, ruleKey) => (
                    <p key={ruleKey}>* {rule}</p>
                  ))
              }
          </div>
        </div>
      ))
    }
  </div>
)

export default Hand
