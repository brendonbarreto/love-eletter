import styles from './Board.module.scss'
import cx from 'classnames'
import Opponent from '../Opponent'
import Deck from '../Deck'

const Board = () =>
  <div className={cx(styles.board, styles.fourPlayers)}>
    <Opponent />
    <div className={styles.container}>
      <Opponent />
      <Deck />
    </div>
    <Opponent />
  </div>

export default Board
