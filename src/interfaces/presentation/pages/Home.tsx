import { useRef, useState, useEffect, Fragment } from 'react'
import { useWindowSize } from 'usehooks-ts'
import { Link } from 'react-router-dom'
import { Flip, gsap } from 'gsap/all'
gsap.registerPlugin(Flip)
import {
  toShowElements,
  toLoaderAnimaton,
  toExpandElementsAnimation,
} from '../../animations/animationAll'
import SimpleSlider from '../components/Slider'

const Home = ({ isName, isGallery }) => {
  const { width } = useWindowSize()
  const [loader, setLoader] = useState<boolean>(true)
  const name: string = isName
  const collection: string[] = isGallery
  const nameArray: string[] = name.split(' ')

  const containerRef = useRef(null)
  const SliderRef = useRef(null)

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
          {loader && <LoaderCounter />}
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

  toLoaderAnimaton()

  setTimeout(() => {
    toExpandElementsAnimation()
  }, 10000)

  return (
    <>
      <main className="home" ref={containerRef}>
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
          <div className="content__image carousel-midle">
            {/* {width && width <= 768 ? <span>mobile</span> : <span>Desktop</span>} */}

            <SimpleSlider>
              {collection.map((item: any) => {
                return (
                  <Fragment key={crypto.randomUUID()}>
                    <ItemGallery
                      name={item.name}
                      file={item.file}
                      gallery={item.gallery}
                    />
                  </Fragment>
                )
              })}
            </SimpleSlider>
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
    </>
  )
}

export default Home
