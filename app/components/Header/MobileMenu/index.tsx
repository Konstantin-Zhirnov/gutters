'use client'

import { Dispatch, FC, SetStateAction } from 'react'

import { MenuLink } from './MenuLink'
import { links } from '../constants'

import styles from './MobileMenu.module.css'

interface IProps {
  setIsMobileMenu: Dispatch<SetStateAction<boolean>>
}

export const MobileMenu: FC<IProps> = ({ setIsMobileMenu }) => {
  return (
    <menu className={styles.container}>
      {links.map(({ path, title }, index) => {
        return (
          <MenuLink key={index} path={path} title={title} onClick={() => setIsMobileMenu(false)} />
        )
      })}
    </menu>
  )
}
