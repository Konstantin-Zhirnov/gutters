'use client'

import { FC } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import { usePathname } from 'next/navigation'

import styles from './MenuLink.module.css'

interface IProps {
  path: string
  title: string
}

export const MenuLink: FC<IProps> = ({ path, title }) => {
  const pathname = usePathname()

  return (
    <Link className={cn(styles.link, { [styles.gray]: pathname === path })} href={path}>
      {title}
    </Link>
  )
}
