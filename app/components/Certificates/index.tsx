import styles from './Certificates.module.css'

const images = [
  '/assets/warranties/warranties-1.webp',
  '/assets/warranties/warranties-2.webp',
  '/assets/warranties/warranties-3.webp',
  '/assets/warranties/warranties-4.webp',
  '/assets/warranties/warranties-5.webp',
  '/assets/warranties/warranties-6.webp',
  '/assets/warranties/warranties-7.webp',
  '/assets/warranties/warranties-8.webp',
  '/assets/warranties/warranties-9.webp',
  '/assets/warranties/warranties-10.webp',
]

export const Certificates = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {images.map((src, i) => (
          <img className={styles.image} src={src} alt="Warranties" key={i} />
        ))}

        {images.map((src, i) => (
          <img className={styles.image} src={src} alt="Warranties duplicate" key={`dupe-${i}`} />
        ))}
      </div>
    </section>
  )
}
