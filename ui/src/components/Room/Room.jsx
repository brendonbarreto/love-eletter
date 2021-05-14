const Room = ({ room }) => {
  return <div>
    <ul>
      {room.players.map(a => {
        console.log(a.info)
        return <>
          <li>{a.name}</li>
          <li>{a.email}</li>
        </>
      })}
    </ul>
  </div>
}

export default Room
