import { useEffect, useState } from 'react'
import io from 'socket.io-client'

import styles from './App.module.scss'

const App = () => {
  const [message, setMessage] = useState('')

  useEffect(() => {
    const socket = io('http://localhost:8000')

    socket.on('message', message => setMessage(message))
  }, [])

  return (
    <div className={styles.app}>
      {message}
    </div>
  )
}

export default App
