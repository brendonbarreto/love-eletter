import styles from './Deck.module.scss'
import { MdFavoriteBorder } from 'react-icons/md'

const Deck = ({ deck }) => (
  <div className={styles.deck}>
    <div className={styles.card}>
      <div className={styles.logo}>
        <span>Love</span>
        <MdFavoriteBorder />
        <span>Letter</span>
      </div>
      <div className={styles.remaining}>
        {deck.length} cards remaining
      </div>
    </div>
  </div>
)

export default Deck
