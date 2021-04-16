import { useEffect, useState } from 'react'
import io from 'socket.io-client'

import styles from './App.module.scss'
import LoginButton from '../LoginButton'
import JoinRoom from '../JoinRoom'

const App = () => {
  const [message, setMessage] = useState('')
  const [roomCode, setRoomCode] = useState('')
  const [profile, setProfile] = useState({})

  useEffect(() => {
    const socket = io('http://localhost:8000')

    socket.on('message', message => setMessage(message))
  }, [])

  const onAuthenticatedSuccessfully = profile => {
    setProfile(profile)
  }

  return (
    <div className={styles.app}>
      {
        profile.name
          ? (
            <JoinRoom
                profile={profile}
                roomCode={roomCode}
                onChangeRoomCode={roomCode => setRoomCode(roomCode)}
            />
            )
          : (
            <>
              <h1>Love eLetter</h1>
              <h2>A digital version of Love Letter cardgame</h2>
              <LoginButton onAuthenticatedSuccessfully={onAuthenticatedSuccessfully}/>
            </>
            )
        }
    </div>
  )
}

export default App
