import { motion } from 'framer-motion'
import Link from 'next/link'

import { Divider } from '../Divider'
import { Title } from '../Title'
import { Wrapper } from '../Wrapper'

import { animation } from '../../constants'

import styles from './Services.module.css'

export const Services = () => {
  return (
    <motion.section
      className={styles.container}
      initial="hidden"
      whileInView="visible"
      variants={animation}
      viewport={{ once: true }}
    >
      <Wrapper classes={styles.wrapper}>
        <Title text="Services" />

        <Divider />

        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>New gutters and guards to protect and enhance your home</h3>

            <p>
              Five custom choices for seamless gutters and 5 different gutter guards available. 1
              day install turnaround with aesthetics and performance in mind.
            </p>

            <img
              className={styles.image}
              src="/assets/paint/gutter.webp"
              alt="Gutter installations"
            />

            <Link href="/gutter-installation">Read about gutter installation</Link>
          </div>

          <div className={styles.card}>
            <h3>Soffits and Fascias keep moisture and pests out</h3>

            <p>Fascia replacement or cladding, and a range of soffit choices.</p>

            <img className={styles.image} src="/assets/paint/soffits.webp" alt="Soffits" />

            <Link href="/soffit-and-fascia-installation-and-repair">Check out our services</Link>
          </div>

          <div className={styles.card}>
            <h3>Variety of cleaning or repairs bring long lasting performance</h3>

            <p>Choose from 3 standard packages. All repairs come with warranty.</p>

            <img className={styles.image} src="/assets/paint/cleaning.webp" alt="Cleaning" />

            <Link href="/gutter-cleaning-and-repair">Read about gutter cleaning and repair</Link>
          </div>
        </div>
      </Wrapper>
    </motion.section>
  )
}
