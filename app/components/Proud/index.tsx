import Link from 'next/link'
import { motion } from 'framer-motion'

import { Divider } from '../Divider'
import { Title } from '../Title'
import { Wrapper } from '../Wrapper'

import { animation } from '@/app/constants'

import styles from './Proud.module.css'

export const Proud = () => {
  return (
    <motion.section
      className={styles.container}
      initial="hidden"
      whileInView="visible"
      variants={animation}
      viewport={{ once: true }}
    >
      <Wrapper>
        <Title text="We are proud to be Elite Installers of Alu-Rex® products" />

        <Divider />

        <p className={styles.text}>Fully licensed and insured</p>

        <div className={styles.cards}>
          <img src="/assets/proud/bbb.svg" alt="Gutter installations" />

          <img src="/assets/proud/worksafebc.webp" alt="WorkSafeBC" />

          <img src="/assets/proud/installer.webp" alt="Cleaning" />

          <img src="/assets/proud/alurex.webp" alt="Cleaning" />
        </div>

        <p className={styles.bottom_text}>
          Meet the team{' '}
          <Link className={styles.link} href="/about-us">
            About page
          </Link>
        </p>

        <p className={styles.bottom_text}>
          All gutters and repairs are backed by our standard 3-year installation warranty.
        </p>

        <p className={styles.bottom_text}>
          Gutters and cladding have a 40-year manufacturer’s warranty.
        </p>

        <div className={styles.img_cards}>
          <img src="/assets/proud/gutter-installation-1.webp" alt="Gutter installations" />

          <img src="/assets/proud/gutter-installation-2.webp" alt="Repairs" />

          <img src="/assets/proud/gutter-installation-3.webp" alt="Cleaning" />

          <img src="/assets/proud/gutter-installation-4.webp" alt="Cleaning" />
        </div>
      </Wrapper>
    </motion.section>
  )
}
