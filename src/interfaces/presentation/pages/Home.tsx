import { useLayoutEffect, useRef } from 'react'
import Arrow from '../components/Arrow'
import { toTransitionElements } from '../../animations/animationAll'

export const Home = () => {
  const GalleryRef = useRef<HTMLDivElement>(null)

  // FLIP" is an animation technique that stands for "First", "Last", "Invert", "Play" and was coined by Paul Lewis. Here's a demo of how it works

  useLayoutEffect(() => {
    // const ctx = gsap.context(() => {}, GalleryRef)
    document.querySelector('.home__content').addEventListener('click', () => {
      toTransitionElements()
    })
    // return ctx.revert()
  }, [])

  return (
    <>
      <main className="home" ref={GalleryRef}>
        <div className="home__content">
          <div className="content__title">
            <span>hello i'm</span>
            <span>francesco</span>
            <span>gioia</span>
          </div>
          <div className="content__image">
            <div className="gallery__item">
              <img
                src="https://mediaslide-europe.storage.googleapis.com/selectivemgmt/pictures/314/6582/large-1665240872-0a553875dfbcbc77318ebee98f60e9ed.jpg?v=1665240926"
                alt=""
              />
              <div className="item__text">
                <h3>notes on vision</h3>
                <span>12 images</span>
              </div>
            </div>
            <div className="gallery__item">
              <img
                src="https://mediaslide-europe.storage.googleapis.com/lineup/pictures/285/1639/large-1643101941-93e818192174e4073f5ce9624209051b.jpg"
                alt=""
              />
              <div className="item__text">
                <h3>notes on vision</h3>
                <span>12 images</span>
              </div>
            </div>
            <div className="gallery__item">
              <img
                src="https://mediaslide-europe.storage.googleapis.com/lineup/pictures/285/1639/large-1670928449-5287aeaf3bf4760091e6b973d061a8f0.jpg"
                alt=""
              />
              <div className="item__text">
                <h3>notes on vision</h3>
                <span>12 images</span>
              </div>
            </div>
            <div className="gallery__item">
              <img
                src="https://mediaslide-europe.storage.googleapis.com/lineup/pictures/285/1639/large-1642759591-3e0bec0350eac8dba83f589e638fdcd5.jpg"
                alt=""
              />
              <div className="item__text">
                <h3>notes on vision</h3>
                <span>12 images</span>
              </div>
            </div>
          </div>
        </div>
        <div className="home__indicators">
          <div className="content__options">
            <div className="options__previus">
              <button>
                <Arrow />
              </button>
            </div>
            <div className="options__next">
              <button>
                <Arrow />
              </button>
            </div>
          </div>
          <div className="indicators">
            {/* <hr /> */}
            <span>04</span>
            <span>Gallery</span>
          </div>
          <div className="footerExtend">
            <h3>Chantal G. Crespo</h3>
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

// const tl = gsap.timeline({
//   paused: true,
//   ease: 'power3.inOut',
//   duration: 2,
//   onComplete: () => {
//     document.querySelector('.home__content')?.classList.add('is-gallery')
//   },
// })
// tl.to('.gallery__item', { rotate: 0 })
// tl.play()
