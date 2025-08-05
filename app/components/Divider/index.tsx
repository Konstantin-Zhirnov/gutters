import { FC } from 'react'
import cn from 'classnames'

import styles from './Divider.module.css'

interface IProps {
  vertical?: boolean
}

export const Divider: FC<IProps> = ({ vertical }) => {
  return (
    <div className={cn(styles.container, { [styles.vertical]: vertical })}>
      <div className={styles.divider} />
    </div>
  )
}
