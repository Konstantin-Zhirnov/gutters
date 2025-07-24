import Link from 'next/link'

import { Wrapper } from '../Wrapper'

import styles from './GetInTouch.module.css'
import { ContactLink } from '@/app/components/ContactLink'

export const GetInTouch = () => {
  return (
    <section>
      <Wrapper classes={styles.wrapper}>
        <div className={styles.card}>
          <img className={styles.image} src="/assets/logo.webp" alt="Gutter installations" />

          <div>
            <h3>Get in touch with us today</h3>

            <p>
              We’ll answer your questions and give you multiple options for a quality installation.
            </p>
          </div>

          {/*<Link href="/contact">Contact us today</Link>*/}
          <ContactLink text="Contact us today" />
        </div>
      </Wrapper>
    </section>
  )
}
