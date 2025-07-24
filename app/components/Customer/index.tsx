import { Wrapper } from '../Wrapper'

import styles from './Customer.module.css'

export const Customer = () => {
  return (
    <section className={styles.container}>
      <Wrapper classes={styles.wrapper}>
        <img className={styles.image} src="/Untitled-1-150x150.webp" alt="Cleaning" />

        <p className={styles.text}>
          “I have had Hank from Aarsen Gutters install my gutters and downspouts, and for my
          renovations for years at my larger house. When I moved to my now much smaller house, I had
          a serious problem with the gutters on my garage and did not bother to call anyone other
          than Aarsen Gutters.” – Donna F.
        </p>
      </Wrapper>
    </section>
  )
}
