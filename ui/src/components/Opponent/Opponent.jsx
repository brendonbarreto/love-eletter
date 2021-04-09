import styles from './Opponent.module.scss'
import FaceUpCards from '../FaceUpCards'

const renderTokens = tokens => {
  if (!tokens) return null

  return (
    <div className={styles.score}>
      {
        Array.from(Array(tokens))
          .map((_, key) => <div key={key} className={styles.token}/>)
      }
    </div>
  )
}
const Opponent = ({ name, tokens }) => (
  <div className={styles.opponent}>
    <div className={styles.avatarAndTokens}>
      <div className={styles.avatar}>EO</div>
      {renderTokens(tokens)}
    </div>
    <p>{name}</p>
    <FaceUpCards />
  </div>
)

export default Opponent
