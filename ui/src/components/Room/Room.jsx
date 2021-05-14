const Room = ({ room }) => {
  return <div>
    <ul>
      {room.players.map(a => {
        console.log(a.info)
        return <>
          <li>{a.info.name}</li>
          <li>{a.info.email}</li>
        </>
      })}
    </ul>
  </div>
}

export default Room
