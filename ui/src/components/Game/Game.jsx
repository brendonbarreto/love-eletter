import styles from './Game.module.scss'
import FaceUpCards from '../FaceUpCards'

import Hand from '../Hand'
import Board from '../Board'

const Game = () => (
  <div className={styles.game}>
    <Board />

    <FaceUpCards />

    <Hand />
  </div>
)

export default Game
