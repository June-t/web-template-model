import { useLayoutEffect, useRef } from 'react'
import { Carousel } from '@trendyol-js/react-carousel'
import Arrow from '../components/Arrow'
import {
  toTransitionElements,
  toShowElements,
} from '../../animations/animationAll'

export const Home = () => {
  const GalleryRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    // const ctx = gsap.context(() => {}, GalleryRef)
    // toTransitionElements()

    setTimeout(() => {
      let contentDiv = document.querySelector('.content__options')
      let carouselElement: HTMLElement =
        document.querySelector('.carousel').childNodes

      carouselElement[0].classList.add('btn-prev')
      carouselElement[2].classList.add('btn-next')
      contentDiv?.appendChild(document.querySelector('.btn-prev'))
      contentDiv?.appendChild(document.querySelector('.btn-next'))
    }, 0)

    document
      .querySelectorAll('.home__content .gallery__item')
      .forEach((item) => {
        item.addEventListener('mouseenter', () => {
          toShowElements()
        })
      })

    // return ctx.revert()
  }, [])

  return (
    <>
      <main className="home" ref={GalleryRef}>
        <div className="home__content">
          <div className="content__title">
            <span>hello i'm</span>
            <span>NASTYA</span>
            <span>HAIKO</span>
          </div>
          <div className="content__image">
            <Carousel
              show={4}
              slide={1}
              transition={0.5}
              className="carousel is-transition"
              rightArrow={<Arrow />}
              leftArrow={<Arrow />}
            >
              <div className="gallery__item">
                <img
                  src="https://mediaslide-europe.storage.googleapis.com/selectivemgmt/pictures/314/6582/large-1665240872-0a553875dfbcbc77318ebee98f60e9ed.jpg?v=1665240926"
                  alt=""
                />
                <div className="item__text">
                  <h3>ROMANCE R.R</h3>
                  <span>12 images</span>
                </div>
              </div>
              <div className="gallery__item">
                <img
                  src="https://mediaslide-europe.storage.googleapis.com/lineup/pictures/285/1639/large-1643101941-93e818192174e4073f5ce9624209051b.jpg"
                  alt=""
                />
                <div className="item__text">
                  <h3>PH PHOTOS</h3>
                  <span>12 images</span>
                </div>
              </div>
              <div className="gallery__item">
                <img
                  src="https://mediaslide-europe.storage.googleapis.com/lineup/pictures/285/1639/large-1670928449-5287aeaf3bf4760091e6b973d061a8f0.jpg"
                  alt=""
                />
                <div className="item__text">
                  <h3>NAME ORDINARY</h3>
                  <span>12 images</span>
                </div>
              </div>
              <div className="gallery__item">
                <img
                  src="https://mediaslide-europe.storage.googleapis.com/lineup/pictures/285/1639/large-1642759591-3e0bec0350eac8dba83f589e638fdcd5.jpg"
                  alt=""
                />
                <div className="item__text">
                  <h3>ORDINATY PH</h3>
                  <span>12 images</span>
                </div>
              </div>
              <div className="gallery__item">
                <img
                  src="https://mediaslide-europe.storage.googleapis.com/lineup/pictures/285/1639/large-1642759591-3e0bec0350eac8dba83f589e638fdcd5.jpg"
                  alt=""
                />
                <div className="item__text">
                  <h3>ORDINATY PH</h3>
                  <span>12 images</span>
                </div>
              </div>
              <div className="gallery__item">
                <img
                  src="https://mediaslide-europe.storage.googleapis.com/lineup/pictures/285/1639/large-1642759591-3e0bec0350eac8dba83f589e638fdcd5.jpg"
                  alt=""
                />
                <div className="item__text">
                  <h3>ORDINATY PH</h3>
                  <span>12 images</span>
                </div>
              </div>
            </Carousel>
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
            <h3>nastya HAIKO</h3>
            <span>
              A STREET PHOTOGRAPHER <br /> BASED IN LONDON
            </span>
            <span>©2023</span>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
