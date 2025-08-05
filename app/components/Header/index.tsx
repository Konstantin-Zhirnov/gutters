'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import { Contacts } from './Contacts'
import { Menu } from './Menu'
import { MobileMenu } from './MobileMenu'
import { Wrapper } from '../Wrapper'

import styles from './Header.module.css'

export const Header = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false)

  useEffect(() => {
    const updateScrollLock = () => {
      const isWide = window.matchMedia('(min-width: 680px)').matches

      if (isMobileMenu && !isWide) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    }

    updateScrollLock()

    window.addEventListener('resize', updateScrollLock)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('resize', updateScrollLock)
    }
  }, [isMobileMenu])

  return (
    <header className={styles.container}>
      <Wrapper classes={styles.header}>
        <div className={styles.flex}>
          <Image alt="Aarsen gutters" height={135} src="/assets/logo.png" width={320} priority />

          <Contacts setIsMobileMenu={setIsMobileMenu} />
        </div>

        <Menu />
      </Wrapper>

      {isMobileMenu && <MobileMenu setIsMobileMenu={setIsMobileMenu} />}
    </header>
  )
}
