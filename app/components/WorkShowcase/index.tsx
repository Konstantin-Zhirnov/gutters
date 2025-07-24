import { motion } from 'framer-motion'

import { Divider } from '../Divider'
import { Images } from '../Images'
import { Title } from '../Title'
import { Wrapper } from '../Wrapper'

import { animation } from '@/app/constants'

import styles from './WorkShowcase.module.css'

export const WorkShowcase = () => {
  return (
    <motion.section
      className={styles.container}
      initial="hidden"
      whileInView="visible"
      variants={animation}
      viewport={{ once: true }}
    >
      <Wrapper>
        <Title text="Work Showcase" />

        <Divider />

        <Images />
      </Wrapper>
    </motion.section>
  )
}
