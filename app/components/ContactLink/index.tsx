'use client'

import { FC } from 'react'
import Link from 'next/link'

import styles from './ContactLink.module.css'

interface IProps {
  text: string
}

export const ContactLink: FC<IProps> = ({ text }) => {
  return (
    <div className={styles.link_container}>
      <Link className={styles.link} href="/contact">
        {text}
      </Link>
    </div>
  )
}
