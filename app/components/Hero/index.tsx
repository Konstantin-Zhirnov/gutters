'use client'

import { motion } from 'framer-motion'

import { Header } from '../Header'
import { Divider } from '../Divider'
import { Wrapper } from '../Wrapper'
import { ContactLink } from '../ContactLink'

import { heroAnimation } from '../../constants'

import styles from './Hero.module.css'

export const Hero = () => {
  return (
    <motion.section className={styles.container}>
      <Header />

      <Wrapper>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={heroAnimation}
          viewport={{ once: true }}
        >
          <h1 className={styles.title}>Gutter services for Vancouver Island homeowners</h1>

          <Divider />

          <h2 className={styles.description}>Faster service. More options. Guaranteed results</h2>

          <ContactLink text="Book a free assessment" />
        </motion.div>
      </Wrapper>
    </motion.section>
  )
}
