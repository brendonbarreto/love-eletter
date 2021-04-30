import { useEffect, useState } from 'react'
import io from 'socket.io-client'

import styles from './Game.module.scss'
import FaceUpCards from '../FaceUpCards'
import Hand from '../Hand'
import Board from '../Board'
import { Character } from '../../cards'

const Game = ({ game, email }) => {
  const [message, setMessage] = useState('')
  const player = game.players.find(player => player.info.email === email)

  useEffect(() => {
    const socket = io('http://localhost:8000')

    socket.on('message', message => setMessage(message))
  }, [])

  return <div className={styles.game}>
    <Board deck={game.deck}/>

    <FaceUpCards cards={[
      {
        character: Character.PRINCE,
        value: 5
      }, {
        character: Character.SPY,
        value: 0
      }, {
        character: Character.KING,
        value: 7
      }
    ]}/>

    <Hand cards={player.hand}/>
  </div>
}

export default Game
