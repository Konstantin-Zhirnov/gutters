import { FC } from 'react'

import styles from './Title.module.css'

interface IProps {
  text: string
}

export const Title: FC<IProps> = ({ text }) => {
  return (
    <div className={styles.container}>
      <h3>{text}</h3>
    </div>
  )
}
