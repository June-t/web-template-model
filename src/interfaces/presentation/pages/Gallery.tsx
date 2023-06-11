import { Carousel } from '@trendyol-js/react-carousel'
import Arrow from '../components/Arrow'
export const Gallery = () => {
  return (
    <>
      <main className="gallery">
        <Carousel
          show={1}
          slide={1}
          transition={0.5}
          className="is-gallery "
          rightArrow={<Arrow />}
          leftArrow={<Arrow />}
        >
          <div className="item">
            <img src="https://picsum.photos/400/500" alt="" />
          </div>
          <div className="item">
            <img src="https://picsum.photos/400/500" alt="" />
          </div>
          <div className="item">
            <img src="https://picsum.photos/400/500" alt="" />
          </div>
          <div className="item">
            <img src="https://picsum.photos/400/500" alt="" />
          </div>
          <div className="item">
            <img src="https://picsum.photos/400/500" alt="" />
          </div>
        </Carousel>
      </main>
    </>
  )
}

export default Gallery
