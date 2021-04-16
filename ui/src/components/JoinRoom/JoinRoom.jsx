import styles from './JoinRoom.module.scss'

const JoinRoom = ({ profile, roomCode, onChangeRoomCode }) => {
  return <div className={styles.joinRoom}>
    <img src={profile.imageUrl} alt="profile" />
    <input
        value={roomCode}
        onChange={e => onChangeRoomCode(e.target.value)}
        type="text"
        placeholder="Room code"
    />
    <button type="button">Join!</button>
  </div>
}

export default JoinRoom
