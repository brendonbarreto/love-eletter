import React from 'react'

import styles from './Board.module.scss'

const Board = () =>
  <div className={styles.board}>
    <div className={styles.top}></div>
    <div className={styles.center}></div>
    <div className={styles.bottom}></div>
  </div>

export default Board
