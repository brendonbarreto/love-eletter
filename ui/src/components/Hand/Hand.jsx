import cx from 'classnames'
import styles from './Hand.module.scss'
import getIconByCharacter from '../../cardIcons/getIconByCharacter'

const Hand = ({ cards }) => (
  <div className={styles.hand}>
    {
      cards.map((card, index) => (
        <div key={index} className={cx(styles.card, styles[card.character.toLowerCase()])}>
          <p>{card.character}</p>
          <div className={styles.value}>{card.value}</div>
          <img width="50px" src={getIconByCharacter(card.character)} alt="shhu"/>
        </div>
      ))
    }
  </div>
)

export default Hand
