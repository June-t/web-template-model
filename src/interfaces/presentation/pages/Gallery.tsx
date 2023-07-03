import { Fragment, useCallback, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import IconArrow from '../components/Arrow'

import 'swiper/css'
import 'swiper/css/navigation'

export const Gallery = ({ content }: any) => {
  const { name, file, gallery } = content
  const URL = '/photographs/nastyhaiko/'

  const SliderComponent = ({ slides }: any): JSX.Element => {
    const sliderRef = useRef(null)

    const handlePrev = useCallback(() => {
      if (!sliderRef.current) return
      sliderRef.current.swiper.slidePrev()
    }, [])

    const handleNext = useCallback(() => {
      if (!sliderRef.current) return
      sliderRef.current.swiper.slideNext()
    }, [])

    return (
      <Fragment>
        <Swiper spaceBetween={20} slidesPerView={slides} ref={sliderRef}>
          {gallery.map((item: unknown) => {
            return (
              <SwiperSlide key={crypto.randomUUID()}>
                <div key={crypto.randomUUID()} className="gallery__item">
                  <img src={`${URL}/${file}/${item}`} alt={name} />
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
        <div className="home__button">
          <div onClick={handlePrev} className="button__previus button">
            <IconArrow />
          </div>
          <div onClick={handleNext} className="button__next button">
            <IconArrow />
          </div>
        </div>
      </Fragment>
    )
  }

  return (
    <main className="gallery">
      <div className="gallery__content">
        <SliderComponent slides={1} />
      </div>
      <div className="gallery__total">
        <span>
          {gallery.lenght > 10 ? '' : '0'}
          {gallery.length}
        </span>
        <span>gallery</span>
      </div>
    </main>
  )
}

export default Gallery
