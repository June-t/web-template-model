import { useRef, useState, useEffect, Fragment } from 'react'
import { useWindowSize } from 'usehooks-ts'
import { Link } from 'react-router-dom'
import {
  toTransitionElements,
  toShowElements,
  toLoaderAnimation,
} from '../../animations/animationAll'
import { Carousel } from '@trendyol-js/react-carousel'
import Arrow from '../components/Arrow'

const Home = ({ isName, isGallery }) => {
  const { width } = useWindowSize()
  const [loader, setLoader] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const name: string = isName
  const collection: string[] = isGallery
  const nameArray: string[] = name.split(' ')

  const LoaderCounter = () => {
    return (
      <div className="loader__counter">
        <span>0</span>
      </div>
    )
  }

  const ItemGallery = ({ name, file, gallery }) => {
    const previewImage = gallery[0]
    const URL = '/photographs/nastyhaiko/'
    return (
      <div
        className="gallery__item"
        onMouseEnter={(e: unknown) => {
          toShowElements(e)
        }}
        key={crypto.randomUUID()}
      >
        <div className="item__img">
          {loader === false ? <LoaderCounter /> : <LoaderCounter />}
          <img src={`${URL}/${file}/${previewImage}`} alt={file} />
        </div>
        <div className="item__text">
          <h3>{name}</h3>
          <span>{gallery.length} images</span>
        </div>
        <Link to={`/${file}`} className="item__link"></Link>
      </div>
    )
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
          key={crypto.randomUUID()}
        >
          {collection.map((item) => {
            return (
              <Fragment key={crypto.randomUUID()}>
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
          {collection.map((item) => {
            return (
              <Fragment key={crypto.randomUUID()}>
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

  useEffect(() => {
    setTimeout(() => {
      toLoaderAnimation()
      setTimeout(() => {
        // toTransitionElements()
      }, 5000)
    }, 0)
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
              <span>{nameArray[0]}</span>
            </div>
            <div className="mask">
              <span>{nameArray[nameArray.length - 1]}</span>
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
            <h3>{name}</h3>
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
