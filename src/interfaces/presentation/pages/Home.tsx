import { useRef, useState, useEffect, Fragment } from 'react'
import { useWindowSize } from 'usehooks-ts'
import { Link } from 'react-router-dom'
import { toShowElements } from '../../animations/animationAll'

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

  return (
    <>
      <main className="home" ref={containerRef}>
        <div className="home__content">
          <div className="content__title">
            <span>hello i'm</span>
            <span>{nameArray[0]}</span>
            <span>{nameArray[nameArray.length - 1]}</span>
          </div>
          <div className="content__image">
            {width && width <= 768 ? <span>mobile</span> : <span>Desktop</span>}
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
