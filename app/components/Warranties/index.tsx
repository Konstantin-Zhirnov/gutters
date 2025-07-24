import { motion } from 'framer-motion'

import { Divider } from '../Divider'
import { Title } from '../Title'
import { Wrapper } from '../Wrapper'

import { animation } from '@/app/constants'

import styles from './Warranties.module.css'

export const Warranties = () => {
  return (
    <motion.section
      className={styles.container}
      initial="hidden"
      whileInView="visible"
      variants={animation}
      viewport={{ once: true }}
    >
      <Wrapper>
        <Title text="Warranties & Credentials" />

        <Divider />

        <p className={styles.text}>🧰 Aarsen Gutters is licensed and insured</p>

        <p className={styles.text}>
          ✅ All installation and repair work includes a 3-year labour warranty
        </p>

        <p className={styles.text}>🏅 Our gutters come with a 40-year manufacturer’s warranty</p>

        <p className={styles.text}>⭐ We’re Elite Installers of Alu-Rex® products.</p>
      </Wrapper>
    </motion.section>
  )
}
