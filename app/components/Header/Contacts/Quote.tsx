import Link from 'next/link'

import styles from './Contacts.module.css'

export const Quote = () => (
  <Link className={`${styles.btn} ${styles.link}`} href="/contact">
    Get a Quote
  </Link>
)
