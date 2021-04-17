import styles from './JoinRoom.module.scss'

const JoinRoom = ({ profile, roomCode, onChangeRoomCode, createRoom }) => {
  return <div className={styles.joinRoom}>
    <img src={profile.imageUrl} alt="profile" />
    <input
        value={roomCode}
        onChange={e => onChangeRoomCode(e.target.value)}
        type="text"
        placeholder="Room code"
    />
    <div className={styles.actions}>
      <button type="button">Join!</button>
      <button onClick={createRoom} type="button">Create Room</button>
    </div>
  </div>
}

export default JoinRoom
