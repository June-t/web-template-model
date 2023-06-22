import { useRef, useState, useEffect, Fragment } from 'react'
import { useWindowSize } from 'usehooks-ts'
import { Link } from 'react-router-dom'
import { Flip, gsap } from 'gsap/all'
gsap.registerPlugin(Flip)
import {
  toShowElements,
  animationExpandImages,
} from '../../animations/animationAll'
import SimpleSlider from '../components/Slider'

const Home = ({ isName, isGallery }) => {
  const { width } = useWindowSize()
  const [loader, setLoader] = useState<boolean>(true)
  const containerRef = useRef(null)
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

  useEffect(() => {
    // const ctx = gsap.context(() => {

    // }, containerRef)

    setTimeout(() => {
      const timeline = gsap.timeline()

      // COUNTER LOADER [01/03]
      timeline
        .to('.loader__counter span', { opacity: 1 }, '+=0.5')
        .to(
          '.loader__counter span',
          {
            duration: 2.5,
            innerHTML: 100,
            roundProps: 'innerHTML',
            onUpdate: function () {
              const counter = document.querySelector('.loader__counter span')
              if (counter) {
                counter.textContent = Math.round(
                  this.targets()[0].innerHTML
                ).toString()
              }
            },
          },
          '<'
        )
        .to('.item__img', { height: '50vh', duration: 2 }, '<')
        .to('.loader__counter span', { opacity: 0, duration: 0.5 }, '+=0.5')
      // FIRST IMAGE [02/03]
      timeline
        .to('.item__img', { width: '100%', duration: 2 }, '<')
        .to('.item__img', { background: '#0000' }, '<')
        .to('.item__img img', { opacity: 1 }, '<')

      // ALL IMAGE ROTATE [03/03]

      // gsap.utils
      //   .toArray('.gallery__item img')
      //   .forEach((container: any, i: any) => {
      //     timeline.to(container, {
      //       rotate: 5 * i,
      //       y: 5 * i,
      //       stagger: 0.05,
      //     })
      //   })
    }, 1000)
  }, [])

  return (
    <>
      <main className="home" ref={containerRef}>
        <div className="home__content state-transition-loader">
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
