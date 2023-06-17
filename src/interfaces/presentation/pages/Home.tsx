import { useLayoutEffect, useState, useRef, Fragment } from 'react'
import { useWindowSize } from 'usehooks-ts'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import {
  toTransitionElements,
  toShowElements,
  toLoaderAnimation,
} from '../../animations/animationAll'
import { Carousel } from '@trendyol-js/react-carousel'
import Arrow from '../components/Arrow'

type Name = {
  first: string
  last: string
}

export const Home = ({ isName, isGallery }) => {
  const [loader, setLoader] = useState(0)
  const { width } = useWindowSize()
  const URL = '/photographs/nastyhaiko/'
  const { first, last }: Name = isName
  const collection: string[] = isGallery
  const containerRef = useRef<HTMLDivElement>(null)

  const LoaderCounter = () => {
    return (
      <div className="loader__counter">
        <span>0</span>
      </div>
    )
  }

  const ItemGallery = ({ name, file, gallery }) => {
    const previewImage = gallery[0]
    return (
      <div
        className="gallery__item"
        onMouseEnter={(e: unknown | any) => {
          toShowElements(e)
        }}
      >
        <div className="item__img">
          {loader === 0 ? <LoaderCounter /> : null}
          <img src={`${URL}/${file}/${previewImage}`} alt="" />
        </div>
        <div className="item__text">
          <h3>{name}</h3>
          <span>{gallery.length} images</span>
        </div>
        <Link to={`/${file}`} className="item__link"></Link>
      </div>
    )
  }

  const resetCarousel = () => {
    const carouselElement = document.querySelector('.carousel')?.childNodes
    const contentDiv = document.querySelector('.content__options')
    if (carouselElement) {
      carouselElement[0].classList.add('btn-prev')
      carouselElement[2].classList.add('btn-next')
      contentDiv?.append(carouselElement[0], carouselElement[2])
    }
  }

  const CarouselDesktop = () => {
    return (
      <Fragment>
        <Carousel
          show={4}
          slide={1}
          transition={0.5}
          className="carousel is-transition"
          responsive={true}
          rightArrow={<Arrow />}
          leftArrow={<Arrow />}
        >
          {collection.map((item, index) => {
            return (
              <Fragment key={index}>
                <ItemGallery
                  name={item['name']}
                  file={item['file']}
                  gallery={item['gallery']}
                />
              </Fragment>
            )
          })}
        </Carousel>
      </Fragment>
    )
  }

  const CarouselMobile = () => {
    return (
      <Fragment>
        <Carousel
          show={1}
          slide={1}
          transition={0.5}
          responsive={false}
          className="carousel is-transition"
          rightArrow={<Arrow />}
          leftArrow={<Arrow />}
        >
          {collection.map((item, index) => {
            return (
              <Fragment key={index}>
                <ItemGallery
                  name={item['name']}
                  file={item['file']}
                  gallery={item['gallery']}
                />
              </Fragment>
            )
          })}
        </Carousel>
      </Fragment>
    )
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elementTransition = document.querySelector('.home__content')

      const handleClick = (): void => {
        toTransitionElements()
        elementTransition.removeEventListener('click', handleClick)
      }

      elementTransition.addEventListener('click', handleClick)

      setTimeout(() => {
        toLoaderAnimation()
        resetCarousel()
      }, 0)
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <main className="home" ref={containerRef}>
        <div className="home__content">
          <div className="content__title">
            <div className="mask">
              <span>hello i'm</span>
            </div>
            <div className="mask">
              <span>{first}</span>
            </div>
            <div className="mask">
              <span>{last}</span>
            </div>
          </div>
          <div className="content__image">
            {width && width <= 768 ? <CarouselMobile /> : <CarouselDesktop />}
          </div>
        </div>
        <div className="home__indicators">
          <div className="content__options"></div>
          <div className="indicators">
            <hr className="line" />
            <span className="indicators__number">04</span>
            <span className="indicators__text">Gallery</span>
          </div>
          <div className="footerExtend">
            <h3>
              {first}
              {last}
            </h3>
            <span className="credits">
              Credits to whom <br /> corresponds
            </span>
            <span>©2023</span>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
