import styles from './FaceUpCards.module.scss'

const FaceUpCards = ({ cards }) => (
  <div className={styles.faceUpCards}>
    {
          cards.map((card, key) => (
            <div key={key} className={styles[card.character.toLowerCase()]}>
              <span>{card.value} - {card.character}</span>
            </div>
          ))
      }
  </div>
)

export default FaceUpCards
