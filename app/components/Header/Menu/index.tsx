'use client'

import { MenuLink } from './MenuLink'
import { links } from '../constants'

import styles from './Menu.module.css'

export const Menu = () => {
  return (
    <menu className={styles.container}>
      {links.map(({ path, title }, index) => {
        return <MenuLink key={index} path={path} title={title} />
      })}
    </menu>
  )
}
