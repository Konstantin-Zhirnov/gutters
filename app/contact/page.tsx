'use client'

import { motion } from 'framer-motion'

import { Divider } from '../components/Divider'
import { Contacts } from '../components/Contacts'
import { Request } from '../components/Request'
import { Wrapper } from '../components/Wrapper'

import { heroAnimation, animation } from '../constants'

import styles from './Contact.module.css'

export default function Contact() {
  return (
    <>
      <motion.section className={styles.container}>
        <Wrapper>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={heroAnimation}
            viewport={{ once: true }}
          >
            <h1 className={styles.title}>
              Contact us today for a free assessment or cleaning package
            </h1>

            <Divider />

            <h2 className={styles.description}>You can contact us in the following ways</h2>
          </motion.div>
        </Wrapper>

        <Wrapper>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={animation}
            viewport={{ once: true }}
          >
            <Contacts />
          </motion.div>
        </Wrapper>
      </motion.section>

      <Request />
    </>
  )
}
