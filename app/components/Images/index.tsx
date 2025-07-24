'use client'

import { useState } from 'react'
import cn from 'classnames'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import { MdRotate90DegreesCw, MdZoomIn, MdZoomOut } from 'react-icons/md'

import 'react-photo-view/dist/react-photo-view.css'
import styles from './Images.module.css'
import Head from 'next/head'

const imagesSrcArray = [
  '/assets/gutter-work/gutter-cleaning-repair-nanaimo-1.webp',
  '/assets/gutter-work/gutter-cleaning-repair-nanaimo-2.webp',
  '/assets/gutter-work/gutter-cleaning-repair-nanaimo-3.webp',
  '/assets/gutter-work/gutter-cleaning-repair-nanaimo-4.webp',
  '/assets/gutter-work/gutter-cleaning-repair-nanaimo-5.webp',
  '/assets/gutter-work/gutter-cleaning-repair-nanaimo-6.webp',
  '/assets/gutter-work/gutter-cleaning-repair-nanaimo-7.webp',
  '/assets/gutter-work/gutter-cleaning-repair-nanaimo-8.webp',
  '/assets/gutter-work/gutter-cleaning-repair-nanaimo-9.webp',
  '/assets/gutter-work/gutter-cleaning-repair-nanaimo-10.webp',
  '/assets/gutter-work/gutter-cleaning-repair-nanaimo-11.webp',
  '/assets/gutter-work/gutter-cleaning-repair-nanaimo-12.webp',
  '/assets/gutter-work/gutter-cleaning-repair-nanaimo-13.webp',
  '/assets/gutter-work/gutter-cleaning-repair-nanaimo-14.webp',
]

export const Images = () => {
  const [isShowAll, setIsShowAll] = useState(false)

  const handleClick = () => {
    setIsShowAll((prev) => !prev)
  }

  return (
    <div className={styles.wrapper}>
      {!isShowAll && (
        <Head>
          {imagesSrcArray.map((src, index) => (
            <link key={index} rel="preload" as="image" href={src} />
          ))}
        </Head>
      )}

      <PhotoProvider
        speed={() => 800}
        easing={(type) =>
          type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)'
        }
        toolbarRender={({ onScale, scale, rotate, onRotate }) => {
          return (
            <>
              <MdZoomIn
                className={cn('PhotoView-Slider__toolbarIcon', styles.icon)}
                onClick={() => onScale(scale + 1)}
              />
              <MdZoomOut
                className={cn('PhotoView-Slider__toolbarIcon', styles.icon)}
                onClick={() => onScale(scale - 1)}
              />
              <MdRotate90DegreesCw
                className={cn('PhotoView-Slider__toolbarIcon', styles.icon)}
                onClick={() => onRotate(rotate + 90)}
              />
            </>
          )
        }}
      >
        <>
          {(isShowAll ? imagesSrcArray : imagesSrcArray.slice(0, 4)).map(
            (item: string, index: number) => (
              <PhotoView src={item} key={index}>
                <div className={styles.image_container}>
                  <img src={item} className={styles.image} alt="Gutter cleaning and repair" />
                </div>
              </PhotoView>
            ),
          )}

          <button className={styles.btn} onClick={handleClick}>
            {isShowAll ? 'Show less ▲' : 'Show more ▼'}
          </button>
        </>
      </PhotoProvider>
    </div>
  )
}
