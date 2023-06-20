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
