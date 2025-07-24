'use client'

import { FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './MenuLink.module.css'

interface IProps {
  path: string
  title: string
}

export const MenuLink: FC<IProps> = ({ path, title }) => {
  const pathname = usePathname()

  return (
    <Link className={`${styles.link} ${pathname === path ? styles.gray : ''}`} href={path}>
      {title}
    </Link>
  )
}
