import styles from './JoinRoom.module.scss'
import { useState } from 'react'

const JoinRoom = ({ profile, joinRoom, createRoom }) => {
  const [roomCode, setRoomCode] = useState('')

  return <div className={styles.joinRoom}>
    <img src={profile.imageUrl} alt="profile" />
    <input
        value={roomCode}
        onChange={e => setRoomCode(e.target.value)}
        type="text"
        placeholder="Room code"
    />
    <div className={styles.actions}>
      <button onClick={() => joinRoom(roomCode)} type="button">Join!</button>
      <button onClick={createRoom} type="button">Create Room</button>
    </div>
  </div>
}

export default JoinRoom
