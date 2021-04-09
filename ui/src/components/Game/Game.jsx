import styles from './Game.module.scss'
import FaceUpCards from '../FaceUpCards'

import Hand from '../Hand'
import Board from '../Board'
import { Character } from '../../cards'

const Game = () => (
  <div className={styles.game}>
    <Board />

    <FaceUpCards />

    <Hand cards={[{
      character: Character.SPY,
      value: 0
    }, {
      character: Character.GUARD,
      value: 1
    }, {
      character: Character.PRIEST,
      value: 2
    }, {
      character: Character.BARON,
      value: 3
    }, {
      character: Character.HANDMAID,
      value: 4
    }, {
      character: Character.PRINCE,
      value: 5
    }, {
      character: Character.CHANCELLOR,
      value: 6
    }, {
      character: Character.KING,
      value: 7
    }, {
      character: Character.COUNTESS,
      value: 8
    }, {
      character: Character.PRINCESS,
      value: 9
    }]} />
  </div>
)

export default Game
