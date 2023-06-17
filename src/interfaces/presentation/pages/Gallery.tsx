import { Carousel } from '@trendyol-js/react-carousel'
import Arrow from '../components/Arrow'

type GalleryProps = {
  content: string | object
  id: any
}

export const Gallery = ({ content, id }: GalleryProps) => {
  const { identifier } = id
  const { name, file, gallery } = content[identifier]
  const URL = '/photographs/nastyhaiko/'

  const galleryItems = gallery.map((item: string, index: number) => (
    <div className="item" key={index}>
      <img src={`${URL}/${file}/${item}`} alt={name} />
    </div>
  ))

  return (
    <main className="gallery">
      <Carousel
        show={1}
        slide={1}
        transition={0.5}
        className="is-gallery "
        rightArrow={<Arrow />}
        leftArrow={<Arrow />}
        children={galleryItems}
      />
      <div className="gallery__total">
        <span>
          {gallery.lenght > 10 ? '' : '0'}
          {gallery.length}
        </span>
        <span>gallery</span>
      </div>
    </main>
  )
}

export default Gallery
