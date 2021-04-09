import styles from './Hand.module.scss'
import spyIcon from '../../cardIcons/spy.svg'

const Hand = () => (
  <div className={styles.hand}>
    <div className={styles.card}>
      <div>Spy</div>
      <div className={styles.value}>0</div>
      <img width="50px" src={spyIcon} alt="shhu"/>
    </div>
  </div>
)

export default Hand
