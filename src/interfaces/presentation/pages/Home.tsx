import { useRef, useState, Fragment, useCallback } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useWindowSize } from 'usehooks-ts'
import { Link } from 'react-router-dom'
import {
  toShowElements,
  toLoaderAnimaton,
  toExpandElementsAnimation,
} from '../../animations/animationAll'
import IconArrow from '../components/Arrow'

import 'swiper/css'
import 'swiper/css/navigation'

const Home = ({ isName, isGallery }) => {
  const { width } = useWindowSize()
  const [loader] = useState<boolean>(true)
  const containerRef = useRef(null)

  const name: string = isName
  const collection: string[] = isGallery
  const totalGallery = collection.length
  const nameArray: string[] = name.split(' ')

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
          {collection.map((item: any) => {
            return (
              <SwiperSlide key={crypto.randomUUID()}>
                {' '}
                <ItemGallery
                  name={item.name}
                  file={item.file}
                  gallery={item.gallery}
                />
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

  const ItemGallery = ({ name, file, gallery }) => {
    const previewImage = gallery[0]
    const URL = '/photographs/nastyhaiko/'

    const LoaderCounter = () => {
      return (
        <div className="loader__counter">
          <span>0</span>
        </div>
      )
    }

    return (
      <Fragment>
        <div
          className="gallery__item"
          key={crypto.randomUUID()}
          onMouseOver={(event) => {
            toShowElements(event)
          }}
        >
          <div className="item__img">
            {loader && <LoaderCounter />}
            <img src={`${URL}/${file}/${previewImage}`} alt={file} />
          </div>
          <div className="item__text">
            <h3>{name}</h3>
            <span>{gallery.length} images</span>
          </div>
          <Link to={`/${file}`} className="item__link"></Link>
        </div>
      </Fragment>
    )
  }

  const Desktop = (): JSX.Element => {
    return (
      <main className="home" ref={containerRef}>
        <div className="home__content loader__animation">
          <div className="content__title">
            <div className="mask">
              <span>hello, i'm</span>
            </div>
            <div className="mask">
              <span>{nameArray[0]}</span>
            </div>
            <div className="mask">
              <span>{nameArray[nameArray.length - 1]}</span>
            </div>
          </div>
          <div className="content__image">
            <SliderComponent slides={4} />
          </div>
        </div>
        <div className="home__indicators">
          <div className="indicators">
            <hr className="line" />
            <span className="indicators__number">04</span>
            <span className="indicators__text">Gallery</span>
          </div>
          <div className="footerExtend">
            <h3>{name}</h3>
            <span className="credits">
              Credits to whom <br /> corresponds
            </span>
            <span>©2023</span>
          </div>
        </div>
      </main>
    )
  }

  const Mobile = (): JSX.Element => {
    return (
      <main className="home home__mobile" ref={containerRef}>
        <div className="home__content loader__animation">
          <div className="content__title">
            <div className="mask">
              <span>hello i'm</span>
            </div>
            <div className="mask">
              <span>{nameArray[0]}</span>
            </div>
            <div className="mask">
              <span>{nameArray[nameArray.length - 1]}</span>
            </div>
          </div>
          <div className="content__image">
            <SliderComponent slides={1} />
          </div>
        </div>
        <div className="home__indicators">
          <div className="indicators">
            <hr className="line" />
            <span className="indicators__number">
              {`${'0'}` + `${totalGallery}`}
            </span>
            <span className="indicators__text">Gallery</span>
          </div>
          <div className="footerExtend">
            <h3>{name}</h3>
            <span className="credits">
              Credits to whom <br /> corresponds
            </span>
            <span>©2023</span>
          </div>
        </div>
      </main>
    )
  }

  toLoaderAnimaton()

  setTimeout(() => {
    // toExpandElementsAnimation()
  }, 5000)

  return <>{width && width <= 768 ? <Mobile /> : <Desktop />}</>
}

export default Home
