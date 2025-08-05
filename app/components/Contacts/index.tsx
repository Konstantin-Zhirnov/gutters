import { Divider } from '../Divider'

import { Call } from './Call'
import { Message } from './Message'

import styles from './Contacts.module.css'

export const Contacts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Message />

        <Divider vertical />

        <Call />
      </div>

      <p className={styles.conclusion}>
        We’ll answer your questions and schedule your free assessment or cleaning service
      </p>
    </div>
  )
}
