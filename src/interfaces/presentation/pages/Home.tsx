import { useLayoutEffect } from 'react'
import { Carousel } from '@trendyol-js/react-carousel'
import Arrow from '../components/Arrow'
import {
  toTransitionElements,
  toShowElements,
} from '../../animations/animationAll'

type Name = {
  first: string
  last: string
}

export const Home = ({ isName, isGallery }) => {
  const URL = '/photographs/nastyhaiko/'
  const { first, last }: Name = isName
  const collection: string[] = isGallery

  const ItemGallery = ({ name, file, gallery }) => {
    const previewImage = gallery[0]
    return (
      <div className="gallery__item">
        <img src={`${URL}/${file}/${previewImage}`} alt="" />
        <div className="item__text">
          <h3>{name}</h3>
          <span>{gallery.length} images</span>
        </div>
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

  useLayoutEffect(() => {
    const elementsGallery = document
      .querySelectorAll('.gallery__item')
      .forEach((item) => {
        item.addEventListener('mouseenter', () => {
          toShowElements()
        })
      })

    setTimeout(() => {
      resetCarousel()
      // toTransitionElements()
    }, 0)
  }, [])

  return (
    <>
      <main className="home">
        <div className="home__content">
          <div className="content__title">
            <span>hello i'm</span>
            <span>{first}</span>
            <span>{last}</span>
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
              {collection.map((item, index) => {
                return (
                  <ItemGallery
                    key={index}
                    name={item['name']}
                    file={item['file']}
                    gallery={item['gallery']}
                  />
                )
              })}
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
            <h3>Nastya HAIKO</h3>
            <span>
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
