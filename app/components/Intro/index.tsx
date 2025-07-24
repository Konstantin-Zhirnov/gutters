import { motion } from 'framer-motion'

import { ContactLink } from '../ContactLink'
import { Divider } from '../Divider'
import { Title } from '../Title'
import { Wrapper } from '../Wrapper'

import { animation } from '../../constants'

import styles from './Intro.module.css'

export const Intro = () => {
  return (
    <motion.section
      className={styles.container}
      initial="hidden"
      whileInView="visible"
      variants={animation}
      viewport={{ once: true }}
    >
      <Wrapper classes={styles.wrapper}>
        <Title text="Gutter, Soffit, Fascia Installation and Maintenance" />

        <Divider />

        <p className={styles.text}>
          When it comes to keeping water outside (where it belongs) you need a team of trusted
          experts. We’ve been helping homeowners protect their homes for 18 years and counting. From
          basic cleaning, repair packages, to full gutter installations – we do it all!
        </p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <img
              className={styles.image}
              src="/assets/installation/gutter-installation-nanaimo-1.webp"
              alt="Gutter installations"
            />

            <div className={styles.text_container}>
              <h3>Gutter installations</h3>

              <p>
                Start with a free on-site assessment. You get a list of custom options usually
                within 24 hours. Our clients say they love having choices is grate!
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <img
              className={styles.image}
              src="/assets/installation/gutter-installation-nanaimo-2.webp"
              alt="Repairs"
            />

            <div className={styles.text_container}>
              <h3>Repairs</h3>

              <p>
                If you need repairs or updates, our one-stop-shop makes life simple. Gutters,
                Fascia, Soffit or cladding? We’ve got you covered, including carpentry and painting.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <img
              className={styles.image}
              src="/assets/installation/gutter-installation-nanaimo-3.webp"
              alt="Cleaning"
            />

            <div className={styles.text_container}>
              <h3>Cleaning</h3>

              <p>
                Clogged or dirty gutters? We offer 3 packages, from basic cleaning to maintenance
                packages. Make your gutters sparkle. Book in with just one call.
              </p>
            </div>
          </div>
        </div>

        <p className={styles.finish_text}>
          Enjoy total peace of mind with our workmanship guarantee{' '}
          <img
            className={styles.icon}
            src="/gutter-installation-nanaimo-5-7-2-150x150.webp"
            alt="image"
          />{' '}
          plus various manufacturer’s{' '}
          <img
            className={styles.icon}
            src="/gutter-installation-nanaimo-5-9-2-150x150.webp"
            alt="image"
          />{' '}
          warranties with our work.
        </p>

        <ContactLink text="Contact Us" />
      </Wrapper>
    </motion.section>
  )
}
