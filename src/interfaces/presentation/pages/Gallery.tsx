import Arrow from '../components/Arrow'

export const Gallery = () => {
  return (
    <>
      <main className="gallery">
        <div className="gallery__content">
          <div className="content__items">
            <div className="gallery__item">
              <img
                src="https://mediaslide-europe.storage.googleapis.com/selectivemgmt/pictures/314/6582/large-1665240872-0a553875dfbcbc77318ebee98f60e9ed.jpg?v=1665240926"
                alt=""
              />
              <h3>notes on vision</h3>
              <span>12 images</span>
            </div>
            <div className="gallery__item">
              <img
                src="https://mediaslide-europe.storage.googleapis.com/lineup/pictures/285/1639/large-1643101941-93e818192174e4073f5ce9624209051b.jpg"
                alt=""
              />
              <h3>notes on vision</h3>
              <span>12 images</span>
              {/* 
              <div className="item__selected">
                <img
                  src="https://mediaslide-europe.storage.googleapis.com/lineup/pictures/285/1639/large-1643101941-93e818192174e4073f5ce9624209051b.jpg"
                  alt=""
                />
                <img
                  src="https://mediaslide-europe.storage.googleapis.com/lineup/pictures/285/1639/large-1643101941-93e818192174e4073f5ce9624209051b.jpg"
                  alt=""
                />
                <img
                  src="https://mediaslide-europe.storage.googleapis.com/lineup/pictures/285/1639/large-1643101941-93e818192174e4073f5ce9624209051b.jpg"
                  alt=""
                />
                <img
                  src="https://mediaslide-europe.storage.googleapis.com/lineup/pictures/285/1639/large-1643101941-93e818192174e4073f5ce9624209051b.jpg"
                  alt=""
                />
              </div> */}
            </div>
            <div className="gallery__item">
              <img
                src="https://mediaslide-europe.storage.googleapis.com/lineup/pictures/285/1639/large-1670928449-5287aeaf3bf4760091e6b973d061a8f0.jpg"
                alt=""
              />
              <h3>notes on vision</h3>
              <span>12 images</span>
            </div>
            <div className="gallery__item">
              <img
                src="https://mediaslide-europe.storage.googleapis.com/lineup/pictures/285/1639/large-1642759591-3e0bec0350eac8dba83f589e638fdcd5.jpg"
                alt=""
              />
              <h3>notes on vision</h3>
              <span>12 images</span>
            </div>
          </div>
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
        </div>
        <div className="gallery__indicators">
          <hr />
          <span>04</span>
          <span>Gallery</span>
        </div>
      </main>
    </>
  )
}

export default Gallery
