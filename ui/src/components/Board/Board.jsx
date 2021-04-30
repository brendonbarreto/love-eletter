import styles from './Board.module.scss'
import cx from 'classnames'
import Opponent from '../Opponent'
import Deck from '../Deck'

const Board = ({ deck }) =>
  <div className={cx(styles.board, styles.fourPlayers)}>
    <Opponent name="Brendon Barreto" tokens={1} />
    <div className={styles.container}>
      <Opponent name="Édina de Oliveira" tokens={5} />
      <Deck deck={deck} />
    </div>
    <Opponent name="Israel Fonseca" tokens={0} />
  </div>

export default Board
