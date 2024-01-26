import { useState, useEffect, useCallback } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from './EmblaCarouselThumbsButton'

import styles from './EmblaCarousel.module.css'

type PropType = {
  slides: { src: string; id: number }[]
  options?: EmblaOptionsType
}

export function EmblaCarousel({ slides, options }: PropType) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  })

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi],
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()
    emblaMainApi.on('select', onSelect)
    emblaMainApi.on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaMainRef}>
        <div className={styles.embla__container}>
          {slides.map((slide, index) => (
            <div className={styles.embla__slide} key={`k-cover${slide.id}`}>
              <div className={styles.embla__slide__number}>
                <span>{index + 1}</span>
              </div>
              <img className={styles.embla__slide__img} src={slide.src} alt="Your alt text" />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.emblaThumbs}>
        <div className={styles.emblaThumbs__viewport} ref={emblaThumbsRef}>
          <div className={styles.emblaThumbs__container}>
            {slides.map((slide, index) => (
              <Thumb
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
                imgSrc={slide.src}
                key={`k-thumb${slide.id}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
