import styles from './Opponent.module.scss'
import FaceUpCards from '../FaceUpCards'

const Opponent = () => (
  <div className={styles.opponent}>
    <div className={styles.avatarAndTokens}>
      <div className={styles.avatar}>EO</div>
      <div className={styles.score}>
        <div className={styles.token}/>
        <div className={styles.token}/>
      </div>
    </div>
    <p>Édina de Oliveira</p>
    <FaceUpCards />
  </div>
)

export default Opponent
