import { Fragment } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

export const Gallery = ({ content }: any) => {
  const { name, file, gallery } = content
  const URL = '/photographs/nastyhaiko/'

  const SliderComponent = ({ slides }: any): JSX.Element => {
    return (
      <Fragment>
        <Swiper
          slidesPerView={slides}
          spaceBetween={20}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
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
