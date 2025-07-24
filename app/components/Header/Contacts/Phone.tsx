import styles from './Contacts.module.css'

export const Phone = () => (
  <a href="tel:+12502681249" className={`${styles.btn} ${styles.phone}`}>
    250 268-1249
  </a>
)
