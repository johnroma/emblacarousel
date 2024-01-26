import styles from './EmblaCarousel.module.css'

type ThumbProps = {
  selected: boolean
  imgSrc?: string
  index: number
  onClick: () => void
}

export function Thumb({ selected, imgSrc, index, onClick }: ThumbProps) {
  const className = selected
    ? `${styles.emblaThumbs__slide} ${styles['emblaThumbs__slide--selected']}`
    : styles.emblaThumbs__slide

  if (!imgSrc) return null
  return (
    <div className={className}>
      <button onClick={onClick} className={styles.emblaThumbs__slide__button} type="button">
        <div className={styles.emblaThumbs__slide__number}>
          <span>{index + 1}</span>
        </div>
        <img className={styles.emblaThumbs__slide__img} src={imgSrc} alt="Your alt text" />
      </button>
    </div>
  )
}
