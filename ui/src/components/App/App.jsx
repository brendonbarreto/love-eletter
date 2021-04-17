import { useEffect, useRef, useState } from 'react'
import io from 'socket.io-client'

import styles from './App.module.scss'
import LoginButton from '../LoginButton'
import JoinRoom from '../JoinRoom'

const App = () => {
  const [message, setMessage] = useState('')
  const [roomCode, setRoomCode] = useState('')
  const [profile, setProfile] = useState({})
  const [socket, setSocket] = useState({})

  useEffect(() => {
    setSocket(
      io('http://localhost:8000')
        .on('message', message => setMessage(message))
    )
  }, [])

  const onAuthenticatedSuccessfully = profile => {
    console.log(profile)
    setProfile(profile)
  }

  const createRoom = () => {
    socket.emit('createRoom', {
      name: profile.name,
      imageUrl: profile.imageUrl,
      email: profile.email
    })
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
                createRoom={createRoom}
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
