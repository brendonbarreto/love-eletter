import styles from './FaceUpCards.module.scss'

const FaceUpCards = () => (
  <div className={styles.faceUpCards}>
    <div className={styles.spy}>
      <span>0 - Spy</span>
    </div>
    <div className={styles.guard}>
      <span>1 - Guard</span>
    </div>
    <div className={styles.guard}>
      <span>1 - Guard</span>
    </div>
    <div className={styles.guard}>
      <span>1 - Guard</span>
    </div>
  </div>
)

export default FaceUpCards
